import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * Input Size
 */
export type InputSize = 'sm' | 'md' | 'lg';

/**
 * Input State
 */
export type InputState = 'normal' | 'focused' | 'disabled';

/**
 * Input Validation
 */
export type InputValidation = 'normal' | 'valid' | 'invalid';

/**
 * Input Component
 * 
 * A comprehensive input component following atomic design principles.
 * This is an "atom" - a basic building block for forms.
 * 
 * Features:
 * - Multiple sizes (sm, md, lg)
 * - States (normal, focused, disabled)
 * - Validation states (normal, valid, invalid)
 * - Prefix and suffix support (icons or text)
 * - Addon support (before and after)
 * - Filled state (has value)
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-input 
 *   size="md"
 *   placeholder="Enter text"
 *   [prefix]="true"
 *   [suffix]="true">
 * </bio-input>
 * ```
 */
@Component({
  selector: 'bio-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  /**
   * Input value
   */
  @Input() value: string = '';

  /**
   * Placeholder text
   */
  @Input() placeholder: string = '';

  /**
   * Input type
   * @default 'text'
   */
  @Input() type: string = 'text';

  /**
   * Input size
   * @default 'md'
   */
  @Input() size: InputSize = 'md';

  /**
   * Input state
   * @default 'normal'
   */
  @Input() state: InputState = 'normal';

  /**
   * Validation state
   * @default 'normal'
   */
  @Input() validation: InputValidation = 'normal';

  /**
   * Whether input has a value (filled)
   * @default false
   */
  @Input() filled: boolean = false;

  /**
   * Whether input has prefix
   * @default false
   */
  @Input() prefix: boolean = false;

  /**
   * Whether input has suffix
   * @default false
   */
  @Input() suffix: boolean = false;

  /**
   * Whether input has addon before
   * @default false
   */
  @Input() addonBefore: boolean = false;

  /**
   * Whether input has addon after
   * @default false
   */
  @Input() addonAfter: boolean = false;

  /**
   * Prefix content (text or icon)
   */
  @Input() prefixContent?: string;

  /**
   * Suffix content (text or icon)
   */
  @Input() suffixContent?: string;

  /**
   * Addon before content
   */
  @Input() addonBeforeContent?: string;

  /**
   * Addon after content
   */
  @Input() addonAfterContent?: string;

  /**
   * Whether prefix is an icon
   * @default false
   */
  @Input() prefixIcon: boolean = false;

  /**
   * Whether suffix is an icon
   * @default false
   */
  @Input() suffixIcon: boolean = false;

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
   * Whether input is readonly
   * @default false
   */
  @Input() readonly: boolean = false;

  /**
   * Max length
   */
  @Input() maxlength?: number;

  /**
   * Additional CSS classes
   */
  @Input() class?: string;

  /**
   * Value change event
   */
  @Output() valueChange = new EventEmitter<string>();

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
   * Get CSS classes for input wrapper
   */
  get inputWrapperClasses(): string {
    const classes = [
      'bio-input-wrapper',
      `bio-input-wrapper--${this.size}`,
      this.state === 'disabled' ? 'bio-input-wrapper--disabled' : '',
      this.isFocused && this.state !== 'disabled' ? 'bio-input-wrapper--focused' : '',
      this.validation !== 'normal' ? `bio-input-wrapper--${this.validation}` : '',
      this.filled ? 'bio-input-wrapper--filled' : '',
      this.prefix ? 'bio-input-wrapper--prefix' : '',
      this.suffix ? 'bio-input-wrapper--suffix' : '',
      this.addonBefore ? 'bio-input-wrapper--addon-before' : '',
      this.addonAfter ? 'bio-input-wrapper--addon-after' : '',
      this.class || ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }

  /**
   * Get CSS classes for input element
   */
  get inputClasses(): string {
    const classes = [
      'bio-input',
      `bio-input--${this.size}`,
      this.state === 'disabled' ? 'bio-input--disabled' : '',
      this.validation !== 'normal' ? `bio-input--${this.validation}` : ''
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
    this.state = isDisabled ? 'disabled' : 'normal';
  }
}

