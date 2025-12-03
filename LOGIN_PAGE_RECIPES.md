# Login Page - Code Snippets & Recipes

Quick reference guide with practical code examples for integrating the login page.

## Table of Contents

1. [Basic Setup](#basic-setup)
2. [Form Integration](#form-integration)
3. [Authentication Service](#authentication-service)
4. [State Management](#state-management)
5. [Styling & Theming](#styling--theming)
6. [Advanced Examples](#advanced-examples)

## Basic Setup

### Minimal Implementation

```typescript
import { Component } from '@angular/core';
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginPageComponent],
  template: `<bio-login-page></bio-login-page>`
})
export class AppComponent {}
```

### With HttpClient

```typescript
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, LoginPageComponent],
  template: `<bio-login-page></bio-login-page>`
})
export class AppComponent {}
```

## Form Integration

### Custom Form Handling

```typescript
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginPageComponent],
  template: `
    <bio-login-page
      [isLoading]="isLoading"
      [errorMessage]="errorMessage"
      [successMessage]="successMessage">
    </bio-login-page>
  `
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';

    // Handle form submission
    console.log(this.loginForm.value);
  }
}
```

### Custom Validators

```typescript
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Password strength validator
export function passwordStrengthValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const hasNumber = /[0-9]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*]/.test(value);

    const passwordValid = hasNumber && hasUpper && hasLower && hasSpecial;

    if (!passwordValid) {
      return { weakPassword: true };
    }

    return null;
  };
}

// Usage in component
this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required, Validators.minLength(8), passwordStrengthValidator()]],
  rememberMe: [false]
});
```

## Authentication Service

### Basic Auth Service

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = '/api/auth';
  private tokenKey = 'auth_token';

  isAuthenticated$ = new BehaviorSubject<boolean>(this.hasToken());

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe(
      tap(response => {
        this.setToken(response.token);
        this.isAuthenticated$.next(true);
      }),
      catchError(error => {
        throw new Error(error.error.message || 'Login failed');
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticated$.next(false);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
```

### Advanced Auth Service with Refresh Token

```typescript
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap, catchError, retry, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AdvancedAuthService {
  private apiUrl = '/api/auth';
  private accessTokenKey = 'access_token';
  private refreshTokenKey = 'refresh_token';

  isLoading$ = new BehaviorSubject<boolean>(false);
  errorMessage$ = new BehaviorSubject<string>('');
  isAuthenticated$ = new BehaviorSubject<boolean>(this.hasAccessToken());

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    this.isLoading$.next(true);
    this.errorMessage$.next('');

    return this.http.post<any>(`${this.apiUrl}/login`, {
      email,
      password
    }).pipe(
      tap(response => {
        this.setTokens(response.accessToken, response.refreshToken);
        this.isAuthenticated$.next(true);
        this.isLoading$.next(false);
      }),
      catchError(error => {
        this.isLoading$.next(false);
        const message = this.getErrorMessage(error);
        this.errorMessage$.next(message);
        return throwError(() => new Error(message));
      }),
      retry(1)
    );
  }

  refreshToken(): Observable<any> {
    const refreshToken = localStorage.getItem(this.refreshTokenKey);

    return this.http.post<any>(`${this.apiUrl}/refresh`, {
      refreshToken
    }).pipe(
      tap(response => {
        this.setTokens(response.accessToken, response.refreshToken);
      }),
      catchError(() => {
        this.logout();
        return throwError(() => new Error('Session expired'));
      })
    );
  }

  logout(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    this.isAuthenticated$.next(false);
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken);
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  private hasAccessToken(): boolean {
    return !!localStorage.getItem(this.accessTokenKey);
  }

  private getErrorMessage(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      return error.error.message;
    }
    return error.error?.message || 'An error occurred. Please try again.';
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }
}
```

## State Management

### With RxJS Signals (Angular 16+)

```typescript
import { Component, signal } from '@angular/core';
import { LoginPageComponent } from '@madergk/bio-ds';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginPageComponent],
  template: `
    <bio-login-page
      [isLoading]="isLoading()"
      [errorMessage]="errorMessage()"
      [successMessage]="successMessage()">
    </bio-login-page>
  `
})
export class LoginComponent {
  isLoading = signal(false);
  errorMessage = signal('');
  successMessage = signal('');

  constructor(private authService: AuthService) {}

  onLogin(credentials: { email: string; password: string }): void {
    this.isLoading.set(true);
    this.errorMessage.set('');
    this.successMessage.set('');

    this.authService.login(credentials.email, credentials.password).subscribe({
      next: () => {
        this.successMessage.set('Login successful!');
        this.isLoading.set(false);
        // Navigate to dashboard
      },
      error: (error) => {
        this.errorMessage.set(error.message);
        this.isLoading.set(false);
      }
    });
  }
}
```

### With NgRx Store

```typescript
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginPageComponent } from '@madergk/bio-ds';
import * as AuthActions from './store/auth.actions';
import * as AuthSelectors from './store/auth.selectors';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginPageComponent],
  template: `
    <bio-login-page
      [isLoading]="(isLoading$ | async) || false"
      [errorMessage]="(errorMessage$ | async) || ''"
      [successMessage]="(successMessage$ | async) || ''">
    </bio-login-page>
  `
})
export class LoginComponent implements OnInit {
  isLoading$ = this.store.select(AuthSelectors.selectLoading);
  errorMessage$ = this.store.select(AuthSelectors.selectError);
  successMessage$ = this.store.select(AuthSelectors.selectSuccess);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(AuthActions.loadAuthState());
  }

  onLogin(credentials: { email: string; password: string }): void {
    this.store.dispatch(AuthActions.login(credentials));
  }
}
```

## Styling & Theming

### Global Theme Override

```css
/* styles.css */

