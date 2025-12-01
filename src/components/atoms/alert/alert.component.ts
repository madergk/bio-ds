import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Alert Variants
 * 
 * Defines the visual style and semantic meaning of the alert:
 * - primary: Primary information (blue)
 * - secondary: Secondary information (gray)
 * - success: Success message (green)
 * - danger: Error or destructive message (red/pink)
 * - warning: Warning message (yellow)
 * - info: Informational message (cyan)
 * - light: Light background with border (white/gray)
 * - dark: Dark background (dark gray)
 */
export type AlertVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';

/**
 * Alert Component
 * 
 * A reusable alert component following atomic design principles.
 * This is an "atom" - a basic building block of the design system.
 * 
 * Features:
 * - Multiple variants (primary, secondary, success, danger, warning, info, light, dark)
 * - Optional icon
 * - Optional dismissible (close button)
 * - Simple or additional content (with heading and divider)
 * - Uses design tokens for consistent styling
 * - Accessible with proper ARIA attributes
 * 
 * @example
 * ```html
 * <bio-alert 
 *   variant="success"
 *   [dismissible]="true"
 *   [showIcon]="true"
 *   heading="Well done!"
 *   message="Your action was successful."
 *   (dismiss)="onDismiss()">
 * </bio-alert>
 * ```
 */
@Component({
  selector: 'bio-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class AlertComponent {
  /**
   * Visual variant of the alert
   * @default 'primary'
   */
  @Input() variant: AlertVariant = 'primary';

  /**
   * Alert message text
   * Required for simple alerts
   */
  @Input() message?: string;

  /**
   * Alert heading/title
   * When provided, shows additional content layout with heading
   */
  @Input() heading?: string;

  /**
   * Additional text content
   * Shown below a divider when heading is provided
   */
  @Input() additionalText?: string;

  /**
   * Whether to show an icon
   * @default false
   */
  @Input() showIcon: boolean = false;

  /**
   * Whether the alert can be dismissed (shows close button)
   * @default false
   */
  @Input() dismissible: boolean = false;

  /**
   * Whether the alert is visible
   * Used internally when dismissed
   */
  visible: boolean = true;

  /**
   * Dismiss event emitter
   * Emits when alert is closed
   */
  @Output() dismiss = new EventEmitter<void>();

  /**
   * Handle dismiss action
   * Hides the alert and emits dismiss event
   */
  onDismiss(): void {
    this.visible = false;
    this.dismiss.emit();
  }

  /**
   * Check if alert has additional content
   * (heading and/or additional text)
   */
  get hasAdditionalContent(): boolean {
    return !!(this.heading || this.additionalText);
  }

  /**
   * Get CSS classes for the alert container
   */
  get alertClasses(): string {
    return [
      'bio-alert',
      `bio-alert--${this.variant}`,
      this.dismissible ? 'bio-alert--dismissible' : ''
    ].filter(Boolean).join(' ');
  }
}

