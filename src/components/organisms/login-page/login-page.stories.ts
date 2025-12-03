import type { Meta, StoryObj } from '@storybook/angular';
import { LoginPageComponent } from './login-page.component';

/**
 * Login Page Component Stories
 * 
 * A collection of stories demonstrating the login page component
 * in various states and configurations.
 */
const meta: Meta<LoginPageComponent> = {
  title: 'Organisms/Login Page',
  component: LoginPageComponent,
  tags: ['autodocs'],
  decorators: [
    (story) => ({
      template: `
        <div style="
          width: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        ">
          ${story}
        </div>
      `
    })
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A responsive, accessible login page organism built with bio-ds components. Features form validation, error handling, and smooth animations.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<LoginPageComponent>;

/**
 * Default login page with normal state
 */
export const Default: Story = {
  render: (args) => ({
    props: args,
    template: `
      <bio-login-page
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [successMessage]="successMessage">
      </bio-login-page>
    `
  }),
  args: {
    isLoading: false,
    errorMessage: '',
    successMessage: ''
  }
};

/**
 * Login page with loading state
 */
export const Loading: Story = {
  render: (args) => ({
    props: args,
    template: `
      <bio-login-page
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [successMessage]="successMessage">
      </bio-login-page>
    `
  }),
  args: {
    isLoading: true,
    errorMessage: '',
    successMessage: ''
  }
};

/**
 * Login page with error message displayed
 */
export const WithError: Story = {
  render: (args) => ({
    props: args,
    template: `
      <bio-login-page
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [successMessage]="successMessage">
      </bio-login-page>
    `
  }),
  args: {
    isLoading: false,
    errorMessage: 'Invalid email or password. Please try again.',
    successMessage: ''
  }
};

/**
 * Login page with success message
 */
export const WithSuccess: Story = {
  render: (args) => ({
    props: args,
    template: `
      <bio-login-page
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [successMessage]="successMessage">
      </bio-login-page>
    `
  }),
  args: {
    isLoading: false,
    errorMessage: '',
    successMessage: 'Login successful! Welcome back.'
  }
};

/**
 * Login page in mobile viewport
 */
export const Mobile: Story = {
  render: (args) => ({
    props: args,
    template: `
      <bio-login-page
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [successMessage]="successMessage">
      </bio-login-page>
    `
  }),
  args: {
    isLoading: false,
    errorMessage: '',
    successMessage: ''
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
};

/**
 * Login page in tablet viewport
 */
export const Tablet: Story = {
  render: (args) => ({
    props: args,
    template: `
      <bio-login-page
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [successMessage]="successMessage">
      </bio-login-page>
    `
  }),
  args: {
    isLoading: false,
    errorMessage: '',
    successMessage: ''
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    }
  }
};

/**
 * Login page in desktop viewport
 */
export const Desktop: Story = {
  render: (args) => ({
    props: args,
    template: `
      <bio-login-page
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        [successMessage]="successMessage">
      </bio-login-page>
    `
  }),
  args: {
    isLoading: false,
    errorMessage: '',
    successMessage: ''
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
};
