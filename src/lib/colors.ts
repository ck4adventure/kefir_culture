/**
 * Color Palette for Fermented With Love
 * Reference these colors in components to maintain consistency across logos, UI, and design
 */

export const COLORS = {
  // Neutrals
  milk: '#FAFAF7',
  milkDeep: '#F0F0E8',
  stone: '#6B6B63',
  pebble: '#A8A89E',
  chalk: '#E2E2DA',
  ink: '#1C1C18',

  // Brand - Moss (Primary)
  moss: '#4A7C59',
  mossLight: '#D4E8DB',

  // Brand - Fjord (Secondary)
  fjord: '#3D6B8E',
  fjordLight: '#D0E4F0',
} as const;

/**
 * Color palette for easy reference in design tools and documentation
 */
export const COLOR_PALETTE = {
  primary: {
    moss: COLORS.moss,
    mossLight: COLORS.mossLight,
  },
  secondary: {
    fjord: COLORS.fjord,
    fjordLight: COLORS.fjordLight,
  },
  neutral: {
    ink: COLORS.ink,
    stone: COLORS.stone,
    pebble: COLORS.pebble,
    chalk: COLORS.chalk,
    milk: COLORS.milk,
    milkDeep: COLORS.milkDeep,
  },
} as const;

// Type for color values (useful for TypeScript)
export type ColorKey = keyof typeof COLORS;
