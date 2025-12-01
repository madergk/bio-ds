import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputSize } from '../input/input.component';

/**
 * Password Input Component
 * 
 * A specialized input component for password fields with visibility toggle.
 * This is an "atom" - a basic building block for forms.
 * 
 * Features:
 * - Password visibility toggle
 * - Multiple sizes (sm, md, lg)
 * - States (normal, focused, disabled)
 * - Filled state
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-password-input 
 *   size="md"
 *   placeholder="Enter password"
 *   [visible]="false">
 * </bio-password-input>
 * ```
 */
@Component({
  selector: 'bio-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true
    }
  ]
})
export class PasswordInputComponent implements ControlValueAccessor {
  /**
   * Input value
   */
  @Input() value: string = '';

  /**
   * Placeholder text
   */
  @Input() placeholder: string = 'example';

  /**
   * Input size
   * @default 'md'
   */
  @Input() size: InputSize = 'md';

  /**
   * Whether password is visible
   * @default false
   */
  @Input() visible: boolean = false;

  /**
   * Whether input is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Whether input has a value (filled)
   * @default false
   */
  @Input() filled: boolean = false;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Input id attribute
   */
  @Input() id?: string;

  /**
   * Whether input is required
   * @default false
   */
  @Input() required: boolean = false;

  /**
   * Additional CSS classes
   */
  @Input() class?: string;

  /**
   * Value change event
   */
  @Output() valueChange = new EventEmitter<string>();

  /**
   * Visibility toggle event
   */
  @Output() visibilityChange = new EventEmitter<boolean>();

  /**
   * Focus event
   */
  @Output() focus = new EventEmitter<FocusEvent>();

  /**
   * Blur event
   */
  @Output() blur = new EventEmitter<FocusEvent>();

  /**
   * Internal value
   */
  private _value: string = '';

  /**
   * Focused state
   */
  isFocused: boolean = false;

  /**
   * ControlValueAccessor methods
   */
  private onChange = (value: string) => {};
  private onTouched = () => {};

  /**
   * Get current value
   */
  get currentValue(): string {
    return this._value;
  }

  /**
   * Set value
   */
  set currentValue(val: string) {
    this._value = val;
    this.onChange(val);
    this.valueChange.emit(val);
    this.filled = !!val;
  }

  /**
   * Get input type based on visibility
   */
  get inputType(): string {
    return this.visible ? 'text' : 'password';
  }

  /**
   * Handle input change
   */
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.currentValue = target.value;
  }

  /**
   * Handle focus
   */
  onFocus(event: FocusEvent): void {
    this.isFocused = true;
    this.focus.emit(event);
  }

  /**
   * Handle blur
   */
  onBlur(event: FocusEvent): void {
    this.isFocused = false;
    this.onTouched();
    this.blur.emit(event);
  }

  /**
   * Toggle password visibility
   */
  toggleVisibility(): void {
    if (!this.disabled) {
      this.visible = !this.visible;
      this.visibilityChange.emit(this.visible);
    }
  }

  /**
   * Get CSS classes for input wrapper
   */
  get inputWrapperClasses(): string {
    const classes = [
      'bio-password-input-wrapper',
      `bio-password-input-wrapper--${this.size}`,
      this.disabled ? 'bio-password-input-wrapper--disabled' : '',
      this.isFocused && !this.disabled ? 'bio-password-input-wrapper--focused' : '',
      this.filled ? 'bio-password-input-wrapper--filled' : '',
      this.class || ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }

  /**
   * Get CSS classes for input element
   */
  get inputClasses(): string {
    const classes = [
      'bio-password-input',
      `bio-password-input--${this.size}`,
      this.disabled ? 'bio-password-input--disabled' : ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }

  /**
   * ControlValueAccessor: Write value
   */
  writeValue(value: string): void {
    this._value = value || '';
    this.filled = !!value;
  }

  /**
   * ControlValueAccessor: Register onChange
   */
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  /**
   * ControlValueAccessor: Register onTouched
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * ControlValueAccessor: Set disabled state
   */
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}

