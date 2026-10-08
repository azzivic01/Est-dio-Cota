/**
 * Design tokens for Estúdio Cota
 * Sincronizados com as variáveis CSS em src/index.css
 */

export const tokens = {
  colors: {
    bg: '#ECECE8',
    surface: '#FFFFFF',
    border: '#C9C9C3',
    text: '#111111',
    textMuted: '#55554F',
    accent: '#1D3FD9',
    accentInk: '#1D3FD9',
    onAccent: '#FFFFFF',
    deco1: '#1D3FD9',
    deco2: '#111111',
    deco3: '#C9C9C3',
  },
  fonts: {
    display: "'Archivo', -apple-system, BlinkMacSystemFont, sans-serif",
    body: "'Archivo', -apple-system, BlinkMacSystemFont, sans-serif",
    label: "'JetBrains Mono', monospace",
    mono: "'JetBrains Mono', monospace",
  },
  shape: {
    radius: '0px',
    radiusLg: '0px',
    borderWidth: '1px',
    shadowHard: 'none',
  },
  text: {
    labelTransform: 'uppercase',
    labelTracking: '0.08em',
    displayTransform: 'none',
  },
  motion: {
    durationFast: '150ms',
    durationBase: '300ms',
    durationSlow: '700ms',
    durationCinematic: '1000ms',
    durationFastSec: 0.15,
    durationBaseSec: 0.3,
    durationSlowSec: 0.7,
    durationCinematicSec: 1.0,
    easingBase: [0.4, 0, 0.2, 1] as const,
    easingCinematic: [0.16, 1, 0.3, 1] as const,
    staggerSec: 0.08,
  },
} as const;

export type Tokens = typeof tokens;
