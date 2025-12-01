import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Input Separator Type
 */
export type InputSeparatorType = 'picker-separator' | 'input-split';

/**
 * Input Separator Component
 * 
 * A component for separating input elements.
 * This is an "atom" - a basic building block for form inputs.
 * 
 * Features:
 * - Picker separator (arrow icon)
 * - Input split (text separator)
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-input-separator type="picker-separator"></bio-input-separator>
 * ```
 */
@Component({
  selector: 'bio-input-separator',
  templateUrl: './input-separator.component.html',
  styleUrls: ['./input-separator.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class InputSeparatorComponent {
  /**
   * Separator type
   * @default 'picker-separator'
   */
  @Input() type: InputSeparatorType = 'picker-separator';

  /**
   * Get CSS classes for separator
   */
  get separatorClasses(): string {
    const classes = [
      'bio-input-separator',
      `bio-input-separator--${this.type}`
    ].filter(Boolean).join(' ');
    
    return classes;
  }
}

