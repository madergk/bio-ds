#!/usr/bin/env node
/**
 * Generate Storybook stories for components without them
 *
 * Usage:
 *   node scripts/generate-stories.js
 *   node scripts/generate-stories.js --component=spinner
 *   node scripts/generate-stories.js --dry-run
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  dryRun: args.includes('--dry-run'),
  component: args.find(arg => arg.startsWith('--component='))?.split('=')[1],
};

// Component categories
const ATOMS_DIR = path.join(__dirname, '../src/components/atoms');
const MOLECULES_DIR = path.join(__dirname, '../src/components/molecules');

// Get all component directories
function getComponentDirs(baseDir) {
  if (!fs.existsSync(baseDir)) return [];

  return fs.readdirSync(baseDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({
      name: dirent.name,
      path: path.join(baseDir, dirent.name),
      category: baseDir.includes('atoms') ? 'Atoms' : 'Molecules',
    }));
}

// Check if component has a story file
function hasStory(componentDir) {
  const storyFile = path.join(componentDir.path, `${componentDir.name}.stories.ts`);
  return fs.existsSync(storyFile);
}

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Generate story template
function generateStoryTemplate(componentDir) {
  const componentName = componentDir.name;
  const pascalName = toPascalCase(componentName);
  const category = componentDir.category;

  return `import type { Meta, StoryObj } from '@storybook/angular';
import { ${pascalName}Component } from './${componentName}.component';

/**
 * ${pascalName} Component
 *
 * A ${category.toLowerCase()} component in the Bio Design System.
 *
 * ## Usage
 * \`\`\`typescript
 * import { ${pascalName}Component } from '@madergk/bio-ds';
 * \`\`\`
 */
const meta: Meta<${pascalName}Component> = {
  title: '${category}/${pascalName}',
  component: ${pascalName}Component,
  parameters: {
    docs: {
      description: {
        component: 'The ${pascalName} component provides [describe main functionality here].',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    // TODO: Add component props/inputs here
    // Example:
    // label: {
    //   control: 'text',
    //   description: 'The label text',
    //   table: {
    //     type: { summary: 'string' },
    //     defaultValue: { summary: '' },
    //   },
    // },
  },
};

export default meta;
type Story = StoryObj<${pascalName}Component>;

/**
 * Default ${pascalName} - basic usage with default props.
 */
export const Default: Story = {
  args: {
    // TODO: Add default prop values
  },
};

/**
 * Example variant - customize for your component's specific variants.
 */
export const Variant: Story = {
  args: {
    // TODO: Add variant prop values
  },
};

/**
 * Interactive example showing the component in use.
 */
export const Interactive: Story = {
  render: () => ({
    template: \`
      <div style="padding: 16px;">
        <bio-${componentName}></bio-${componentName}>
      </div>
    \`,
  }),
  parameters: {
    docs: {
      description: {
        story: 'An interactive example of the ${pascalName} component.',
      },
    },
  },
};
`;
}

// Main function
function main() {
  console.log('🔍 Scanning for components without stories...\n');

  const atoms = getComponentDirs(ATOMS_DIR);
  const molecules = getComponentDirs(MOLECULES_DIR);
  const allComponents = [...atoms, ...molecules];

  // Filter components
  let componentsToProcess = allComponents.filter(comp => !hasStory(comp));

  if (options.component) {
    componentsToProcess = componentsToProcess.filter(
      comp => comp.name === options.component
    );

    if (componentsToProcess.length === 0) {
      console.log(`❌ Component "${options.component}" not found or already has a story.`);
      return;
    }
  }

  if (componentsToProcess.length === 0) {
    console.log('✅ All components already have stories!');
    return;
  }

  console.log(`Found ${componentsToProcess.length} component(s) without stories:\n`);

  componentsToProcess.forEach((comp, index) => {
    const storyPath = path.join(comp.path, `${comp.name}.stories.ts`);
    const content = generateStoryTemplate(comp);

    console.log(`${index + 1}. ${comp.category}/${toPascalCase(comp.name)}`);
    console.log(`   Path: ${storyPath}`);

    if (options.dryRun) {
      console.log('   Status: [DRY RUN] Would create story file');
    } else {
      try {
        fs.writeFileSync(storyPath, content, 'utf-8');
        console.log('   Status: ✅ Story file created');
      } catch (error) {
        console.log(`   Status: ❌ Error: ${error.message}`);
      }
    }
    console.log('');
  });

  console.log('\n📝 Summary:');
  console.log(`   Total components: ${allComponents.length}`);
  console.log(`   With stories: ${allComponents.length - componentsToProcess.length}`);
  console.log(`   Without stories: ${componentsToProcess.length}`);
  console.log(`   ${options.dryRun ? 'Would create' : 'Created'}: ${componentsToProcess.length}`);

  if (!options.dryRun && componentsToProcess.length > 0) {
    console.log('\n⚠️  TODO: Update the generated story files with:');
    console.log('   1. Actual component props in argTypes');
    console.log('   2. Realistic default values');
    console.log('   3. Additional variants specific to each component');
    console.log('   4. Better descriptions and documentation');
    console.log('\n📚 See STORYBOOK_GUIDE.md for best practices.');
  }
}

// Run the script
main();
