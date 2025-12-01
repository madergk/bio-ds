import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Navbar Toggler Component
 * 
 * A reusable navbar toggler (hamburger menu) component.
 * This is a sub-component of the Navbar molecule.
 * 
 * Features:
 * - Dark variant
 * - Focused state
 * - Click handler
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-navbar-toggler 
 *   [dark]="false"
 *   [focused]="false"
 *   (click)="toggleMenu()">
 * </bio-navbar-toggler>
 * ```
 */
@Component({
  selector: 'bio-navbar-toggler',
  templateUrl: './navbar-toggler.component.html',
  styleUrls: ['./navbar-toggler.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class NavbarTogglerComponent {
  /**
   * Dark variant
   * @default false
   */
  @Input() dark: boolean = false;

  /**
   * Focused state
   * @default false
   */
  @Input() focused: boolean = false;

  /**
   * Click event emitter
   */
  @Output() click = new EventEmitter<MouseEvent>();

  /**
   * Handle click
   */
  onClick(event: MouseEvent): void {
    this.click.emit(event);
  }

  /**
   * Get CSS classes for the toggler
   */
  get togglerClasses(): string {
    return [
      'bio-navbar-toggler',
      this.dark ? 'bio-navbar-toggler--dark' : '',
      this.focused ? 'bio-navbar-toggler--focused' : ''
    ].filter(Boolean).join(' ');
  }
}

