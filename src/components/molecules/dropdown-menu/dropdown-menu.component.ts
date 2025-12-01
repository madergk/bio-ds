import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Dropdown Menu Item Interface
 */
export interface DropdownMenuItem {
  label: string;
  action?: () => void;
  disabled?: boolean;
  icon?: string;
}

/**
 * Dropdown Menu Arrow Position
 */
export type DropdownMenuArrow = 
  | 'no arrow' 
  | 'top left' 
  | 'top center' 
  | 'top right' 
  | 'bottom left' 
  | 'bottom center' 
  | 'bottom right'
  | 'left center'
  | 'right center';

/**
 * Dropdown Menu Component
 * 
 * A reusable dropdown menu component following atomic design principles.
 * This is a "molecule" - composed of multiple menu items.
 * 
 * Features:
 * - List of menu items
 * - Arrow positioning (top/bottom, left/center/right)
 * - Dark variant support
 * - Click handlers for items
 * - Disabled item support
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-dropdown-menu 
 *   [items]="menuItems"
 *   arrow="bottom left">
 * </bio-dropdown-menu>
 * ```
 */
@Component({
  selector: 'bio-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class DropdownMenuComponent {
  /**
   * Menu items to display
   */
  @Input() items: DropdownMenuItem[] = [];

  /**
   * Arrow position
   * @default 'no arrow'
   */
  @Input() arrow: DropdownMenuArrow = 'no arrow';

  /**
   * Dark variant
   * @default false
   */
  @Input() dark: boolean = false;

  /**
   * Item click event emitter
   */
  @Output() itemClick = new EventEmitter<DropdownMenuItem>();

  /**
   * Handle item click
   */
  onItemClick(item: DropdownMenuItem, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    
    if (item.disabled) {
      return;
    }
    
    // Emit the item click event
    this.itemClick.emit(item);
    
    // Also call the action if provided
    if (item.action) {
      item.action();
    }
  }

  /**
   * Get CSS classes for the menu container
   */
  get menuClasses(): string {
    return [
      'bio-dropdown-menu',
      this.dark ? 'bio-dropdown-menu--dark' : '',
      `bio-dropdown-menu--arrow-${this.arrow.replace(/\s+/g, '-')}`
    ].filter(Boolean).join(' ');
  }

  /**
   * Get CSS classes for a menu item
   */
  getItemClasses(item: DropdownMenuItem): string {
    return [
      'bio-dropdown-menu-item',
      item.disabled ? 'bio-dropdown-menu-item--disabled' : ''
    ].filter(Boolean).join(' ');
  }
}

