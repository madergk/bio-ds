import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';

/**
 * Modal Size
 */
export type ModalSize = 'small' | 'default' | 'large' | 'extra large';

/**
 * Modal Type
 */
export type ModalType = 'text' | 'custom';

/**
 * Modal Component
 * 
 * A reusable modal component following atomic design principles.
 * This is a "molecule" - composed of header, body, and footer.
 * 
 * Features:
 * - Multiple sizes (small, default, large, extra large)
 * - Text or custom content
 * - Header with title and close button
 * - Footer with buttons
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-modal 
 *   [isOpen]="showModal"
 *   title="Modal Title"
 *   size="default"
 *   (close)="showModal = false">
 *   <p>Modal content</p>
 * </bio-modal>
 * ```
 */
@Component({
  selector: 'bio-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  standalone: true,
  imports: [CommonModule, ButtonComponent]
})
export class ModalComponent {
  /**
   * Whether modal is open
   */
  @Input() isOpen: boolean = false;

  /**
   * Modal title
   */
  @Input() title: string = 'Modal Title';

  /**
   * Modal size
   * @default 'default'
   */
  @Input() size: ModalSize = 'default';

  /**
   * Modal type
   * @default 'text'
   */
  @Input() type: ModalType = 'text';

  /**
   * Custom footer template
   */
  @Input() footerTemplate?: TemplateRef<any>;

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
   * Handle backdrop click
   */
  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  /**
   * Get CSS classes for the modal container
   */
  get modalClasses(): string {
    return [
      'bio-modal',
      `bio-modal--${this.size.replace(/\s+/g, '-')}`,
      this.type === 'custom' ? 'bio-modal--custom' : ''
    ].filter(Boolean).join(' ');
  }

  /**
   * Get modal width based on size
   */
  get modalWidth(): string {
    switch (this.size) {
      case 'small':
        return '300px';
      case 'large':
        return '800px';
      case 'extra large':
        return '1140px';
      default:
        return '500px';
    }
  }
}

