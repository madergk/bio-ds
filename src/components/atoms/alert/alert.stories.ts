import type { Meta, StoryObj } from '@storybook/angular';
import { AlertComponent } from './alert.component';

/**
 * Alert Component
 * 
 * Displays contextual feedback messages for user actions.
 * Alerts can be dismissible and support multiple variants.
 */
const meta: Meta<AlertComponent> = {
  title: 'Atoms/Alert',
  component: AlertComponent,
  parameters: {
    docs: {
      description: {
        component: 'The Alert component provides contextual feedback messages. Use alerts to inform users about important information, success states, warnings, or errors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Visual variant of the alert',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show an icon',
    },
  },
};

export default meta;
type Story = StoryObj<AlertComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    dismissible: false,
    showIcon: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <bio-alert [variant]="variant" [dismissible]="dismissible" [showIcon]="showIcon">
        <p>This is a primary alert with an important message.</p>
      </bio-alert>
    `,
  }),
};

export const Success: Story = {
  args: {
    variant: 'success',
    dismissible: false,
    showIcon: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <bio-alert [variant]="variant" [dismissible]="dismissible" [showIcon]="showIcon">
        <p>Operation completed successfully!</p>
      </bio-alert>
    `,
  }),
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    dismissible: false,
    showIcon: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <bio-alert [variant]="variant" [dismissible]="dismissible" [showIcon]="showIcon">
        <p>Warning: Please review this information carefully.</p>
      </bio-alert>
    `,
  }),
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    dismissible: false,
    showIcon: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <bio-alert [variant]="variant" [dismissible]="dismissible" [showIcon]="showIcon">
        <p>Error: Something went wrong. Please try again.</p>
      </bio-alert>
    `,
  }),
};

export const Dismissible: Story = {
  args: {
    variant: 'info',
    dismissible: true,
    showIcon: false,
  },
  render: (args) => ({
    props: args,
    template: `
      <bio-alert [variant]="variant" [dismissible]="dismissible" [showIcon]="showIcon">
        <p>This alert can be dismissed by clicking the close button.</p>
      </bio-alert>
    `,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <bio-alert variant="primary">
          <p>This is a primary alert.</p>
        </bio-alert>
        <bio-alert variant="secondary">
          <p>This is a secondary alert.</p>
        </bio-alert>
        <bio-alert variant="success">
          <p>This is a success alert.</p>
        </bio-alert>
        <bio-alert variant="danger">
          <p>This is a danger alert.</p>
        </bio-alert>
        <bio-alert variant="warning">
          <p>This is a warning alert.</p>
        </bio-alert>
        <bio-alert variant="info">
          <p>This is an info alert.</p>
        </bio-alert>
      </div>
    `,
  }),
};

