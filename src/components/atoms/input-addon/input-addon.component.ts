import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Input Addon Type
 */
export type InputAddonType = 'text' | 'select-single' | 'icon';

/**
 * Input Addon Component
 * 
 * A component for adding prefixes or suffixes to inputs.
 * This is an "atom" - a basic building block for form inputs.
 * 
 * Features:
 * - Text addon
 * - Select addon
 * - Icon addon
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-input-addon type="text">ARS</bio-input-addon>
 * ```
 */
@Component({
  selector: 'bio-input-addon',
  templateUrl: './input-addon.component.html',
  styleUrls: ['./input-addon.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InputAddonComponent {
  /**
   * Addon type
   * @default 'text'
   */
  @Input() type: InputAddonType = 'text';

  /**
   * Addon content (text or icon)
   */
  @Input() content?: string;

  /**
   * Get CSS classes for addon
   */
  get addonClasses(): string {
    const classes = [
      'bio-input-addon',
      `bio-input-addon--${this.type}`
    ].filter(Boolean).join(' ');
    
    return classes;
  }
}

