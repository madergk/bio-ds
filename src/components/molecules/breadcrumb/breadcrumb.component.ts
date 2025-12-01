import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Breadcrumb Item Interface
 * 
 * Defines the structure of each breadcrumb item:
 * - label: The text displayed for the breadcrumb item
 * - url: Optional URL for navigation (if not provided, item is treated as current)
 * - icon: Optional icon name (e.g., 'home')
 */
export interface BreadcrumbItem {
  label: string;
  url?: string;
  icon?: string;
}

/**
 * Breadcrumb Separator Type
 * 
 * Defines the separator style between breadcrumb items:
 * - 'text': Text separator ("/" or ">")
 * - 'icon': Icon separator (chevron/arrow icon)
 */
export type BreadcrumbSeparator = 'text' | 'icon';

/**
 * Breadcrumb Component
 * 
 * A reusable breadcrumb component following atomic design principles.
 * This is a "molecule" - composed of multiple breadcrumb items.
 * 
 * Features:
 * - Multiple breadcrumb items
 * - Different separator types (text or icon)
 * - Optional icons for items
 * - Current page indication (last item)
 * - Uses design tokens for consistent styling
 * - Accessible with proper ARIA attributes
 * 
 * @example
 * ```html
 * <bio-breadcrumb 
 *   [items]="breadcrumbItems"
 *   separator="text"
 *   separatorText="/">
 * </bio-breadcrumb>
 * ```
 */
@Component({
  selector: 'bio-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class BreadcrumbComponent {
  /**
   * Array of breadcrumb items to display
   */
  @Input() items: BreadcrumbItem[] = [];

  /**
   * Separator type between items
   * @default 'text'
   */
  @Input() separator: BreadcrumbSeparator = 'text';

  /**
   * Separator text (only used when separator is 'text')
   * Common values: "/", ">", "›"
   * @default '/'
   */
  @Input() separatorText: string = '/';

  /**
   * Check if an item is the current/last item
   */
  isCurrentItem(index: number): boolean {
    return index === this.items.length - 1;
  }

  /**
   * Check if an item should be a link
   * (has URL and is not the current item)
   */
  isLink(index: number): boolean {
    const item = this.items[index];
    return !!(item?.url && !this.isCurrentItem(index));
  }

  /**
   * Get CSS classes for a breadcrumb item
   */
  getItemClasses(index: number): string {
    const isCurrent = this.isCurrentItem(index);
    return [
      'bio-breadcrumb-item',
      isCurrent ? 'bio-breadcrumb-item--current' : ''
    ].filter(Boolean).join(' ');
  }
}

