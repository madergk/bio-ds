# Login Page Example

This directory contains a complete example of how to use the Bio Design System's `LoginPageComponent` to build a responsive login page.

## Overview

The example demonstrates:

- **Responsive Layout**: Adapts to mobile, tablet, and desktop screens
- **Form Validation**: Email and password validation with error messages
- **User Experience**: Loading states, error handling, and success feedback
- **Accessibility**: WCAG 2.1 compliant with proper semantic HTML
- **Modern Design**: Clean, professional UI with smooth animations
- **Dark Mode**: Automatic support for dark mode preferences

## File Structure

```
examples/login-page/
├── app.component.ts          # Main app component
├── app.component.html        # Component template
├── app.component.css         # Component styles
├── main.ts                   # Application bootstrap
├── index.html                # HTML entry point
└── README.md                 # This file
```

## Usage

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Start Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200`

### Step 3: Build for Production

```bash
npm run build
```

## Component Integration

### Basic Usage

```typescript
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
import { LoginPageComponent } from '@madergk/bio-ds';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <bio-login-page
      [isLoading]="isLoading$ | async"
      [errorMessage]="errorMessage$ | async"
      [successMessage]="successMessage$ | async">
    </bio-login-page>
  `,
  imports: [LoginPageComponent, AsyncPipe]
})
export class AppComponent {
  isLoading$ = this.authService.isLoading$;
  errorMessage$ = this.authService.errorMessage$;
  successMessage$ = this.authService.successMessage$;

  constructor(private authService: AuthService) {}
}
```

### With Authentication API

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://api.example.com/auth';
  
  isLoading$ = new BehaviorSubject(false);
  errorMessage$ = new BehaviorSubject('');
  successMessage$ = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    this.isLoading$.next(true);
    this.errorMessage$.next('');

    return this.http.post(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(response => {
        this.isLoading$.next(false);
        this.successMessage$.next('Login successful!');
        // Store token, navigate to dashboard, etc.
      }),
      catchError(error => {
        this.isLoading$.next(false);
        this.errorMessage$.next(error.error.message || 'Login failed');
        throw error;
      })
    );
  }
}
```

## Customization

### Styling

The login page uses CSS custom properties for theming. Override them in your global styles:

```css
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-error: #ef4444;
  --color-success: #16a34a;
  --spacing-md: 1rem;
  --radius-lg: 0.75rem;
}
```

### Responsive Breakpoints

The component automatically adapts to different screen sizes:

- **Mobile** (< 480px): Single column layout with stacked elements
- **Tablet** (480px - 768px): Optimized spacing and touch targets
- **Desktop** (> 768px): Full layout with max-width constraint

### Dark Mode

The component automatically respects the user's system dark mode preference:

```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles are automatically applied */
}
```

## Accessibility Features

- ✅ Semantic HTML with proper heading hierarchy
- ✅ Form labels associated with inputs
- ✅ Error messages linked to form fields
- ✅ Keyboard navigation support
- ✅ Color contrast meets WCAG AA standards
- ✅ Support for `prefers-reduced-motion`
- ✅ Support for high contrast mode
- ✅ Screen reader friendly

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Testing

### Unit Tests

```bash
npm run test
```

### E2E Tests

```bash
npm run test:e2e
```

### Storybook

View the component in isolation with Storybook:

```bash
npm run storybook
```

## Performance

- Lazy-loaded components
- Optimized bundle size
- CSS-in-JS optimized
- Minimal re-renders with OnPush change detection

## Security

- Input sanitization
- CSRF protection ready
- Password never logged
- Form data cleared after submission

## Troubleshooting

### Form not validating

Ensure you've imported `ReactiveFormsModule`:

```typescript
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, LoginPageComponent]
})
export class AppComponent {}
```

### Styles not loading

Make sure the global styles are included in your `index.html` or main stylesheet.

### Component not rendering

Verify the component is imported in your module or standalone component imports array.

## Resources

- [Bio Design System Documentation](../../README.md)
- [Component Storybook](../../STORYBOOK.md)
- [Design Tokens](../../tokens/README.md)
- [Angular Documentation](https://angular.io)

## License

MIT - See LICENSE file for details

## Support

For issues or questions about the login page component, please open an issue on [GitHub](https://github.com/madergk/bio-ds/issues).
