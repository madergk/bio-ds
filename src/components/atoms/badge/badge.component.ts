import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Badge Sizes
 * 
 * Controls the font size and padding:
 * - H6: Smallest (12px font)
 * - H5: Small (15px font)
 * - H4: Medium (18px font)
 * - H3: Large (21px font)
 * - H2: Extra Large (24px font)
 * - H1: Largest (30px font)
 * - '-': Dot type only (no text, just a circle)
 */
export type BadgeSize = 'H6' | 'H5' | 'H4' | 'H3' | 'H2' | 'H1' | '-';

/**
 * Badge Colors
 * 
 * Defines the visual style and semantic meaning:
 * - primary: Primary brand color (red)
 * - secondary: Secondary color (gray)
 * - success: Success state (green)
 * - danger: Error/destructive state (red)
 * - warning: Warning state (yellow)
 * - info: Informational state (cyan)
 * - light: Light background (light gray)
 * - dark: Dark background (dark gray)
 */
export type BadgeColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

/**
 * Badge Types
 * 
 * Controls the shape:
 * - normal: Rounded corners (6px border-radius)
 * - pill: Fully rounded (100px border-radius)
 * - dot: Just a circle, no text (only works with size '-')
 */
export type BadgeType = 'normal' | 'pill' | 'dot';

/**
 * Badge Component
 * 
 * A reusable badge component following atomic design principles.
 * This is an "atom" - a basic building block of the design system.
 * 
 * Features:
 * - Multiple sizes (H6 to H1, or dot)
 * - Multiple color variants
 * - Three types (normal, pill, dot)
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-badge 
 *   text="Primary"
 *   size="H6"
 *   color="primary"
 *   type="normal">
 * </bio-badge>
 * ```
 */
@Component({
  selector: 'bio-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BadgeComponent {
  /**
   * Badge text content
   * Not used for dot type
   * @default 'Primary'
   */
  @Input() text: string = 'Primary';

  /**
   * Size of the badge
   * @default 'H6'
   */
  @Input() size: BadgeSize = 'H6';

  /**
   * Color variant of the badge
   * @default 'primary'
   */
  @Input() color: BadgeColor = 'primary';

  /**
   * Type/shape of the badge
   * @default 'normal'
   */
  @Input() type: BadgeType = 'normal';

  /**
   * Get CSS classes for the badge container
   */
  get badgeClasses(): string {
    // For dot type, return simple classes
    if (this.type === 'dot') {
      return [
        'bio-badge',
        'bio-badge--dot',
        `bio-badge--${this.color}`
      ].filter(Boolean).join(' ');
    }

    // For normal and pill types
    return [
      'bio-badge',
      `bio-badge--${this.size}`,
      `bio-badge--${this.color}`,
      `bio-badge--${this.type}`
    ].filter(Boolean).join(' ');
  }

  /**
   * Check if badge should show text
   * Dot type doesn't show text
   */
  get shouldShowText(): boolean {
    return this.type !== 'dot';
  }
}

