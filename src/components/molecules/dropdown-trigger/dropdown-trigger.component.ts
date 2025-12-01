import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent, ButtonVariant, ButtonSize } from '../../atoms/button/button.component';

/**
 * Dropdown Direction
 */
export type DropdownDirection = 'up' | 'down' | 'left' | 'right';

/**
 * Dropdown Trigger Component
 * 
 * A reusable dropdown trigger component following atomic design principles.
 * This is a "molecule" - can be a simple button or a split button.
 * 
 * Features:
 * - Simple button trigger
 * - Split button (main button + dropdown toggle)
 * - Multiple directions (up, down, left, right)
 * - Size variants (sm, md, lg)
 * - Type variants (primary, secondary)
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-dropdown-trigger 
 *   label="Button Title"
 *   [splitButton]="true"
 *   direction="down">
 * </bio-dropdown-trigger>
 * ```
 */
@Component({
  selector: 'bio-dropdown-trigger',
  templateUrl: './dropdown-trigger.component.html',
  styleUrls: ['./dropdown-trigger.component.css'],
  standalone: true,
  imports: [CommonModule, ButtonComponent]
})
export class DropdownTriggerComponent {
  /**
   * Button label
   */
  @Input() label: string = 'Button Title';

  /**
   * Button variant
   * @default 'primary'
   */
  @Input() variant: ButtonVariant = 'primary';

  /**
   * Button size
   * @default 'md'
   */
  @Input() size: ButtonSize = 'md';

  /**
   * Whether to use split button
   * @default false
   */
  @Input() splitButton: boolean = false;

  /**
   * Dropdown direction
   * @default 'down'
   */
  @Input() direction: DropdownDirection = 'down';

  /**
   * Whether the dropdown is open
   * @default false
   */
  @Input() isOpen: boolean = false;

  /**
   * Click event emitter
   */
  @Output() click = new EventEmitter<MouseEvent>();

  /**
   * Toggle click event emitter (for split button)
   */
  @Output() toggleClick = new EventEmitter<MouseEvent>();

  /**
   * Handle main button click
   */
  onButtonClick(event: MouseEvent): void {
    if (!this.splitButton) {
      this.click.emit(event);
    } else {
      this.click.emit(event);
    }
  }

  /**
   * Handle toggle button click (split button only)
   */
  onToggleClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.toggleClick.emit(event);
  }

  /**
   * Get CSS classes for the trigger container
   */
  get triggerClasses(): string {
    return [
      'bio-dropdown-trigger',
      this.splitButton ? 'bio-dropdown-trigger--split' : ''
    ].filter(Boolean).join(' ');
  }

  /**
   * Get CSS classes for the toggle button (split button)
   */
  get toggleClasses(): string {
    return [
      'bio-dropdown-trigger__toggle',
      `bio-dropdown-trigger__toggle--${this.variant}`,
      `bio-dropdown-trigger__toggle--${this.size}`,
      this.isOpen ? 'bio-dropdown-trigger__toggle--open' : ''
    ].filter(Boolean).join(' ');
  }

  /**
   * Get chevron icon rotation based on direction
   */
  get chevronRotation(): string {
    switch (this.direction) {
      case 'up':
        return 'rotate(180deg)';
      case 'left':
        return 'rotate(90deg)';
      case 'right':
        return 'rotate(-90deg)';
      default:
        return 'rotate(0deg)';
    }
  }
}

