import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Popover Direction
 */
export type PopoverDirection = 'top' | 'bottom' | 'left' | 'right';

/**
 * Popover Component
 * 
 * A reusable popover component following atomic design principles.
 * This is a "molecule" - composed of optional title and content.
 * 
 * Features:
 * - Multiple directions (top, bottom, left, right)
 * - Optional title
 * - Auto width support
 * - Arrow positioning
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-popover 
 *   [isOpen]="showPopover"
 *   title="Popover Title"
 *   direction="top"
 *   (close)="showPopover = false">
 *   <p>Popover Content</p>
 * </bio-popover>
 * ```
 */
@Component({
  selector: 'bio-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PopoverComponent {
  /**
   * Whether popover is open
   */
  @Input() isOpen: boolean = false;

  /**
   * Popover title (optional)
   */
  @Input() title?: string;

  /**
   * Popover direction
   * @default 'top'
   */
  @Input() direction: PopoverDirection = 'top';

  /**
   * Auto width (content-based width)
   * @default false
   */
  @Input() autoWidth: boolean = false;

  /**
   * Close event emitter
   */
  @Output() close = new EventEmitter<void>();

  /**
   * Handle close
   */
  onClose(): void {
    this.close.emit();
  }

  /**
   * Get CSS classes for the popover container
   */
  get popoverClasses(): string {
    return [
      'bio-popover',
      `bio-popover--${this.direction}`,
      this.autoWidth ? 'bio-popover--auto-width' : '',
      this.title ? 'bio-popover--with-title' : ''
    ].filter(Boolean).join(' ');
  }
}

