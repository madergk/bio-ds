import type { Preview } from '@storybook/angular';

// Import design tokens CSS and Bootstrap-compatible styles
// Import order is critical - must match the order in index.css
// 1. Design tokens (source of truth)
import '../src/tokens/generated/variables.css';
// 2. Bootstrap-compatible variables (maps tokens to Bootstrap names)
import '../src/styles/bootstrap-variables.css';
// 3. Bootstrap reboot (base styles)
import '../src/styles/bootstrap-reboot.css';
// 4. Bootstrap utilities (utility classes)
import '../src/styles/bootstrap-utilities.css';

// Set Compodoc JSON for Angular component documentation (optional)
// Uncomment and run "npm run compodoc" to generate documentation.json
// import { setCompodocJson } from '@storybook/addon-docs';
// import docJson from '../documentation.json';
// try {
//   setCompodocJson(docJson);
// } catch (e) {
//   console.warn('Compodoc JSON not found. Run "npm run compodoc" to generate it.');
// }

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: true,
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#212529',
        },
        {
          name: 'gray',
          value: '#f8f9fa',
        },
      ],
    },
  },
  tags: ['autodocs'],
};

export default preview;

