import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarBrandComponent } from './navbar-brand/navbar-brand.component';
import { NavbarTogglerComponent } from './navbar-toggler/navbar-toggler.component';
import { NavbarCollapseComponent } from './navbar-collapse/navbar-collapse.component';

/**
 * Navbar Color Scheme
 */
export type NavbarColorScheme = 'default' | 'light' | 'dark';

/**
 * Navbar Component
 * 
 * A reusable navbar component following atomic design principles.
 * This is a "molecule" - composed of brand, toggler, and collapse components.
 * 
 * Features:
 * - Brand/logo support
 * - Responsive toggler
 * - Collapsible menu
 * - Color schemes (default, light, dark)
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-navbar 
 *   brandText="Bootstrap"
 *   [colorScheme]="'default'"
 *   [isExpanded]="menuOpen"
 *   (toggle)="menuOpen = !menuOpen">
 *   <ul>
 *     <li>Home</li>
 *     <li>About</li>
 *   </ul>
 * </bio-navbar>
 * ```
 */
@Component({
  selector: 'bio-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [CommonModule, NavbarBrandComponent, NavbarTogglerComponent, NavbarCollapseComponent]
})
export class NavbarComponent {
  /**
   * Brand text
   */
  @Input() brandText: string = 'Navbar';

  /**
   * Brand image source
   */
  @Input() brandImage?: string;

  /**
   * Brand type
   */
  @Input() brandType: 'text' | 'image' | 'image + text' = 'text';

  /**
   * Color scheme
   * @default 'default'
   */
  @Input() colorScheme: NavbarColorScheme = 'default';

  /**
   * Whether navbar is expanded (mobile menu open)
   */
  @Input() isExpanded: boolean = false;

  /**
   * Toggle event emitter
   */
  @Output() toggle = new EventEmitter<void>();

  /**
   * Handle toggler click
   */
  onToggle(): void {
    this.toggle.emit();
  }

  /**
   * Get CSS classes for the navbar container
   */
  get navbarClasses(): string {
    return [
      'bio-navbar',
      `bio-navbar--${this.colorScheme}`,
      this.isExpanded ? 'bio-navbar--expanded' : ''
    ].filter(Boolean).join(' ');
  }
}

