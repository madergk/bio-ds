import { Component, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';

/**
 * Button Group Direction
 * 
 * Controls the layout direction of buttons:
 * - horizontal: Buttons arranged in a row (default)
 * - vertical: Buttons arranged in a column
 */
export type ButtonGroupDirection = 'horizontal' | 'vertical';

/**
 * Button Group Component
 * 
 * A reusable button group component following atomic design principles.
 * This is a "molecule" - composed of multiple button atoms.
 * 
 * Features:
 * - Groups multiple buttons together
 * - Horizontal or vertical layout
 * - Outline variant support
 * - Size consistency across all buttons
 * - Connected borders (no gaps between buttons)
 * - Rounded corners only on outer edges
 * - Uses design tokens for consistent styling
 * 
 * @example
 * ```html
 * <bio-button-group 
 *   direction="horizontal"
 *   [outline]="false"
 *   size="md">
 *   <bio-button variant="primary">Button 1</bio-button>
 *   <bio-button variant="primary">Button 2</bio-button>
 *   <bio-button variant="primary">Button 3</bio-button>
 * </bio-button-group>
 * ```
 */
@Component({
  selector: 'bio-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ButtonGroupComponent implements AfterContentInit {
  /**
   * Layout direction of the button group
   * @default 'horizontal'
   */
  @Input() direction: ButtonGroupDirection = 'horizontal';

  /**
   * Whether buttons should use outline variant
   * When true, all buttons in the group will use outline style
   * @default false
   */
  @Input() outline: boolean = false;

  /**
   * Size of all buttons in the group
   * @default 'md'
   */
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Query all ButtonComponent children
   */
  @ContentChildren(ButtonComponent) buttons!: QueryList<ButtonComponent>;

  /**
   * After content initialization, apply group styling to buttons
   */
  ngAfterContentInit(): void {
    this.updateButtons();
    // Update buttons when they change
    this.buttons.changes.subscribe(() => {
      this.updateButtons();
    });
  }

  /**
   * Update all button children with group styling
   */
  private updateButtons(): void {
    if (!this.buttons) return;

    const buttonsArray = this.buttons.toArray();
    buttonsArray.forEach((button, index) => {
      // Apply outline variant if specified
      if (this.outline && button.variant !== 'outline') {
        // Store original variant and apply outline
        const originalVariant = button.variant;
        button.variant = 'outline';
      }

      // Apply size to all buttons
      button.size = this.size;

      // Add group-specific classes
      const isFirst = index === 0;
      const isLast = index === buttonsArray.length - 1;
      
      // Add group class to identify buttons in a group
      const existingClass = button.class || '';
      const groupClasses = [
        'bio-button-group-item',
        isFirst ? 'bio-button-group-item--first' : '',
        isLast ? 'bio-button-group-item--last' : '',
        this.direction === 'horizontal' ? 'bio-button-group-item--horizontal' : 'bio-button-group-item--vertical'
      ].filter(Boolean).join(' ');
      
      button.class = [existingClass, groupClasses].filter(Boolean).join(' ');
    });
  }

  /**
   * Get CSS classes for the button group container
   */
  get groupClasses(): string {
    return [
      'bio-button-group',
      `bio-button-group--${this.direction}`,
      this.outline ? 'bio-button-group--outline' : ''
    ].filter(Boolean).join(' ');
  }
}

