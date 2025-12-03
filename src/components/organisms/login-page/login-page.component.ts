import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputComponent } from '../../atoms/input/input.component';
import { PasswordInputComponent } from '../../atoms/password-input/password-input.component';
import { AlertComponent } from '../../atoms/alert/alert.component';
import { SpinnerComponent } from '../../atoms/spinner/spinner.component';

/**
 * Login Page Component
 * 
 * A responsive login page organism built with bio-ds components.
 * Features a modern, clean design with form validation and accessibility.
 * 
 * Features:
 * - Responsive layout (mobile, tablet, desktop)
 * - Email and password inputs
 * - Remember me checkbox
 * - Form validation
 * - Error handling
 * - Loading state
 * - Social login options (placeholder)
 * - Sign up link
 * - Password recovery link
 * 
 * @example
 * ```html
 * <bio-login-page 
 *   (login)="handleLogin($event)"
 *   [isLoading]="isLoading"
 *   [errorMessage]="errorMessage">
 * </bio-login-page>
 * ```
 */
@Component({
  selector: 'bio-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    InputComponent,
    PasswordInputComponent,
    AlertComponent,
    SpinnerComponent
  ]
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';
  showPassword = false;
  rememberMe = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  /**
   * Initialize the login form with validation
   */
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

  /**
   * Handle form submission
   */
  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.markFormGroupTouched(this.loginForm);
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Simulate API call
    setTimeout(() => {
      try {
        const { email, password, rememberMe } = this.loginForm.value;
        
        // Demo validation - in real app, this would be an API call
        if (email && password) {
          this.successMessage = `Login successful! Welcome, ${email}`;
          this.loginForm.reset();
          
          // In a real application, you would:
          // 1. Make an API call to authenticate
          // 2. Store the token
          // 3. Navigate to dashboard
        }
      } catch (error) {
        this.errorMessage = 'An error occurred. Please try again.';
      } finally {
        this.isLoading = false;
      }
    }, 1500);
  }

  /**
   * Toggle password visibility
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  /**
   * Handle remember me checkbox
   */
  onRememberMeChange(value: boolean): void {
    this.rememberMe = value;
  }

  /**
   * Clear error message
   */
  clearError(): void {
    this.errorMessage = '';
  }

  /**
   * Mark all form fields as touched
   * This triggers validation error display
   */
  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  /**
   * Get email field validation status
   */
  get emailControl() {
    return this.loginForm.get('email');
  }

  /**
   * Get password field validation status
   */
  get passwordControl() {
    return this.loginForm.get('password');
  }

  /**
   * Check if email field has error
   */
  isEmailInvalid(): boolean {
    const control = this.emailControl;
    return !!(control && control.invalid && control.touched);
  }

  /**
   * Check if password field has error
   */
  isPasswordInvalid(): boolean {
    const control = this.passwordControl;
    return !!(control && control.invalid && control.touched);
  }

  /**
   * Get email error message
   */
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

  /**
   * Get password error message
   */
  getPasswordErrorMessage(): string {
    const control = this.passwordControl;
    if (control?.hasError('required')) {
      return 'Password is required';
    }
    if (control?.hasError('minlength')) {
      return 'Password must be at least 6 characters';
    }
    return '';
  }
}
