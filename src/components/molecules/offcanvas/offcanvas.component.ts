import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Offcanvas Position
 */
export type OffcanvasPosition = 'left' | 'right' | 'top' | 'bottom';

/**
 * Offcanvas Component
 * 
 * A reusable offcanvas/sidebar component following atomic design principles.
 * This is a "molecule" - composed of header, body, and optional content.
 * 
 * Features:
 * - Multiple positions (left, right, top, bottom)
 * - Header with title and close button
 * - Scrollable body
 * - Custom content support
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-offcanvas 
 *   [isOpen]="showOffcanvas"
 *   title="Offcanvas"
 *   position="left"
 *   (close)="showOffcanvas = false">
 *   <p>Offcanvas content</p>
 * </bio-offcanvas>
 * ```
 */
@Component({
  selector: 'bio-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class OffcanvasComponent {
  /**
   * Whether offcanvas is open
   */
  @Input() isOpen: boolean = false;

  /**
   * Offcanvas title
   */
  @Input() title: string = 'Offcanvas';

  /**
   * Position of the offcanvas
   * @default 'left'
   */
  @Input() position: OffcanvasPosition = 'left';

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
   * Get CSS classes for the offcanvas container
   */
  get offcanvasClasses(): string {
    return [
      'bio-offcanvas',
      `bio-offcanvas--${this.position}`,
      this.isOpen ? 'bio-offcanvas--open' : ''
    ].filter(Boolean).join(' ');
  }
}

