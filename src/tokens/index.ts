/**
 * Bio Design System - Design Tokens
 * 
 * This file exports all design tokens for use in components.
 * Tokens are generated from tokens/tokens.json using Style Dictionary.
 * 
 * ## Usage in Components
 * 
 * ### CSS Variables (Recommended)
 * Use CSS variables directly in component stylesheets:
 * ```css
 * .my-component {
 *   background-color: var(--color-primary-500);
 *   padding: var(--spacing-md);
 *   border-radius: var(--border-radius-md);
 * }
 * ```
 * 
 * ### JSON Runtime Access
 * Import tokensJSON for programmatic access:
 * ```typescript
 * import { tokensJSON } from '@madergk/bio-ds';
 * 
 * const primaryColor = tokensJSON.color.primary[500].value;
 * console.log(primaryColor); // "#2196f3"
 * ```
 * 
 * ## Token Structure
 * 
 * Tokens are organized by category:
 * - `color`: Colors (primary, semantic, text, background, border, neutral, alert)
 * - `spacing`: Spacing values (0-8, xs-xxxl, base)
 * - `typography`: Font families, sizes, weights, line heights
 * - `border`: Border radius and width
 * - `shadow`: Box shadows
 * - `transition`: Transition durations and timing functions
 * - `zIndex`: Z-index values for layering
 * 
 * ## Bootstrap Alignment
 * 
 * Spacing tokens include both numeric (0-8) and semantic (xs-xxxl) values
 * to align with Bootstrap's spacing system while maintaining semantic naming.
 */

// JSON tokens (for runtime access)
import tokensJSON from './generated/tokens.json';

export { tokensJSON };

/**
 * Type-safe token accessor
 * Provides autocomplete and type safety when accessing tokens
 */
export type TokenValue = string | number;

/**
 * Get a token value by path
 * @example
 * getToken('color.primary.500') // Returns "#2196f3"
 */
export function getToken(path: string): TokenValue | undefined {
  const keys = path.split('.');
  let value: any = tokensJSON;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      return undefined;
    }
  }
  
  return value?.value ?? value;
}

/**
 * Token categories for easier discovery
 */
export const tokenCategories = {
  color: 'color',
  spacing: 'spacing',
  typography: 'typography',
  border: 'border',
  shadow: 'shadow',
  transition: 'transition',
  zIndex: 'zIndex'
} as const;
