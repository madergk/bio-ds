import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Toast Color
 */
export type ToastColor = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark';

/**
 * Toast Component
 * 
 * A reusable toast notification component following atomic design principles.
 * This is a "molecule" - composed of header, body, and close button.
 * 
 * Features:
 * - Header with optional image and timestamp
 * - Body with message
 * - Close button
 * - Color variants
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-toast 
 *   title="Bootstrap"
 *   message="Hello, world! This is a toast message."
 *   color="primary"
 *   [showHeader]="true"
 *   [showClose]="true"
 *   (close)="onClose()">
 * </bio-toast>
 * ```
 */
@Component({
  selector: 'bio-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ToastComponent {
  /**
   * Toast title
   */
  @Input() title?: string;

  /**
   * Toast message
   */
  @Input() message: string = 'Hello, world! This is a toast message.';

  /**
   * Toast color
   * @default 'default'
   */
  @Input() color: ToastColor = 'default';

  /**
   * Show header
   * @default true
   */
  @Input() showHeader: boolean = true;

  /**
   * Show image in header
   * @default true
   */
  @Input() showImage: boolean = true;

  /**
   * Image source URL
   */
  @Input() imageSrc?: string;

  /**
   * Image alt text
   */
  @Input() imageAlt: string = 'Toast image';

  /**
   * Timestamp text
   */
  @Input() timestamp?: string;

  /**
   * Show close button
   * @default true
   */
  @Input() showClose: boolean = true;

  /**
   * Close event emitter
   */
  @Output() close = new EventEmitter<void>();

  /**
   * Handle close button click
   */
  onClose(): void {
    this.close.emit();
  }

  /**
   * Get CSS classes for the toast container
   */
  get toastClasses(): string {
    return [
      'bio-toast',
      `bio-toast--${this.color}`
    ].filter(Boolean).join(' ');
  }
}

