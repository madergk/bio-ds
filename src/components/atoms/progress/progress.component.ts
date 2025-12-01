import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Progress Bar Item
 */
export interface ProgressBarItem {
  value: number;
  color?: 'default' | 'success' | 'info' | 'warning' | 'danger';
  label?: string;
}

/**
 * Progress Color
 */
export type ProgressColor = 'default' | 'success' | 'info' | 'warning' | 'danger';

/**
 * Progress Component
 * 
 * A reusable progress bar component following atomic design principles.
 * This is an "atom" - a basic building block.
 * 
 * Features:
 * - Single or multiple progress bars
 * - Color variants
 * - Striped variant
 * - Label support (percentage)
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-progress 
 *   [value]="75"
 *   color="success"
 *   [striped]="false"
 *   [showLabel]="true">
 * </bio-progress>
 * ```
 */
@Component({
  selector: 'bio-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ProgressComponent {
  /**
   * Progress value (0-100)
   */
  @Input() value: number = 0;

  /**
   * Progress color
   * @default 'default'
   */
  @Input() color: ProgressColor = 'default';

  /**
   * Striped variant
   * @default false
   */
  @Input() striped: boolean = false;

  /**
   * Show label (percentage)
   * @default false
   */
  @Input() showLabel: boolean = false;

  /**
   * Multiple bars (array of progress items)
   */
  @Input() multipleBars?: ProgressBarItem[];

  /**
   * Get CSS classes for the progress container
   */
  get progressClasses(): string {
    return [
      'bio-progress',
      this.striped ? 'bio-progress--striped' : ''
    ].filter(Boolean).join(' ');
  }

  /**
   * Get CSS classes for a progress bar
   */
  getBarClasses(color: ProgressColor = this.color): string {
    return [
      'bio-progress__bar',
      `bio-progress__bar--${color}`,
      this.striped ? 'bio-progress__bar--striped' : ''
    ].filter(Boolean).join(' ');
  }

  /**
   * Get style for progress bar width
   */
  getBarStyle(value: number): { width: string } {
    return {
      width: `${Math.min(100, Math.max(0, value))}%`
    };
  }

  /**
   * Check if using multiple bars
   */
  get isMultiple(): boolean {
    return !!this.multipleBars && this.multipleBars.length > 0;
  }
}

