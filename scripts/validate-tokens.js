#!/usr/bin/env node

/**
 * Token Validation Script
 * 
 * Validates the consolidated tokens.json file:
 * 1. Valid JSON structure
 * 2. Required categories exist
 * 3. Token values are properly formatted
 * 4. No duplicate token names
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Console colors
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Required token categories
const requiredCategories = ['color', 'spacing', 'typography', 'border'];

// Optional but recommended categories
const optionalCategories = ['shadow', 'transition', 'zIndex'];

let errors = [];
let warnings = [];

function validateJSON(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);
    return { valid: true, data: json };
  } catch (error) {
    return { valid: false, error: error.message };
  }
}

function validateTokenValue(token, path) {
  if (!token || typeof token !== 'object') {
    errors.push(`❌ Token at "${path}" is not an object`);
    return false;
  }

  if (!token.value && token.value !== 0 && token.value !== '') {
    errors.push(`❌ Token at "${path}" missing required "value" property`);
    return false;
  }

  return true;
}

function validateCategory(categoryName, categoryData, isRequired = true) {
  if (!categoryData) {
    if (isRequired) {
      errors.push(`❌ Required category "${categoryName}" is missing`);
    } else {
      warnings.push(`⚠️  Optional category "${categoryName}" is missing`);
    }
    return;
  }

  if (typeof categoryData !== 'object' || Array.isArray(categoryData)) {
    errors.push(`❌ Category "${categoryName}" must be an object`);
    return;
  }

  // Recursively validate all tokens in the category
  function validateTokenRecursive(obj, currentPath) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
        const value = obj[key];

        if (value && typeof value === 'object' && 'value' in value) {
          // This is a token
          validateTokenValue(value, `${categoryName}.${newPath}`);
        } else if (value && typeof value === 'object' && !Array.isArray(value)) {
          // This is a nested category, continue recursion
          validateTokenRecursive(value, newPath);
        } else {
          warnings.push(`⚠️  Unexpected structure at "${categoryName}.${newPath}"`);
        }
      }
    }
  }

  validateTokenRecursive(categoryData, '');
}

function checkForDuplicates(tokens, categoryName) {
  const seen = new Set();
  const duplicates = [];

  function collectPaths(obj, currentPath = '') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newPath = currentPath ? `${currentPath}.${key}` : key;
        const value = obj[key];

        if (value && typeof value === 'object' && 'value' in value) {
          if (seen.has(newPath)) {
            duplicates.push(newPath);
          } else {
            seen.add(newPath);
          }
        } else if (value && typeof value === 'object' && !Array.isArray(value)) {
          collectPaths(value, newPath);
        }
      }
    }
  }

  collectPaths(tokens);

  if (duplicates.length > 0) {
    errors.push(`❌ Duplicate token paths found in "${categoryName}": ${duplicates.join(', ')}`);
  }
}

function main() {
  log('\n🔍 Validating design tokens...\n', 'blue');

  const tokensFile = path.join(__dirname, '..', 'tokens', 'tokens.json');

  if (!fs.existsSync(tokensFile)) {
    log('❌ tokens/tokens.json not found', 'red');
    process.exit(1);
  }

  log(`📄 Validating tokens/tokens.json...\n`, 'blue');

  const result = validateJSON(tokensFile);

  if (!result.valid) {
    log(`❌ Invalid JSON: ${result.error}`, 'red');
    process.exit(1);
  }

  const tokens = result.data;

  // Validate required categories
  requiredCategories.forEach(category => {
    validateCategory(category, tokens[category], true);
    if (tokens[category]) {
      checkForDuplicates(tokens[category], category);
    }
  });

  // Validate optional categories
  optionalCategories.forEach(category => {
    validateCategory(category, tokens[category], false);
    if (tokens[category]) {
      checkForDuplicates(tokens[category], category);
    }
  });

  // Check for unknown top-level properties
  Object.keys(tokens).forEach(key => {
    if (!requiredCategories.includes(key) && !optionalCategories.includes(key)) {
      if (key.startsWith('$') || key.startsWith('comment')) {
        // Ignore schema and comment fields
        return;
      }
      warnings.push(`⚠️  Unknown top-level property: "${key}"`);
    }
  });

  // Show results
  log('\n' + '='.repeat(50), 'blue');

  if (warnings.length > 0) {
    log('\n⚠️  WARNINGS:', 'yellow');
    warnings.forEach(warning => log(`  ${warning}`, 'yellow'));
  }

  if (errors.length > 0) {
    log('\n❌ ERRORS:', 'red');
    errors.forEach(error => log(`  ${error}`, 'red'));
    log('\n❌ Validation failed\n', 'red');
    process.exit(1);
  }

  if (warnings.length === 0 && errors.length === 0) {
    log('\n✅ All tokens are valid!\n', 'green');
  } else if (errors.length === 0) {
    log('\n✅ Validation completed with warnings\n', 'green');
  }
}

main();
