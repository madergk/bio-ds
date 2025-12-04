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
      options: ['default', 'primary', 'secondary', 'outline', 'dashed', 'text', 'link', 'danger'],
      description: 'Visual variant of the button',
      table: {
        type: { summary: 'ButtonVariant' },
        defaultValue: { summary: 'default' },
      },
    },
    color: {
      control: 'select',
      options: ['default', 'primary'],
      description: 'Color theme for outline, dashed, text, and link variants',
      table: {
        type: { summary: "'default' | 'primary'" },
        defaultValue: { summary: 'default' },
      },
    },
    prefixIcon: {
      control: 'text',
      description: 'Prefix icon (HTML string or SVG)',
    },
    suffixIcon: {
      control: 'text',
      description: 'Suffix icon (HTML string or SVG)',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Show only icon (no text)',
    },
    loading: {
      control: 'boolean',
      description: 'Show loading spinner',
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
 * Default button - gray/neutral style.
 * Use for default actions.
 */
export const Default: Story = {
  args: {
    variant: 'default',
    size: 'md',
    label: 'Button',
    disabled: false,
  },
};

/**
 * Primary button - the main action button with brand color.
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
    color: 'default',
  },
};

/**
 * Dashed button - similar to outline but with dashed border.
 * New variant from Figma design.
 */
export const Dashed: Story = {
  args: {
    variant: 'dashed',
    size: 'md',
    label: 'Button',
    disabled: false,
    color: 'default',
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
    color: 'default',
  },
};

/**
 * Link button - text button with underline.
 * New variant from Figma design.
 */
export const Link: Story = {
  args: {
    variant: 'link',
    size: 'md',
    label: 'Button',
    disabled: false,
    color: 'default',
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
        <bio-button variant="default">Default</bio-button>
        <bio-button variant="primary">Primary</bio-button>
        <bio-button variant="secondary">Secondary</bio-button>
        <bio-button variant="outline">Outline</bio-button>
        <bio-button variant="dashed">Dashed</bio-button>
        <bio-button variant="text">Text</bio-button>
        <bio-button variant="link">Link</bio-button>
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

/**
 * Variants with Primary Color - outline, dashed, text, and link can use primary color.
 */
export const VariantsWithPrimaryColor: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <bio-button variant="outline" color="default">Outline Default</bio-button>
          <bio-button variant="outline" color="primary">Outline Primary</bio-button>
        </div>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <bio-button variant="dashed" color="default">Dashed Default</bio-button>
          <bio-button variant="dashed" color="primary">Dashed Primary</bio-button>
        </div>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <bio-button variant="text" color="default">Text Default</bio-button>
          <bio-button variant="text" color="primary">Text Primary</bio-button>
        </div>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <bio-button variant="link" color="default">Link Default</bio-button>
          <bio-button variant="link" color="primary">Link Primary</bio-button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Outline, dashed, text, and link variants can use either default (gray) or primary (red) color theme.',
      },
    },
  },
};

/**
 * Buttons with Icons - prefix, suffix, and icon-only modes.
 */
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <bio-button variant="primary" prefixIcon="<svg width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 2V14M2 8H14' stroke='currentColor' stroke-width='2' stroke-linecap='round'/></svg>">
            Prefix Icon
          </bio-button>
          <bio-button variant="primary" suffixIcon="<svg width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 2V14M2 8H14' stroke='currentColor' stroke-width='2' stroke-linecap='round'/></svg>">
            Suffix Icon
          </bio-button>
          <bio-button variant="primary" prefixIcon="<svg width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 2V14M2 8H14' stroke='currentColor' stroke-width='2' stroke-linecap='round'/></svg>" suffixIcon="<svg width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 2V14M2 8H14' stroke='currentColor' stroke-width='2' stroke-linecap='round'/></svg>">
            Both Icons
          </bio-button>
        </div>
        <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
          <bio-button variant="primary" [iconOnly]="true" prefixIcon="<svg width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 2V14M2 8H14' stroke='currentColor' stroke-width='2' stroke-linecap='round'/></svg>"></bio-button>
          <bio-button variant="outline" color="primary" [iconOnly]="true" prefixIcon="<svg width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 2V14M2 8H14' stroke='currentColor' stroke-width='2' stroke-linecap='round'/></svg>"></bio-button>
          <bio-button variant="text" color="primary" [iconOnly]="true" prefixIcon="<svg width='16' height='16' viewBox='0 0 16 16' fill='none'><path d='M8 2V14M2 8H14' stroke='currentColor' stroke-width='2' stroke-linecap='round'/></svg>"></bio-button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can have prefix icons, suffix icons, or be icon-only. Icons are passed as HTML strings (typically SVG).',
      },
    },
  },
};

