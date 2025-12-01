/**
 * Style Dictionary Configuration
 * 
 * This configuration generates design tokens in multiple formats:
 * - CSS Variables: For use in component stylesheets
 * - TypeScript: Type definitions (for IDE autocomplete)
 * - JSON: Runtime access in TypeScript/JavaScript
 * 
 * The tokens are generated from tokens/tokens.json (consolidated source)
 */

export default {
  // Source: Single consolidated token file for better maintainability
  source: ['tokens/tokens.json'],
  
  platforms: {
    // CSS Custom Properties (CSS Variables)
    // These are used directly in component CSS files
    css: {
      transformGroup: 'css',
      buildPath: 'src/tokens/generated/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            // Use kebab-case for CSS variables (Bootstrap-like)
            // Example: --color-primary-500, --spacing-md
            outputReferences: true
          }
        }
      ]
    },
    
    // TypeScript type definitions
    // Provides type safety and autocomplete in IDE
    typescript: {
      transformGroup: 'js',
      buildPath: 'src/tokens/generated/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'typescript/es6-declarations'
        }
      ]
    },
    
    // JSON format for runtime access
    // Allows programmatic access to token values
    json: {
      transformGroup: 'js',
      buildPath: 'src/tokens/generated/',
      files: [
        {
          destination: 'tokens.json',
          format: 'json/nested'
        }
      ]
    }
  }
};

