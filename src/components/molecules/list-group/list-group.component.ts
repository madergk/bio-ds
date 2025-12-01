import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * List Group Item Interface
 */
export interface ListGroupItem {
  label: string;
  action?: () => void;
  disabled?: boolean;
  active?: boolean;
}

/**
 * List Group Component
 * 
 * A reusable list group component following atomic design principles.
 * This is a "molecule" - composed of multiple list items.
 * 
 * Features:
 * - List of items
 * - Flush variant (no borders/rounded corners)
 * - Action support (clickable items)
 * - Active state
 * - Disabled state
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-list-group 
 *   [items]="listItems"
 *   [flush]="false"
 *   [action]="true">
 * </bio-list-group>
 * ```
 */
@Component({
  selector: 'bio-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ListGroupComponent {
  /**
   * List items to display
   */
  @Input() items: ListGroupItem[] = [];

  /**
   * Flush variant (no borders/rounded corners)
   * @default false
   */
  @Input() flush: boolean = false;

  /**
   * Whether items are clickable
   * @default false
   */
  @Input() action: boolean = false;

  /**
   * Item click event emitter
   */
  @Output() itemClick = new EventEmitter<ListGroupItem>();

  /**
   * Handle item click
   */
  onItemClick(item: ListGroupItem, event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    
    if (item.disabled || !this.action) {
      return;
    }
    
    this.itemClick.emit(item);
    
    if (item.action) {
      item.action();
    }
  }

  /**
   * Get CSS classes for the list group container
   */
  get listGroupClasses(): string {
    return [
      'bio-list-group',
      this.flush ? 'bio-list-group--flush' : ''
    ].filter(Boolean).join(' ');
  }

  /**
   * Get CSS classes for a list item
   */
  getItemClasses(item: ListGroupItem, isLast: boolean): string {
    return [
      'bio-list-group-item',
      this.flush ? 'bio-list-group-item--flush' : '',
      isLast ? 'bio-list-group-item--last' : '',
      item.active ? 'bio-list-group-item--active' : '',
      item.disabled ? 'bio-list-group-item--disabled' : '',
      this.action && !item.disabled ? 'bio-list-group-item--action' : ''
    ].filter(Boolean).join(' ');
  }
}

