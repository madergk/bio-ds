import type { Preview } from '@storybook/angular';

// Import design tokens CSS
import '../src/styles/index.css';

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

