import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Input Affix Type
 */
export type InputAffixType = 'icon' | 'text';

/**
 * Input Affix Component
 * 
 * A component for adding prefixes or suffixes to inputs.
 * This is an "atom" - a basic building block for form inputs.
 * 
 * Features:
 * - Text affix
 * - Icon affix
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-input-affix type="text">.com</bio-input-affix>
 * ```
 */
@Component({
  selector: 'bio-input-affix',
  templateUrl: './input-affix.component.html',
  styleUrls: ['./input-affix.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InputAffixComponent {
  /**
   * Affix type
   * @default 'icon'
   */
  @Input() type: InputAffixType = 'icon';

  /**
   * Affix content (text or icon)
   */
  @Input() content?: string;

  /**
   * Get CSS classes for affix
   */
  get affixClasses(): string {
    const classes = [
      'bio-input-affix',
      `bio-input-affix--${this.type}`
    ].filter(Boolean).join(' ');
    
    return classes;
  }
}