:root {
  /* Colors */
  --color-primary: #7c3aed; /* Purple */
  --color-primary-hover: #6d28d9;
  --color-error: #dc2626;
  --color-success: #059669;
  
  /* Spacing */
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Border Radius */
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  
  /* Transitions */
  --transition-fast: 150ms ease-in-out;
  --transition-base: 200ms ease-in-out;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-white: #0f172a;
    --color-gray-900: #f1f5f9;
  }
}
```

### Component-Level Theme

```typescript
import { Component } from '@angular/core';
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-login-custom',
  standalone: true,
  imports: [LoginPageComponent],
  template: `<bio-login-page></bio-login-page>`,
  styles: [`
    :host {
      --color-primary: #f59e0b;
      --color-primary-hover: #d97706;
      --radius-lg: 1rem;
    }
  `]
})
export class CustomLoginComponent {}
```

### Dark Mode Support

```css
/* styles.css */

@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #3b82f6;
    --color-primary-hover: #2563eb;
    --color-white: #1f2937;
    --color-gray-900: #f3f4f6;
    --color-gray-800: #374151;
  }
}

/* Manual dark mode toggle */
html.dark {
  --color-primary: #3b82f6;
  --color-white: #1f2937;
}
```

## Advanced Examples

### Example 1: Two-Factor Authentication

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { LoginPageComponent } from '@madergk/bio-ds';

@Component({
  selector: 'app-login-2fa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, LoginPageComponent],
  template: `
    <div [ngSwitch]="currentStep">
      <!-- Step 1: Login -->
      <bio-login-page
        *ngSwitchCase="'login'"
        [isLoading]="isLoading"
        [errorMessage]="errorMessage"
        (submit)="onLogin($event)">
      </bio-login-page>

      <!-- Step 2: 2FA Code -->
      <div *ngSwitchCase="'2fa'" class="two-factor-container">
        <h2>Enter 2FA Code</h2>
        <form [formGroup]="twoFactorForm" (ngSubmit)="onSubmit2FA()">
          <input formControlName="code" placeholder="000000" />
          <button type="submit" [disabled]="isLoading">Verify</button>
        </form>
      </div>
    </div>
  `
})
export class LoginWith2FAComponent {
  currentStep: 'login' | '2fa' = 'login';
  isLoading = false;
  errorMessage = '';
  twoFactorForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.twoFactorForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(credentials: any): void {
    this.isLoading = true;
    // Validate credentials and trigger 2FA
    // When 2FA is required, switch to next step
    this.currentStep = '2fa';
    this.isLoading = false;
  }

  onSubmit2FA(): void {
    if (this.twoFactorForm.invalid) return;

    this.isLoading = true;
    // Submit 2FA code
    // On success, navigate to dashboard
  }
}
```