/**
 * Material Symbols Icons - Using Google's Material Symbols library.
 * Icon-only buttons are fully rounded (circular).
 */
export const MaterialSymbols: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #666;">With Text</h3>
          <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
            <bio-button variant="primary" prefixIcon="<span class='material-symbols-outlined' style='font-size: 16px; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;'>add</span>">
              Add Item
            </bio-button>
            <bio-button variant="primary" suffixIcon="<span class='material-symbols-outlined' style='font-size: 16px; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;'>arrow_forward</span>">
              Continue
            </bio-button>
            <bio-button variant="outline" color="primary" prefixIcon="<span class='material-symbols-outlined' style='font-size: 16px; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;'>edit</span>">
              Edit
            </bio-button>
            <bio-button variant="text" color="primary" prefixIcon="<span class='material-symbols-outlined' style='font-size: 16px; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;'>delete</span>">
              Delete
            </bio-button>
          </div>
        </div>
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #666;">Icon Only (Fully Rounded)</h3>
          <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
            <bio-button variant="primary" [iconOnly]="true" prefixIcon="<span class='material-symbols-outlined' style='font-size: 20px; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center;'>add</span>"></bio-button>
            <bio-button variant="primary" [iconOnly]="true" prefixIcon="<span class='material-symbols-rounded' style='font-size: 20px; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center;'>favorite</span>"></bio-button>
            <bio-button variant="outline" color="primary" [iconOnly]="true" prefixIcon="<span class='material-symbols-outlined' style='font-size: 20px; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center;'>edit</span>"></bio-button>
            <bio-button variant="outline" color="primary" [iconOnly]="true" prefixIcon="<span class='material-symbols-rounded' style='font-size: 20px; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center;'>settings</span>"></bio-button>
            <bio-button variant="text" color="primary" [iconOnly]="true" prefixIcon="<span class='material-symbols-outlined' style='font-size: 20px; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center;'>delete</span>"></bio-button>
            <bio-button variant="default" [iconOnly]="true" prefixIcon="<span class='material-symbols-outlined' style='font-size: 20px; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center;'>close</span>"></bio-button>
          </div>
        </div>
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #666;">Different Sizes</h3>
          <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
            <bio-button variant="primary" size="sm" [iconOnly]="true" prefixIcon="<span class='material-symbols-outlined' style='font-size: 16px; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center;'>add</span>"></bio-button>
            <bio-button variant="primary" size="md" [iconOnly]="true" prefixIcon="<span class='material-symbols-outlined' style='font-size: 20px; width: 20px; height: 20px; display: inline-flex; align-items: center; justify-content: center;'>add</span>"></bio-button>
            <bio-button variant="primary" size="lg" [iconOnly]="true" prefixIcon="<span class='material-symbols-outlined' style='font-size: 24px; width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center;'>add</span>"></bio-button>
          </div>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons support Material Symbols icons (recommended) and Material Icons (legacy). Icon-only buttons are fully rounded (circular). Use the `getMaterialSymbol()` helper method in your component to generate icon HTML.',
      },
    },
  },
};

/**
 * Loading state - buttons can show a loading spinner.
 */
export const Loading: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-button variant="primary" [loading]="true">Loading</bio-button>
        <bio-button variant="outline" color="primary" [loading]="true">Loading</bio-button>
        <bio-button variant="dashed" color="primary" [loading]="true">Loading</bio-button>
        <bio-button variant="text" color="primary" [loading]="true">Loading</bio-button>
      </div>
    `,
  }),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can display a loading spinner. When loading, the button is automatically disabled.',
      },
    },
  },
};

