import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Button Variants
 * 
 * Defines the visual style of the button:
 * - primary: Main action button (uses primary color)
 * - secondary: Secondary action (uses neutral/gray colors)
 * - outline: Outlined style with transparent background
 * - text: Text-only button, no background
 * - danger: Destructive action (uses error/semantic color)
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'danger';

/**
 * Button Sizes
 * 
 * Controls the padding and font size:
 * - sm: Small button (compact)
 * - md: Medium button (default)
 * - lg: Large button (prominent)
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button Component
 * 
 * A reusable button component following atomic design principles.
 * This is an "atom" - a basic building block of the design system.
 * 
 * Features:
 * - Multiple variants (primary, secondary, outline, text, danger)
 * - Three sizes (sm, md, lg)
 * - Disabled state
 * - Type safety with TypeScript
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-button 
 *   variant="primary" 
 *   size="md"
 *   (click)="handleClick()">
 *   Click me
 * </bio-button>
 * ```
 */
@Component({
  selector: 'bio-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true
})
export class ButtonComponent {
  /**
   * Button text content
   * Can also use content projection with <ng-content>
   */
  @Input() label?: string;

  /**
   * Visual variant of the button
   * @default 'primary'
   */
  @Input() variant: ButtonVariant = 'primary';

  /**
   * Size of the button
   * @default 'md'
   */
  @Input() size: ButtonSize = 'md';

  /**
   * Whether the button is disabled
   * @default false
   */
  @Input() disabled: boolean = false;

  /**
   * HTML button type attribute
   * Useful for forms: 'button' | 'submit' | 'reset'
   * @default 'button'
   */
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Additional CSS classes
   * Allows consumers to add custom styling
   */
  @Input() class?: string;

  /**
   * Click event emitter
   * Emits when button is clicked (if not disabled)
   */
  @Output() click = new EventEmitter<MouseEvent>();

  /**
   * Handle button click
   * Prevents click if button is disabled
   */
  onClick(event: MouseEvent): void {
    if (!this.disabled) {
      this.click.emit(event);
    }
  }

  /**
   * Get CSS classes for the button
   * Combines variant, size, and custom classes
   */
  get buttonClasses(): string {
    const classes = [
      'bio-button',
      `bio-button--${this.variant}`,
      `bio-button--${this.size}`,
      this.disabled ? 'bio-button--disabled' : '',
      this.class || ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }
}

