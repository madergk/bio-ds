import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Placeholder Type
 */
export type PlaceholderType = 'image' | 'text' | 'image + text' | 'multi-line';

/**
 * Placeholder Size
 */
export type PlaceholderSize = 'default' | 'small' | 'large' | 'extra small';

/**
 * Placeholder State
 */
export type PlaceholderState = 'normal' | 'glow';

/**
 * Placeholder Component
 * 
 * A reusable placeholder/skeleton component following atomic design principles.
 * This is an "atom" - a basic building block for loading states.
 * 
 * Features:
 * - Multiple types (image, text, image + text, multi-line)
 * - Size variants
 * - Glow animation state
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-placeholder 
 *   type="image + text"
 *   size="default">
 * </bio-placeholder>
 * ```
 */
@Component({
  selector: 'bio-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PlaceholderComponent {
  /**
   * Placeholder type
   * @default 'text'
   */
  @Input() type: PlaceholderType = 'text';

  /**
   * Placeholder size
   * @default 'default'
   */
  @Input() size: PlaceholderSize = 'default';

  /**
   * Placeholder state
   * @default 'normal'
   */
  @Input() state: PlaceholderState = 'normal';

  /**
   * Get CSS classes for the placeholder container
   */
  get placeholderClasses(): string {
    return [
      'bio-placeholder',
      `bio-placeholder--${this.type.replace(/\s+\+\s+/g, '-').replace(/\s+/g, '-')}`,
      `bio-placeholder--${this.size.replace(/\s+/g, '-')}`,
      this.state === 'glow' ? 'bio-placeholder--glow' : ''
    ].filter(Boolean).join(' ');
  }
}

