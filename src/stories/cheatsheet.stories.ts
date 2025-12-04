import type { Meta, StoryObj } from '@storybook/angular';
import { CheatsheetComponent } from './cheatsheet.component';

const meta: Meta<CheatsheetComponent> = {
  title: 'Examples/Cheatsheet',
  component: CheatsheetComponent,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Una referencia rápida visual de todos los componentes y utilidades del Bio Design System, inspirada en el Bootstrap Cheatsheet.'
      }
    }
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CheatsheetComponent>;

export const Default: Story = {};

