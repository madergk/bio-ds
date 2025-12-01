import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Navbar Brand Type
 */
export type NavbarBrandType = 'text' | 'image' | 'image + text';

/**
 * Navbar Brand Component
 * 
 * A reusable navbar brand component following atomic design principles.
 * This is a sub-component of the Navbar molecule.
 * 
 * Features:
 * - Text only
 * - Image only
 * - Image + text
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-navbar-brand 
 *   type="image + text"
 *   [imageSrc]="logoUrl"
 *   text="Bootstrap">
 * </bio-navbar-brand>
 * ```
 */
@Component({
  selector: 'bio-navbar-brand',
  templateUrl: './navbar-brand.component.html',
  styleUrls: ['./navbar-brand.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarBrandComponent {
  /**
   * Brand type
   * @default 'text'
   */
  @Input() type: NavbarBrandType = 'text';

  /**
   * Brand text
   */
  @Input() text: string = 'Navbar';

  /**
   * Image source URL
   */
  @Input() imageSrc?: string;

  /**
   * Image alt text
   */
  @Input() imageAlt: string = 'Brand logo';
}

