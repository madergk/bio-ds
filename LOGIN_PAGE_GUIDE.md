# Bio Design System - Responsive Login Page Guide

A complete guide for building a responsive login page using bio-ds components.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Component Architecture](#component-architecture)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Components Used](#components-used)
- [Implementation Details](#implementation-details)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Customization](#customization)
- [Examples](#examples)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)

## Overview

The Bio Design System includes a complete `LoginPageComponent` organism that demonstrates how to compose atoms and molecules into a fully-featured, production-ready login page. This guide covers implementation, customization, and best practices.

### What is an Organism?

In atomic design, organisms are complex UI components composed of multiple atoms and molecules. The `LoginPageComponent` is an organism that combines:

- **Atoms**: Button, Input, PasswordInput, Alert, Spinner
- **Molecules**: Form layout and validation
- **Logic**: Form handling, validation, state management

## Features

✨ **Modern Design**
- Gradient background with decorative elements
- Smooth animations and transitions
- Professional color scheme

🎯 **Form Validation**
- Email format validation
- Password minimum length (6 characters)
- Real-time error messages
- Touch validation for better UX

📱 **Responsive Layout**
- Mobile-first design
- Tablet optimization
- Desktop full-width support
- Safe area support for notched devices

♿ **Accessibility**
- WCAG 2.1 AA compliant
- Keyboard navigation
- Screen reader friendly
- High contrast mode support
- Reduced motion support

🔒 **Security Ready**
- Password visibility toggle
- Input sanitization ready
- CSRF protection compatible
- Form data auto-clearing

🌙 **Dark Mode**
- Automatic dark mode detection
- Optimized color contrast
- Smooth theme transition

## Component Architecture

```
LoginPageComponent (Organism)
├── Form Container
│   ├── Header Section
│   │   ├── Title
│   │   └── Subtitle
│   ├── Alert Container
│   │   └── AlertComponent (molecules)
│   ├── Form Section
│   │   ├── Email Field
│   │   │   ├── Label
│   │   │   ├── InputComponent (atoms)
│   │   │   └── Error Message
│   │   ├── Password Field
│   │   │   ├── Label
│   │   │   ├── PasswordInputComponent (atoms)
│   │   │   ├── Forgot Link
│   │   │   └── Error Message
│   │   ├── Remember Me
│   │   │   └── Checkbox
│   │   └── Submit Button
│   │       ├── ButtonComponent (atoms)
│   │       └── SpinnerComponent (atoms)
│   ├── Divider Section
│   ├── Social Login
│   │   ├── Google Button
│   │   ├── GitHub Button
│   │   └── Microsoft Button
│   └── Footer Section
│       └── Sign Up Link
```

## Installation

### Option 1: Use as Installed Package

```bash
npm install @madergk/bio-ds
```

### Option 2: Development from Source

```bash
# Clone the repository
git clone https://github.com/madergk/bio-ds.git
cd bio-ds

# Install dependencies
npm install

# Build the library
npm run build:library
```

## Quick Start

### Basic Implementation

```typescript
import { Component } from '@angular/core';
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-root',
  template: `<bio-login-page></bio-login-page>`,
  imports: [LoginPageComponent]
})
export class AppComponent {}
```

### With State Management

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-auth',
  template: `
    <bio-login-page
      [isLoading]="isLoading"
      [errorMessage]="errorMessage"
      [successMessage]="successMessage">
    </bio-login-page>
  `,
  imports: [CommonModule, LoginPageComponent]
})
export class AuthComponent {
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  handleLogin(credentials: { email: string; password: string }) {
    this.isLoading = true;
    // Call your auth service
  }
}
```

### With Authentication Service

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  isLoading$ = new BehaviorSubject(false);
  errorMessage$ = new BehaviorSubject('');
  token$ = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    this.isLoading$.next(true);
    
    return this.http.post('/api/auth/login', { email, password }).pipe(
      tap(response => {
        this.token$.next(response.token);
        this.isLoading$.next(false);
      }),
      catchError(error => {
        this.errorMessage$.next(error.error.message);
        this.isLoading$.next(false);
        throw error;
      })
    );
  }

  logout(): void {
    this.token$.next(null);
    this.errorMessage$.next('');
  }
}
```

## Components Used

### Atom Components

#### ButtonComponent
- **Purpose**: Primary action button for form submission
- **Variants**: primary, secondary, outline, text, danger
- **Sizes**: sm, md, lg
- **Properties**:
  - `variant`: Button style variant
  - `size`: Button size
  - `disabled`: Disable state
  - `type`: HTML button type (button, submit, reset)

```html
<bio-button
  variant="primary"
  size="lg"
  type="submit"
  [disabled]="isLoading">
  Sign In
</bio-button>
```

#### InputComponent
- **Purpose**: Email input field
- **Validation**: Built-in validation support
- **Accessibility**: Proper label association
- **Properties**:
  - `type`: Input type (email, text, etc.)
  - `placeholder`: Placeholder text
  - `validation`: Validation state (normal, valid, invalid)
  - `size`: Input size (sm, md, lg)

```html
<bio-input
  type="email"
  placeholder="you@example.com"
  formControlName="email"
  validation="invalid"
  size="lg">
</bio-input>
```

#### PasswordInputComponent
- **Purpose**: Secure password input with visibility toggle
- **Features**: Password visibility toggle
- **Properties**:
  - `showPassword`: Toggle password visibility
  - `placeholder`: Placeholder text
  - `validation`: Validation state

```html
<bio-password-input
  formControlName="password"
  placeholder="Enter your password"
  [showPassword]="showPassword"
  (toggleVisibility)="togglePasswordVisibility()"
  validation="invalid"
  size="lg">
</bio-password-input>
```

#### AlertComponent
- **Purpose**: Display error and success messages
- **Types**: error, success, warning, info
- **Properties**:
  - `type`: Alert type
  - `dismissible`: Show close button
  - Message content via ng-content

```html
<bio-alert type="error" [dismissible]="true" (close)="clearError()">
  Invalid email or password. Please try again.
</bio-alert>
```

#### SpinnerComponent
- **Purpose**: Loading indicator
- **Sizes**: sm, md, lg
- **Properties**:
  - `size`: Spinner size

```html
<bio-spinner size="sm"></bio-spinner>
```

## Implementation Details

### Form Validation

The component uses Angular Reactive Forms for robust validation:

```typescript
private initializeForm(): void {
  this.loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6)
    ]],
    rememberMe: [false]
  });
}
```

### Form Submission

```typescript
onSubmit(): void {
  if (this.loginForm.invalid) {
    this.markFormGroupTouched(this.loginForm);
    return;
  }

  this.isLoading = true;
  // Call authentication service
}
```

### Error Handling

```typescript
isEmailInvalid(): boolean {
  const control = this.emailControl;
  return !!(control && control.invalid && control.touched);
}

getEmailErrorMessage(): string {
  const control = this.emailControl;
  if (control?.hasError('required')) {
    return 'Email is required';
  }
  if (control?.hasError('email')) {
    return 'Please enter a valid email address';
  }
  return '';
}
```

## Responsive Design

### Breakpoints

```css
/* Mobile: < 480px */
@media (max-width: 480px) {
  .login-card {
    padding: 1.5rem;
    border-radius: 0.75rem;
  }
  .social-login {
    grid-template-columns: 1fr;
  }
}

/* Tablet: 480px - 768px */
@media (max-width: 768px) {
  .login-card {
    max-width: 100%;
    padding: 2rem;
  }
}

/* Desktop: > 768px */
.login-card {
  max-width: 450px;
  padding: 3rem;
}
```

### Mobile Optimization

- Full-width on mobile (with padding)
- Stacked social buttons on small screens
- Touch-friendly spacing (min 44x44px)
- Safe area support for notched devices
- Optimized font sizes for readability

### Tablet Optimization

- Centered layout with max-width
- Adjusted padding and spacing
- Improved readability
- Grid-based social buttons (2-3 columns)

### Desktop Optimization

- Centered card with max-width 450px
- Full-size social buttons with text labels
- Hover states and animations
- Gradient background with decorations

## Accessibility

### WCAG 2.1 Compliance

✅ **Level A**
- Proper semantic HTML
- Image alt text (if needed)
- Color not sole means of information

✅ **Level AA**
- Color contrast ratio ≥ 4.5:1 for normal text
- Color contrast ratio ≥ 3:1 for large text
- Keyboard navigation
- Focus indicators

### Features

**Semantic HTML**
```html
<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
  <label for="email">Email Address</label>
  <input id="email" type="email" />
</form>
```

**ARIA Attributes**
```html
<div role="alert" *ngIf="errorMessage">
  {{ errorMessage }}
</div>
```

**Keyboard Navigation**
- Tab through form fields
- Enter to submit form
- Escape to close modals (if used)
- Space/Enter to activate buttons

**Screen Readers**
- Descriptive labels for all inputs
- Error messages associated with fields
- Status updates announced
- Button purposes clear

**Focus Management**
```typescript
@ViewChild('emailInput') emailInput!: InputComponent;

ngAfterViewInit() {
  this.emailInput.focus();
}
```

**Color Contrast**
- Text: `#111827` on `#ffffff` = 21:1 (AAA)
- Links: `#2563eb` on `#ffffff` = 8.6:1 (AAA)
- Buttons: `#ffffff` on `#2563eb` = 8.6:1 (AAA)

**Reduced Motion**
```css
@media (prefers-reduced-motion: reduce) {
  .login-card {
    animation: none;
  }
  /* All transitions removed */
}
```

## Customization

### CSS Variables

Override default styles using CSS custom properties:

```css
:root {
  /* Colors */
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-error: #ef4444;
  --color-success: #16a34a;
  
  /* Spacing */
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Border Radius */
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  
  /* Transitions */
  --transition-base: 200ms ease-in-out;
}
```

### Theme Customization

```css
/* Custom theme */
:root {
  --color-primary: #7c3aed; /* Purple */
  --color-primary-hover: #6d28d9;
  --color-error: #dc2626;
}

/* Dark theme */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #3b82f6;
    --color-white: #111827;
  }
}
```

### Component Styling

```typescript
@Component({
  styles: [`
    :host {
      --color-primary: #7c3aed;
    }
  `]
})
export class AppComponent {}
```

### Override Specific Styles

```css
::ng-deep .login-title {
  font-family: 'Georgia', serif;
  font-size: 2.5rem;
}
```

## Examples

### Example 1: Basic Login

```typescript
import { Component } from '@angular/core';
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-login',
  template: `<bio-login-page></bio-login-page>`,
  imports: [LoginPageComponent]
})
export class LoginComponent {}
```

### Example 2: With Error Handling

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '@madergk/bio-ds';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <bio-login-page
      [errorMessage]="errorMessage"
      [isLoading]="isLoading">
    </bio-login-page>
  `,
  imports: [CommonModule, LoginPageComponent]
})
export class LoginComponent {
  errorMessage = '';
  isLoading = false;

  constructor(private authService: AuthService) {}

  onLogin(credentials: any) {
    this.isLoading = true;
    this.errorMessage = '';

    this.authService.login(credentials).subscribe({
      next: () => {
        this.isLoading = false;
        // Navigate to dashboard
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      }
    });
  }
}
```

### Example 3: With OAuth Integration

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '@madergk/bio-ds';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
    <bio-login-page
      (googleLogin)="onGoogleLogin()"
      (githubLogin)="onGithubLogin()"
      (microsoftLogin)="onMicrosoftLogin()">
    </bio-login-page>
  `,
  imports: [CommonModule, LoginPageComponent]
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  onGoogleLogin() {
    this.authService.loginWithGoogle().subscribe({
      next: () => console.log('Google login successful'),
      error: (error) => console.error('Google login failed', error)
    });
  }

  onGithubLogin() {
    this.authService.loginWithGithub().subscribe({
      next: () => console.log('GitHub login successful'),
      error: (error) => console.error('GitHub login failed', error)
    });
  }

  onMicrosoftLogin() {
    this.authService.loginWithMicrosoft().subscribe({
      next: () => console.log('Microsoft login successful'),
      error: (error) => console.error('Microsoft login failed', error)
    });
  }
}
```

## Testing

### Unit Tests

```typescript
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from '@madergk/bio-ds';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, LoginPageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('invalid-email');
    expect(emailControl?.invalid).toBeTruthy();

    emailControl?.setValue('valid@example.com');
    expect(emailControl?.valid).toBeTruthy();
  });

  it('should require password', () => {
    const passwordControl = component.loginForm.get('password');
    expect(passwordControl?.invalid).toBeTruthy();

    passwordControl?.setValue('password123');
    expect(passwordControl?.valid).toBeTruthy();
  });

  it('should display error message on invalid email', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    emailControl?.markAsTouched();

    expect(component.isEmailInvalid()).toBeTruthy();
    expect(component.getEmailErrorMessage()).toBe('Email is required');
  });

  it('should disable submit button when loading', () => {
    component.isLoading = true;
    fixture.detectChanges();

    const submitButton = fixture.nativeElement.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTruthy();
  });
});
```

### E2E Tests

```typescript
import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/login');
  });

  test('should display login form', async ({ page }) => {
    await expect(page.locator('form')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    const emailInput = page.locator('input[type="email"]');
    await emailInput.fill('invalid-email');
    await emailInput.blur();

    const errorMessage = page.locator('.form-error');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Please enter a valid email address');
  });

  test('should submit form with valid credentials', async ({ page }) => {
    await page.locator('input[type="email"]').fill('test@example.com');
    await page.locator('input[type="password"]').fill('password123');
    await page.locator('button[type="submit"]').click();

    await expect(page.locator('.success-message')).toBeVisible();
  });

  test('should handle login errors', async ({ page }) => {
    // Mock API error
    await page.context().addInitScript(() => {
      window.mockLoginError = 'Invalid credentials';
    });

    await page.locator('input[type="email"]').fill('test@example.com');
    await page.locator('input[type="password"]').fill('wrongpassword');
    await page.locator('button[type="submit"]').click();

    const errorMessage = page.locator('.error-message');
    await expect(errorMessage).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    const loginCard = page.locator('.login-card');
    const boundingBox = await loginCard.boundingBox();

    expect(boundingBox?.width).toBeLessThanOrEqual(375);
  });
});
```

## Troubleshooting

### Common Issues

**Q: Component not rendering**
A: Ensure the component is imported in your module or standalone imports:
```typescript
imports: [LoginPageComponent]
```

**Q: Form validation not working**
A: Make sure `ReactiveFormsModule` is imported:
```typescript
import { ReactiveFormsModule } from '@angular/forms';
```

**Q: Styles not loading**
A: Verify CSS files are in the correct path and check browser DevTools for CSS import errors.

**Q: Password visibility toggle not working**
A: Ensure `PasswordInputComponent` is properly imported and the `toggleVisibility()` method is called.

**Q: Alert component not showing**
A: Check that error/success messages are properly bound and the component is imported.

**Q: Mobile layout broken**
A: Check viewport meta tag is present:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Debug Tips

1. **Check browser console** for JavaScript errors
2. **Use Angular DevTools** to inspect component state
3. **Check Network tab** for CSS/JS loading errors
4. **Test in different browsers** for compatibility issues
5. **Use browser DevTools responsive mode** to test mobile layouts

## Resources

- [Bio Design System Documentation](../../README.md)
- [Components Guide](../../src/components/README.md)
- [Design Tokens](../../tokens/README.md)
- [Storybook Documentation](../../STORYBOOK.md)
- [Angular Documentation](https://angular.io)
- [WCAG Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Support

For questions or issues:
- Open an issue on [GitHub](https://github.com/madergk/bio-ds/issues)
- Check existing documentation and examples
- Review component Storybook stories
- Check test files for usage examples

## License

MIT © 2024 Bio Design System
