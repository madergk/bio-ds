import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Pagination Size
 */
export type PaginationSize = 'small' | 'medium' | 'large';

/**
 * Pagination Component
 * 
 * A reusable pagination component following atomic design principles.
 * This is a "molecule" - composed of multiple pagination items.
 * 
 * Features:
 * - Page navigation (prev/next)
 * - Page numbers
 * - Ellipsis for large page counts
 * - Active page highlighting
 * - Size variants
 * - Optional total text and quick jumper
 * 
 * @example
 * ```html
 * <bio-pagination 
 *   [currentPage]="1"
 *   [totalPages]="10"
 *   [totalItems]="85"
 *   size="medium"
 *   (pageChange)="onPageChange($event)">
 * </bio-pagination>
 * ```
 */
@Component({
  selector: 'bio-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PaginationComponent {
  /**
   * Current page number (1-based)
   */
  @Input() currentPage: number = 1;

  /**
   * Total number of pages
   */
  @Input() totalPages: number = 10;

  /**
   * Total number of items
   */
  @Input() totalItems?: number;

  /**
   * Size variant
   * @default 'medium'
   */
  @Input() size: PaginationSize = 'medium';

  /**
   * Show options (page size selector and quick jumper)
   * @default true
   */
  @Input() options: boolean = true;

  /**
   * Show total text
   * @default true
   */
  @Input() totalText: boolean = true;

  /**
   * Page change event emitter
   */
  @Output() pageChange = new EventEmitter<number>();

  /**
   * Get visible page numbers
   */
  get visiblePages(): (number | 'ellipsis')[] {
    const pages: (number | 'ellipsis')[] = [];
    const maxVisible = 5;
    
    if (this.totalPages <= maxVisible) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = this.totalPages - 3; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(this.totalPages);
      }
    }
    
    return pages;
  }

  /**
   * Handle page click
   */
  onPageClick(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

  /**
   * Handle previous click
   */
  onPrevious(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  /**
   * Handle next click
   */
  onNext(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  /**
   * Check if previous is disabled
   */
  get isPreviousDisabled(): boolean {
    return this.currentPage <= 1;
  }

  /**
   * Check if next is disabled
   */
  get isNextDisabled(): boolean {
    return this.currentPage >= this.totalPages;
  }

  /**
   * Get CSS classes for pagination container
   */
  get paginationClasses(): string {
    return [
      'bio-pagination',
      `bio-pagination--${this.size}`
    ].filter(Boolean).join(' ');
  }
}

