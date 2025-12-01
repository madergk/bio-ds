import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Navbar Collapse Component
 * 
 * A reusable navbar collapse component for collapsible menu content.
 * This is a sub-component of the Navbar molecule.
 * 
 * Features:
 * - Responsive support
 * - Fixed height option
 * - Expand/collapse animation
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-navbar-collapse 
 *   [isExpanded]="menuOpen"
 *   [responsive]="true"
 *   [fixedHeight]="false">
 *   <ul>
 *     <li>Menu Item 1</li>
 *   </ul>
 * </bio-navbar-collapse>
 * ```
 */
@Component({
  selector: 'bio-navbar-collapse',
  templateUrl: './navbar-collapse.component.html',
  styleUrls: ['./navbar-collapse.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarCollapseComponent {
  /**
   * Whether collapse is expanded
   */
  @Input() isExpanded: boolean = false;

  /**
   * Responsive mode
   * @default false
   */
  @Input() responsive: boolean = false;

  /**
   * Fixed height
   * @default false
   */
  @Input() fixedHeight: boolean = false;

  /**
   * Get CSS classes for the collapse container
   */
  get collapseClasses(): string {
    return [
      'bio-navbar-collapse',
      this.isExpanded ? 'bio-navbar-collapse--expanded' : '',
      this.responsive ? 'bio-navbar-collapse--responsive' : '',
      this.fixedHeight ? 'bio-navbar-collapse--fixed-height' : ''
    ].filter(Boolean).join(' ');
  }
}

