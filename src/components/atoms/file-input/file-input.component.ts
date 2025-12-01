import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputSize, InputState, InputValidation } from '../input/input.component';

/**
 * File Input Component
 * 
 * A file upload input component with validation states.
 * This is an "atom" - a basic building block for forms.
 * 
 * Features:
 * - Multiple sizes (sm, md, lg)
 * - States (normal, focused, disabled, hovered)
 * - Validation states (normal, valid, invalid)
 * - Filled state
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-file-input 
 *   size="md"
 *   accept="image/*"
 *   (fileChange)="handleFile($event)">
 * </bio-file-input>
 * ```
 */
@Component({
  selector: 'bio-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FileInputComponent),
      multi: true
    }
  ]
})
export class FileInputComponent implements ControlValueAccessor {
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
   * Accepted file types
   */
  @Input() accept?: string;

  /**
   * Whether multiple files are allowed
   * @default false
   */
  @Input() multiple: boolean = false;

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
   * File change event
   */
  @Output() fileChange = new EventEmitter<FileList | null>();

  /**
   * Focus event
   */
  @Output() focus = new EventEmitter<FocusEvent>();

  /**
   * Blur event
   */
  @Output() blur = new EventEmitter<FocusEvent>();

  /**
   * Selected files
   */
  selectedFiles: FileList | null = null;

  /**
   * Focused state
   */
  isFocused: boolean = false;

  /**
   * Hovered state
   */
  isHovered: boolean = false;

  /**
   * ControlValueAccessor methods
   */
  private onChange = (value: FileList | null) => {};
  private onTouched = () => {};

  /**
   * Get file names
   */
  get fileNames(): string {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      return '';
    }
    if (this.selectedFiles.length === 1) {
      return this.selectedFiles[0].name;
    }
    return `${this.selectedFiles.length} files selected`;
  }

  /**
   * Handle file change
   */
  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.selectedFiles = target.files;
    this.filled = !!this.selectedFiles && this.selectedFiles.length > 0;
    this.onChange(this.selectedFiles);
    this.fileChange.emit(this.selectedFiles);
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
   * Handle mouse enter
   */
  onMouseEnter(): void {
    if (this.state !== 'disabled') {
      this.isHovered = true;
    }
  }

  /**
   * Handle mouse leave
   */
  onMouseLeave(): void {
    this.isHovered = false;
  }

  /**
   * Get CSS classes for file input wrapper
   */
  get fileInputWrapperClasses(): string {
    const classes = [
      'bio-file-input-wrapper',
      `bio-file-input-wrapper--${this.size}`,
      this.state === 'disabled' ? 'bio-file-input-wrapper--disabled' : '',
      this.isFocused && this.state !== 'disabled' ? 'bio-file-input-wrapper--focused' : '',
      this.isHovered && this.state !== 'disabled' ? 'bio-file-input-wrapper--hovered' : '',
      this.validation !== 'normal' ? `bio-file-input-wrapper--${this.validation}` : '',
      this.filled ? 'bio-file-input-wrapper--filled' : '',
      this.class || ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }

  /**
   * Get CSS classes for file input element
   */
  get fileInputClasses(): string {
    const classes = [
      'bio-file-input',
      `bio-file-input--${this.size}`,
      this.state === 'disabled' ? 'bio-file-input--disabled' : '',
      this.validation !== 'normal' ? `bio-file-input--${this.validation}` : ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }

  /**
   * ControlValueAccessor: Write value
   */
  writeValue(value: FileList | null): void {
    this.selectedFiles = value;
    this.filled = !!value && value.length > 0;
  }

  /**
   * ControlValueAccessor: Register onChange
   */
  registerOnChange(fn: (value: FileList | null) => void): void {
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

