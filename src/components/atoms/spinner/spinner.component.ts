import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Spinner Type
 */
export type SpinnerType = 'border' | 'growing';

/**
 * Spinner Color
 */
export type SpinnerColor = 'dark' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light';

/**
 * Spinner Component
 * 
 * A reusable spinner/loading indicator component following atomic design principles.
 * This is an "atom" - a basic building block.
 * 
 * Features:
 * - Two types: border (rotating border) and growing (pulsing circles)
 * - Multiple colors
 * - Animated rotation/pulse
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-spinner 
 *   type="border"
 *   color="primary">
 * </bio-spinner>
 * ```
 */
@Component({
  selector: 'bio-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SpinnerComponent {
  /**
   * Spinner type
   * @default 'border'
   */
  @Input() type: SpinnerType = 'border';

  /**
   * Spinner color
   * @default 'dark'
   */
  @Input() color: SpinnerColor = 'dark';

  /**
   * Get CSS classes for the spinner
   */
  get spinnerClasses(): string {
    return [
      'bio-spinner',
      `bio-spinner--${this.type}`,
      `bio-spinner--${this.color}`
    ].filter(Boolean).join(' ');
  }
}

