import type { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal.component';

/**
 * Modal Component
 * 
 * Dialog box that appears on top of the main content.
 * Use modals to focus user attention on a specific task or information.
 */
const meta: Meta<ModalComponent> = {
  title: 'Molecules/Modal',
  component: ModalComponent,
  parameters: {
    docs: {
      description: {
        component: 'Modals are dialog boxes that overlay the main content. They require user interaction before the user can return to the main content. Use modals sparingly for important information or actions.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ModalComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div class="bio-modal-backdrop">
        <div class="bio-modal" style="width: 500px;">
          <div class="bio-modal__container">
            <div class="bio-modal__header">
              <div class="bio-modal__title">
                <h2>Modal Title</h2>
              </div>
            </div>
            <div class="bio-modal__body">
              <p>This is the modal body content. You can put any content here.</p>
            </div>
            <div class="bio-modal__footer">
              <div class="bio-modal__footer-content">
                <bio-button variant="secondary">Cancel</bio-button>
                <bio-button variant="primary">Save</bio-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
};

