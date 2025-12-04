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
    text: {
      control: 'text',
      description: 'Badge text content',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      description: 'Color variant of the badge',
    },
    size: {
      control: 'select',
      options: ['H6', 'H5', 'H4', 'H3', 'H2', 'H1', '-'],
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
    text: 'Primary',
    color: 'primary',
    size: 'H6',
    type: 'normal',
  },
  render: (args) => ({
    props: args,
    template: `<bio-badge [text]="text" [color]="color" [size]="size" [type]="type"></bio-badge>`,
  }),
};

export const AllVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-badge text="Primary" color="primary"></bio-badge>
        <bio-badge text="Secondary" color="secondary"></bio-badge>
        <bio-badge text="Success" color="success"></bio-badge>
        <bio-badge text="Danger" color="danger"></bio-badge>
        <bio-badge text="Warning" color="warning"></bio-badge>
        <bio-badge text="Info" color="info"></bio-badge>
        <bio-badge text="Light" color="light"></bio-badge>
        <bio-badge text="Dark" color="dark"></bio-badge>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-badge text="H6" color="primary" size="H6"></bio-badge>
        <bio-badge text="H5" color="primary" size="H5"></bio-badge>
        <bio-badge text="H4" color="primary" size="H4"></bio-badge>
        <bio-badge text="H3" color="primary" size="H3"></bio-badge>
        <bio-badge text="H2" color="primary" size="H2"></bio-badge>
        <bio-badge text="H1" color="primary" size="H1"></bio-badge>
      </div>
    `,
  }),
};

export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <bio-badge text="Normal" color="primary" type="normal"></bio-badge>
        <bio-badge text="Pill" color="primary" type="pill"></bio-badge>
        <bio-badge color="primary" type="dot" size="-"></bio-badge>
      </div>
    `,
  }),
};

