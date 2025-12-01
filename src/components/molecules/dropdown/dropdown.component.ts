import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownTriggerComponent, DropdownDirection } from '../dropdown-trigger/dropdown-trigger.component';
import { DropdownMenuComponent, DropdownMenuItem, DropdownMenuArrow } from '../dropdown-menu/dropdown-menu.component';
import { ButtonVariant, ButtonSize } from '../../atoms/button/button.component';

/**
 * Dropdown Component
 * 
 * A complete dropdown component that combines trigger and menu.
 * This is a "molecule" - composed of trigger and menu components.
 * 
 * Features:
 * - Combines dropdown trigger and menu
 * - Open/close state management
 * - Click outside to close
 * - Menu positioning
 * - Split button support
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-dropdown 
 *   label="Actions"
 *   [items]="menuItems"
 *   [splitButton]="true">
 * </bio-dropdown>
 * ```
 */
@Component({
  selector: 'bio-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  standalone: true,
  imports: [CommonModule, DropdownTriggerComponent, DropdownMenuComponent]
})
export class DropdownComponent {
  /**
   * Button label
   */
  @Input() label: string = 'Button Title';

  /**
   * Menu items
   */
  @Input() items: DropdownMenuItem[] = [];

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
   * Menu arrow position
   * @default 'no arrow'
   */
  @Input() arrow: DropdownMenuArrow = 'no arrow';

  /**
   * Dark variant
   * @default false
   */
  @Input() dark: boolean = false;

  /**
   * Whether dropdown is open
   */
  isOpen: boolean = false;

  /**
   * Item selected event
   */
  @Output() itemSelected = new EventEmitter<DropdownMenuItem>();

  /**
   * Toggle dropdown
   */
  toggleDropdown(event?: MouseEvent): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isOpen = !this.isOpen;
  }

  /**
   * Close dropdown
   */
  closeDropdown(): void {
    this.isOpen = false;
  }

  /**
   * Handle item click from menu
   */
  onItemClick(item: DropdownMenuItem): void {
    this.itemSelected.emit(item);
    this.closeDropdown();
  }

  /**
   * Handle click outside to close
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.bio-dropdown')) {
      this.closeDropdown();
    }
  }

  /**
   * Get menu arrow based on direction
   */
  get menuArrow(): DropdownMenuArrow {
    if (this.arrow !== 'no arrow') {
      return this.arrow;
    }
    
    // Auto-set arrow based on direction
    switch (this.direction) {
      case 'up':
        return 'bottom center';
      case 'down':
        return 'top center';
      case 'left':
        return 'right center';
      case 'right':
        return 'left center';
      default:
        return 'no arrow';
    }
  }
}

