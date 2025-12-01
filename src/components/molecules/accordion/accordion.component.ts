import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Accordion Item Interface
 * 
 * Defines the structure of each accordion item:
 * - title: The header text displayed in the accordion header
 * - content: The content displayed when the accordion is expanded
 * - expanded: Whether this item is currently expanded (optional, can be controlled by parent)
 */
export interface AccordionItem {
  title: string;
  content: string | any; // Can be string or Angular template content
  expanded?: boolean;
}

/**
 * Accordion Component
 * 
 * A reusable accordion component following atomic design principles.
 * This is a "molecule" - composed of multiple accordion items.
 * 
 * Features:
 * - Multiple accordion items with expand/collapse functionality
 * - Flush variant (no borders between items) or default (with borders)
 * - Single or multiple expansion modes
 * - Uses design tokens for consistent styling
 * - Accessible with proper ARIA attributes
 * 
 * @example
 * ```html
 * <bio-accordion 
 *   [items]="accordionItems"
 *   [flush]="false"
 *   [allowMultiple]="false">
 * </bio-accordion>
 * ```
 */
@Component({
  selector: 'bio-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AccordionComponent {
  /**
   * Array of accordion items to display
   * Each item has a title and content
   */
  @Input() items: AccordionItem[] = [];

  /**
   * Whether to use flush variant (no borders between items)
   * @default false
   */
  @Input() flush: boolean = false;

  /**
   * Whether multiple items can be expanded at the same time
   * @default false (accordion behavior - only one open at a time)
   */
  @Input() allowMultiple: boolean = false;

  /**
   * Track which items are expanded
   * Uses Set for efficient lookups
   */
  private expandedItems = new Set<number>();

  /**
   * Toggle expansion state of an accordion item
   * 
   * If allowMultiple is false, closes other items when opening a new one
   * (standard accordion behavior)
   */
  toggleItem(index: number): void {
    if (this.isExpanded(index)) {
      this.expandedItems.delete(index);
    } else {
      // If not allowing multiple, close all other items
      if (!this.allowMultiple) {
        this.expandedItems.clear();
      }
      this.expandedItems.add(index);
    }
  }

  /**
   * Check if an item is expanded
   */
  isExpanded(index: number): boolean {
    // Check if explicitly set in item, otherwise check our internal state
    if (this.items[index]?.expanded !== undefined) {
      return this.items[index].expanded!;
    }
    return this.expandedItems.has(index);
  }

  /**
   * Get CSS classes for the accordion container
   */
  get accordionClasses(): string {
    return [
      'bio-accordion',
      this.flush ? 'bio-accordion--flush' : ''
    ].filter(Boolean).join(' ');
  }

  /**
   * Get CSS classes for an accordion item
   */
  getItemClasses(index: number): string {
    const isFirst = index === 0;
    const isLast = index === this.items.length - 1;
    const isExpanded = this.isExpanded(index);
    
    return [
      'bio-accordion-item',
      isFirst ? 'bio-accordion-item--first' : '',
      isLast ? 'bio-accordion-item--last' : '',
      isExpanded ? 'bio-accordion-item--expanded' : '',
      this.flush ? 'bio-accordion-item--flush' : ''
    ].filter(Boolean).join(' ');
  }

  /**
   * Get CSS classes for an accordion header
   */
  getHeaderClasses(index: number): string {
    const isExpanded = this.isExpanded(index);
    
    return [
      'bio-accordion-header',
      isExpanded ? 'bio-accordion-header--expanded' : ''
    ].filter(Boolean).join(' ');
  }
}

