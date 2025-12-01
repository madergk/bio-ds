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
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Default: Story = {
  args: {
    size: 'md',
    placeholder: 'Enter text...',
    disabled: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <bio-input-wrapper [size]="size">
        <bio-input-container>
          <input 
            bio-input 
            [class]="'bio-input--' + size"
            [placeholder]="placeholder"
            [disabled]="disabled"
            type="text"
          />
        </bio-input-container>
      </bio-input-wrapper>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <bio-input-wrapper size="sm">
          <bio-input-container>
            <input bio-input class="bio-input--sm" placeholder="Small input" type="text" />
          </bio-input-container>
        </bio-input-wrapper>
        <bio-input-wrapper size="md">
          <bio-input-container>
            <input bio-input class="bio-input--md" placeholder="Medium input" type="text" />
          </bio-input-container>
        </bio-input-wrapper>
        <bio-input-wrapper size="lg">
          <bio-input-container>
            <input bio-input class="bio-input--lg" placeholder="Large input" type="text" />
          </bio-input-container>
        </bio-input-wrapper>
      </div>
    `,
  }),
};

export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
        <bio-input-wrapper>
          <bio-input-container>
            <input bio-input class="bio-input--md" placeholder="Normal state" type="text" />
          </bio-input-container>
        </bio-input-wrapper>
        <bio-input-wrapper class="bio-input-wrapper--focused">
          <bio-input-container>
            <input bio-input class="bio-input--md" placeholder="Focused state" type="text" />
          </bio-input-container>
        </bio-input-wrapper>
        <bio-input-wrapper class="bio-input-wrapper--disabled">
          <bio-input-container>
            <input bio-input class="bio-input--md" placeholder="Disabled state" type="text" disabled />
          </bio-input-container>
        </bio-input-wrapper>
      </div>
    `,
  }),
};

