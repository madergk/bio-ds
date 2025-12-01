import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent, ButtonVariant, ButtonSize } from './button.component';

/**
 * Button Component
 * 
 * A reusable button component following atomic design principles.
 * This is an "atom" - a basic building block of the design system.
 * 
 * ## Features
 * - Multiple variants (primary, secondary, outline, text, danger)
 * - Three sizes (sm, md, lg)
 * - Disabled state
 * - Type safety with TypeScript
 * - Uses design tokens for consistent styling
 */
const meta: Meta<ButtonComponent> = {
  title: 'Atoms/Button',
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Button component is a fundamental building block of the Bio Design System. It provides consistent styling and behavior across all applications.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text', 'danger'],
      description: 'Visual variant of the button',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button',
      table: {
        type: { summary: 'ButtonSize' },
        defaultValue: { summary: 'md' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'button' },
      },
    },
    label: {
      control: 'text',
      description: 'Button text content',
      table: {
        type: { summary: 'string' },
      },
    },
    click: {
      action: 'clicked',
      description: 'Click event emitter',
    },
  },
};

export default meta;
type Story = StoryObj<ButtonComponent>;

/**
 * Primary button - the default and most commonly used variant.
 * Use for primary actions in your application.
 */
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    disabled: false,
  },
};

/**
 * Secondary button - use for secondary actions.
 * Provides a less prominent alternative to primary buttons.
 */
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    label: 'Button',
    disabled: false,
  },
};

/**
 * Outline button - use when you want a button with a border but no background.
 * Good for less prominent actions or when you want to reduce visual weight.
 */
export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    label: 'Button',
    disabled: false,
  },
};

/**
 * Text button - the most minimal button style.
 * Use for tertiary actions or when space is limited.
 */
export const Text: Story = {
  args: {
    variant: 'text',
    size: 'md',
    label: 'Button',
    disabled: false,
  },
};

/**
 * Danger button - use for destructive actions like delete or remove.
 * The red color signals caution to users.
 */
export const Danger: Story = {
  args: {
    variant: 'danger',
    size: 'md',
    label: 'Button',
    disabled: false,
  },
};

/**
 * Size variants - buttons come in three sizes.
 * Choose the size that best fits your layout and hierarchy.
 */
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-button variant="primary" size="sm">Small</bio-button>
        <bio-button variant="primary" size="md">Medium</bio-button>
        <bio-button variant="primary" size="lg">Large</bio-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons come in three sizes: small (sm), medium (md), and large (lg). Medium is the default size.',
      },
    },
  },
};

/**
 * Disabled state - buttons can be disabled to prevent interaction.
 * Disabled buttons have reduced opacity and cannot be clicked.
 */
export const Disabled: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-button variant="primary" [disabled]="true">Disabled Primary</bio-button>
        <bio-button variant="secondary" [disabled]="true">Disabled Secondary</bio-button>
        <bio-button variant="outline" [disabled]="true">Disabled Outline</bio-button>
        <bio-button variant="text" [disabled]="true">Disabled Text</bio-button>
        <bio-button variant="danger" [disabled]="true">Disabled Danger</bio-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All button variants support a disabled state. Disabled buttons are visually distinct and cannot be interacted with.',
      },
    },
  },
};

/**
 * All variants - see all button variants side by side.
 */
export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-button variant="primary">Primary</bio-button>
        <bio-button variant="secondary">Secondary</bio-button>
        <bio-button variant="outline">Outline</bio-button>
        <bio-button variant="text">Text</bio-button>
        <bio-button variant="danger">Danger</bio-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'All available button variants displayed together for easy comparison.',
      },
    },
  },
};

