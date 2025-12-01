import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Tooltip Direction
 */
export type TooltipDirection = 'top' | 'bottom' | 'left' | 'right';

/**
 * Tooltip Component
 * 
 * A reusable tooltip component following atomic design principles.
 * This is an "atom" - a basic building block.
 * 
 * Features:
 * - Multiple directions (top, bottom, left, right)
 * - Auto width support
 * - Dark background with white text
 * - Arrow positioning
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-tooltip 
 *   text="Tooltip text"
 *   direction="top"
 *   [autoWidth]="true">
 * </bio-tooltip>
 * ```
 */
@Component({
  selector: 'bio-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TooltipComponent {
  /**
   * Tooltip text
   */
  @Input() text: string = 'Tooltip text';

  /**
   * Tooltip direction
   * @default 'top'
   */
  @Input() direction: TooltipDirection = 'top';

  /**
   * Auto width (content-based width)
   * @default true
   */
  @Input() autoWidth: boolean = true;

  /**
   * Get CSS classes for the tooltip container
   */
  get tooltipClasses(): string {
    return [
      'bio-tooltip',
      `bio-tooltip--${this.direction}`,
      this.autoWidth ? 'bio-tooltip--auto-width' : ''
    ].filter(Boolean).join(' ');
  }
}

