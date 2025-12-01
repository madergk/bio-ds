import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputSize } from '../input/input.component';

/**
 * Search Box Component
 * 
 * A specialized input component for search functionality.
 * This is an "atom" - a basic building block for search interfaces.
 * 
 * Features:
 * - Multiple sizes (sm, md, lg)
 * - Enter mode (text or icon)
 * - Suffix support
 * - Clear button
 * - Filled state
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-search-box 
 *   size="md"
 *   placeholder="Search..."
 *   [allowClear]="true"
 *   (search)="handleSearch($event)">
 * </bio-search-box>
 * ```
 */
@Component({
  selector: 'bio-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchBoxComponent),
      multi: true
    }
  ]
})
export class SearchBoxComponent implements ControlValueAccessor {
  /**
   * Input value
   */
  @Input() value: string = '';

  /**
   * Placeholder text
   */
  @Input() placeholder: string = 'Search...';

  /**
   * Input size
   * @default 'md'
   */
  @Input() size: InputSize = 'md';

  /**
   * Enter mode: 'text' or 'icon'
   * @default 'text'
   */
  @Input() enter: 'text' | 'icon' = 'text';

  /**
   * Whether to show suffix
   * @default false
   */
  @Input() suffix: boolean = false;

  /**
   * Whether input has a value (filled)
   * @default false
   */
  @Input() filled: boolean = false;

  /**
   * Whether to allow clear
   * @default false
   */
  @Input() allowClear: boolean = false;

  /**
   * Whether input is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * Input name attribute
   */
  @Input() name?: string;

  /**
   * Input id attribute
   */
  @Input() id?: string;

  /**
   * Additional CSS classes
   */
  @Input() class?: string;

  /**
   * Value change event
   */
  @Output() valueChange = new EventEmitter<string>();

  /**
   * Search event (emitted on Enter key or search icon click)
   */
  @Output() search = new EventEmitter<string>();

  /**
   * Clear event
   */
  @Output() clear = new EventEmitter<void>();

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
   * Handle keydown (Enter key)
   */
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !this.disabled) {
      this.search.emit(this.currentValue);
    }
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
   * Handle clear
   */
  onClear(): void {
    if (!this.disabled && this.allowClear) {
      this.currentValue = '';
      this.clear.emit();
    }
  }

  /**
   * Handle search icon click
   */
  onSearchClick(): void {
    if (!this.disabled && this.enter === 'icon') {
      this.search.emit(this.currentValue);
    }
  }

  /**
   * Get CSS classes for search box wrapper
   */
  get searchBoxWrapperClasses(): string {
    const classes = [
      'bio-search-box-wrapper',
      `bio-search-box-wrapper--${this.size}`,
      this.disabled ? 'bio-search-box-wrapper--disabled' : '',
      this.isFocused && !this.disabled ? 'bio-search-box-wrapper--focused' : '',
      this.filled ? 'bio-search-box-wrapper--filled' : '',
      this.suffix ? 'bio-search-box-wrapper--suffix' : '',
      this.allowClear ? 'bio-search-box-wrapper--clearable' : '',
      this.class || ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }

  /**
   * Get CSS classes for input element
   */
  get inputClasses(): string {
    const classes = [
      'bio-search-box-input',
      `bio-search-box-input--${this.size}`,
      this.disabled ? 'bio-search-box-input--disabled' : ''
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

