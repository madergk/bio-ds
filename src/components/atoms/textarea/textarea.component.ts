import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputSize, InputState, InputValidation } from '../input/input.component';

/**
 * Textarea Component
 * 
 * A multi-line text input component with validation and character counter.
 * This is an "atom" - a basic building block for forms.
 * 
 * Features:
 * - Multiple sizes (sm, md, lg)
 * - States (normal, focused, disabled)
 * - Validation states (normal, valid, invalid)
 * - Character counter
 * - Auto-resize based on content
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-textarea 
 *   size="md"
 *   placeholder="Enter text"
 *   [counter]="true"
 *   maxlength="100">
 * </bio-textarea>
 * ```
 */
@Component({
  selector: 'bio-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  /**
   * Input value
   */
  @Input() value: string = '';

  /**
   * Placeholder text
   */
  @Input() placeholder: string = 'Autosize height based on content lines, ';

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
   * Whether to show character counter
   * @default false
   */
  @Input() counter: boolean = false;

  /**
   * Maximum length
   */
  @Input() maxlength?: number;

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
   * Get character count
   */
  get characterCount(): number {
    return this._value.length;
  }

  /**
   * Get counter text
   */
  get counterText(): string {
    if (this.maxlength) {
      return `${this.characterCount} / ${this.maxlength}`;
    }
    return `${this.characterCount}`;
  }

  /**
   * Handle input change
   */
  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.currentValue = target.value;
    this.autoResize(target);
  }

  /**
   * Auto-resize textarea based on content
   */
  autoResize(textarea: HTMLTextAreaElement): void {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
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
   * Get CSS classes for textarea wrapper
   */
  get textareaWrapperClasses(): string {
    const classes = [
      'bio-textarea-wrapper',
      `bio-textarea-wrapper--${this.size}`,
      this.state === 'disabled' ? 'bio-textarea-wrapper--disabled' : '',
      this.isFocused && this.state !== 'disabled' ? 'bio-textarea-wrapper--focused' : '',
      this.validation !== 'normal' ? `bio-textarea-wrapper--${this.validation}` : '',
      this.filled ? 'bio-textarea-wrapper--filled' : '',
      this.class || ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }

  /**
   * Get CSS classes for textarea element
   */
  get textareaClasses(): string {
    const classes = [
      'bio-textarea',
      `bio-textarea--${this.size}`,
      this.state === 'disabled' ? 'bio-textarea--disabled' : '',
      this.validation !== 'normal' ? `bio-textarea--${this.validation}` : ''
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

