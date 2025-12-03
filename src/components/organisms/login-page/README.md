# Login Page Component

A responsive, accessible login page organism built with bio-ds components.

## Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop screens
- **Form Validation**: Email and password validation with real-time feedback
- **Accessibility**: WCAG 2.1 compliant with proper labels and ARIA attributes
- **Dark Mode**: Automatic support for dark mode preferences
- **Loading State**: Spinner animation during form submission
- **Error Handling**: Clear error messages and success feedback
- **Social Login**: Placeholder buttons for OAuth providers (Google, GitHub, Microsoft)
- **Modern UI**: Clean, professional design with smooth animations
- **Touch Friendly**: Optimized tap targets and spacing for mobile users

## Usage

```typescript
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-root',
  template: `
    <bio-login-page 
      [isLoading]="isLoading"
      [errorMessage]="errorMessage"
      [successMessage]="successMessage">
    </bio-login-page>
  `,
  imports: [LoginPageComponent]
})
export class AppComponent {
  isLoading = false;
  errorMessage = '';
  successMessage = '';
}
```

## Component Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `isLoading` | `boolean` | `false` | Show loading spinner on submit button |
| `errorMessage` | `string` | `''` | Display error message alert |
| `successMessage` | `string` | `''` | Display success message alert |

## Component Methods

| Method | Parameters | Description |
|--------|-----------|-------------|
| `onSubmit()` | - | Handle form submission with validation |
| `togglePasswordVisibility()` | - | Toggle password input visibility |
| `onRememberMeChange()` | `value: boolean` | Handle remember me checkbox |
| `clearError()` | - | Clear error message |

## Responsive Breakpoints

- **Desktop**: Max-width 450px centered on screen
- **Tablet** (768px and below): Adjusted padding and font sizes
- **Mobile** (480px and below): Full width with safe area support, stacked social buttons

## Built With

- `ButtonComponent` - Primary action button
- `InputComponent` - Email input field
- `PasswordInputComponent` - Password input with visibility toggle
- `AlertComponent` - Error and success messages
- `SpinnerComponent` - Loading indicator
- Angular Reactive Forms for validation

## Customization

The component uses CSS custom properties (variables) for easy theming:

```css
--color-primary: #2563eb;
--color-primary-hover: #1d4ed8;
--color-error: #ef4444;
--color-success: #16a34a;
--spacing-md: 1rem;
--radius-lg: 0.75rem;
--transition-base: 200ms ease-in-out;
```

## Accessibility

- Semantic HTML with proper heading hierarchy
- Form labels associated with inputs
- Error messages linked to form fields
- Keyboard navigation support
- Color contrast meets WCAG AA standards
- Support for `prefers-reduced-motion`
- Support for high contrast mode
- Proper ARIA attributes for alerts

## Example Integration

```typescript
import { Component } from '@angular/core';
import { LoginPageComponent } from '@madergk/bio-ds';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  template: `
    <bio-login-page
      [isLoading]="isLoading"
      [errorMessage]="errorMessage"
      [successMessage]="successMessage">
    </bio-login-page>
  `,
  imports: [LoginPageComponent]
})
export class AuthComponent {
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  async handleLogin(credentials: { email: string; password: string }) {
    this.isLoading = true;
    try {
      // Call your authentication API
      await this.authenticateUser(credentials);
      this.successMessage = 'Login successful!';
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.errorMessage = 'Invalid credentials. Please try again.';
    } finally {
      this.isLoading = false;
    }
  }

  private authenticateUser(credentials: any): Promise<void> {
    // API call
    return new Promise(resolve => setTimeout(resolve, 1500));
  }
}
```

## Notes

- The component uses Angular 17+ standalone components
- Reactive Forms for form management and validation
- Customize styling by overriding CSS variables
- Social login buttons are placeholder - implement OAuth integration as needed
- Password recovery and sign-up links are placeholder - route as needed