### Example 2: Social Login Integration

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '@madergk/bio-ds';
import { SocialAuthService } from './social-auth.service';

@Component({
  selector: 'app-login-social',
  standalone: true,
  imports: [CommonModule, LoginPageComponent],
  template: `
    <bio-login-page
      [isLoading]="isLoading"
      [errorMessage]="errorMessage"
      (googleLogin)="onGoogleLogin()"
      (githubLogin)="onGithubLogin()"
      (microsoftLogin)="onMicrosoftLogin()">
    </bio-login-page>
  `
})
export class SocialLoginComponent {
  isLoading = false;
  errorMessage = '';

  constructor(private socialAuth: SocialAuthService) {}

  onGoogleLogin(): void {
    this.isLoading = true;
    this.socialAuth.loginWithGoogle().subscribe({
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

  onGithubLogin(): void {
    this.isLoading = true;
    this.socialAuth.loginWithGithub().subscribe({
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

  onMicrosoftLogin(): void {
    this.isLoading = true;
    this.socialAuth.loginWithMicrosoft().subscribe({
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

### Example 3: Remember Me with Auto-Login

```typescript
import { Component, OnInit } from '@angular/core';
import { LoginPageComponent } from '@madergk/bio-ds';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-remember',
  standalone: true,
  imports: [LoginPageComponent],
  template: `<bio-login-page></bio-login-page>`
})
export class LoginWithRememberComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Check if user chose "Remember me"
    const savedEmail = localStorage.getItem('remembered_email');
    if (savedEmail) {
      // Auto-fill email
      // Optionally, auto-login if secure
    }
  }

  onLogin(credentials: any): void {
    this.authService.login(credentials.email, credentials.password).subscribe({
      next: () => {
        if (credentials.rememberMe) {
          localStorage.setItem('remembered_email', credentials.email);
        } else {
          localStorage.removeItem('remembered_email');
        }
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }
}
```

### Example 4: Progressive Login (Email First, Then Password)

```typescript
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-progressive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="progressive-login">
      <form *ngIf="step === 'email'" [formGroup]="emailForm" (ngSubmit)="onEmailSubmit()">
        <h2>Sign In</h2>
        <input formControlName="email" type="email" placeholder="Enter your email" />
        <button type="submit">Next</button>
      </form>

      <form *ngIf="step === 'password'" [formGroup]="passwordForm" (ngSubmit)="onPasswordSubmit()">
        <h2>Enter Password</h2>
        <p>{{ emailForm.get('email')?.value }}</p>
        <input formControlName="password" type="password" placeholder="Enter your password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  `
})
export class ProgressiveLoginComponent {
  step: 'email' | 'password' = 'email';
  emailForm!: FormGroup;
  passwordForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onEmailSubmit(): void {
    if (this.emailForm.valid) {
      this.step = 'password';
    }
  }

  onPasswordSubmit(): void {
    if (this.passwordForm.valid) {
      // Submit both forms
      const credentials = {
        email: this.emailForm.get('email')?.value,
        password: this.passwordForm.get('password')?.value
      };
      console.log('Login with:', credentials);
    }
  }
}
```

## Tips & Tricks

### Disable Autocomplete
```html
<input
  type="email"
  autocomplete="off"
  placeholder="Enter email" />
```

### Password Strength Indicator
```typescript
getPasswordStrength(password: string): number {
  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*]/.test(password)) strength++;
  return strength;
}
```

### Email Domain Validation
```typescript
export function domainValidator(domains: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    if (!email) return null;

    const domain = email.split('@')[1];
    return domains.includes(domain) ? null : { invalidDomain: true };
  };
}
```

---

For more examples and complete documentation, see `/LOGIN_PAGE_GUIDE.md`
