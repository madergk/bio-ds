import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

/**
 * Input Component
 * 
 * Text input field for user data entry.
 * Supports various sizes, validation states, and addons.
 */
const meta: Meta<InputComponent> = {
  title: 'Atoms/Input',
  component: InputComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Input component provides a text input field with consistent styling and validation states. It supports prefixes, suffixes, and addons for enhanced functionality.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    state: {
      control: 'select',
      options: ['normal', 'focused', 'disabled'],
      description: 'State of the input',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    size: 'md',
    placeholder: 'Enter text...',
    state: 'normal',
    value: '',
  },
  render: (args) => ({
    props: args,
    template: `
      <bio-input 
        [size]="size"
        [placeholder]="placeholder"
        [state]="state"
        [value]="value">
      </bio-input>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <bio-input size="sm" placeholder="Small input"></bio-input>
        <bio-input size="md" placeholder="Medium input"></bio-input>
        <bio-input size="lg" placeholder="Large input"></bio-input>
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <bio-input state="normal" placeholder="Normal state"></bio-input>
        <bio-input state="focused" placeholder="Focused state"></bio-input>
        <bio-input state="disabled" placeholder="Disabled state"></bio-input>
      </div>
    `,
  }),
};

