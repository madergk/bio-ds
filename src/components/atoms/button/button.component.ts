import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Button Variants
 * 
 * Defines the visual style of the button:
 * - default: Default button (gray/neutral colors) - from Figma
 * - primary: Main action button (uses primary color #e20039)
 * - secondary: Secondary action (uses neutral/gray colors)
 * - outline: Outlined style with transparent background
 * - dashed: Dashed border style with transparent background
 * - text: Text-only button, no background
 * - link: Link style button (underlined text)
 * - danger: Destructive action (uses error/semantic color)
 */
export type ButtonVariant = 'default' | 'primary' | 'secondary' | 'outline' | 'dashed' | 'text' | 'link' | 'danger';

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
  standalone: true,
  imports: [CommonModule]
})
export class ButtonComponent {
  /**
   * Button text content
   * Can also use content projection with <ng-content>
   */
  @Input() label?: string;

  /**
   * Visual variant of the button
   * @default 'default'
   */
  @Input() variant: ButtonVariant = 'default';

  /**
   * Color theme for outline, dashed, text, and link variants
   * When 'primary', uses primary color (#e20039)
   * When 'default' or undefined, uses neutral/gray colors
   * Only applies to outline, dashed, text, and link variants
   */
  @Input() color?: 'default' | 'primary' = 'default';

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
   * Prefix icon (icon before text)
   * Can be SVG string, icon name, or HTML content
   */
  @Input() prefixIcon?: string;

  /**
   * Suffix icon (icon after text)
   * Can be SVG string, icon name, or HTML content
   */
  @Input() suffixIcon?: string;

  /**
   * Whether to show only icon (no text)
   * When true, label is hidden and button becomes square
   */
  @Input() iconOnly: boolean = false;

  /**
   * Loading state
   * When true, shows spinner and disables button
   */
  @Input() loading: boolean = false;

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
   * Combines variant, size, loading, color theme, and custom classes
   */
  get buttonClasses(): string {
    const classes = [
      'bio-button',
      `bio-button--${this.variant}`,
      `bio-button--${this.size}`,
      // Add color modifier for outline, dashed, text, link variants
      (this.variant === 'outline' || this.variant === 'dashed' || 
       this.variant === 'text' || this.variant === 'link') && this.color === 'primary' 
        ? 'bio-button--primary-color' : '',
      this.disabled || this.loading ? 'bio-button--disabled' : '',
      this.loading ? 'bio-button--loading' : '',
      this.iconOnly ? 'bio-button--icon-only' : '',
      this.class || ''
    ].filter(Boolean).join(' ');
    
    return classes;
  }

  /**
   * Check if button should be disabled
   * Disabled when explicitly disabled or loading
   */
  get isDisabled(): boolean {
    return this.disabled || this.loading;
  }

  /**
   * Get Material Symbols icon HTML
   * Material Symbols is the newer, recommended icon library from Google
   * 
   * @param name - Icon name (e.g., 'add', 'delete', 'edit')
   * @param style - Icon style: 'outlined' (default) or 'rounded'
   * @param size - Icon size in pixels (default: 16)
   * @param fill - Whether icon should be filled (0 or 1, default: 0)
   * @returns HTML string for the Material Symbol icon
   * 
   * @example
   * ```typescript
   * prefixIcon = this.getMaterialSymbol('add', 'rounded', 20, 0);
   * ```
   */
  getMaterialSymbol(
    name: string,
    style: 'outlined' | 'rounded' = 'outlined',
    size: number = 16,
    fill: 0 | 1 = 0
  ): string {
    const fontClass = style === 'rounded' 
      ? 'material-symbols-rounded' 
      : 'material-symbols-outlined';
    
    return `<span class="${fontClass}" style="font-size: ${size}px; width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center; font-variation-settings: 'FILL' ${fill}, 'wght' 400, 'GRAD' 0, 'opsz' 24;">${name}</span>`;
  }

  /**
   * Get Material Icons icon HTML (legacy support)
   * 
   * @param name - Icon name (e.g., 'add', 'delete', 'edit')
   * @param size - Icon size in pixels (default: 16)
   * @returns HTML string for the Material Icon
   * 
   * @example
   * ```typescript
   * prefixIcon = this.getMaterialIcon('add', 20);
   * ```
   */
  getMaterialIcon(name: string, size: number = 16): string {
    return `<i class="material-icons" style="font-size: ${size}px; width: ${size}px; height: ${size}px; display: inline-flex; align-items: center; justify-content: center;">${name}</i>`;
  }
}

