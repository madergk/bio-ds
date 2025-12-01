import type { Meta, StoryObj } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

/**
 * Badge Component
 * 
 * Small status descriptors for UI elements.
 * Badges can be used to highlight new items, counts, or status indicators.
 */
const meta: Meta<BadgeComponent> = {
  title: 'Atoms/Badge',
  component: BadgeComponent,
  parameters: {
    docs: {
      description: {
        component: 'Badges are small status descriptors that can be attached to other components or used standalone to indicate counts, status, or new items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Color variant of the badge',
    },
    size: {
      control: 'select',
      options: ['H6', 'H5', 'H4', 'H3', 'H2', 'H1'],
      description: 'Size of the badge (matches heading sizes)',
    },
    type: {
      control: 'select',
      options: ['normal', 'pill', 'dot'],
      description: 'Shape type of the badge',
    },
  },
};

export default meta;
type Story = StoryObj<BadgeComponent>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'H6',
    type: 'normal',
  },
  render: (args) => ({
    props: args,
    template: `<bio-badge [variant]="variant" [size]="size" [type]="type">Badge</bio-badge>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-badge variant="primary">Primary</bio-badge>
        <bio-badge variant="secondary">Secondary</bio-badge>
        <bio-badge variant="success">Success</bio-badge>
        <bio-badge variant="danger">Danger</bio-badge>
        <bio-badge variant="warning">Warning</bio-badge>
        <bio-badge variant="info">Info</bio-badge>
        <bio-badge variant="light">Light</bio-badge>
        <bio-badge variant="dark">Dark</bio-badge>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-badge variant="primary" size="H6">H6</bio-badge>
        <bio-badge variant="primary" size="H5">H5</bio-badge>
        <bio-badge variant="primary" size="H4">H4</bio-badge>
        <bio-badge variant="primary" size="H3">H3</bio-badge>
        <bio-badge variant="primary" size="H2">H2</bio-badge>
        <bio-badge variant="primary" size="H1">H1</bio-badge>
      </div>
    `,
  }),
};

export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-badge variant="primary" type="normal">Normal</bio-badge>
        <bio-badge variant="primary" type="pill">Pill</bio-badge>
        <bio-badge variant="primary" type="dot"></bio-badge>
      </div>
    `,
  }),
};

