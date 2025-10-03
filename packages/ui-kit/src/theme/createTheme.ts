import type { Theme } from './types';

export function createTheme(customTheme: Partial<Theme>): Theme {
  const defaultTheme: Theme = {
    colors: {
      primary: 'hsl(222, 47%, 11%)',
      primaryForeground: 'hsl(210, 40%, 98%)',
      secondary: 'hsl(210, 40%, 96%)',
      secondaryForeground: 'hsl(222, 47%, 11%)',
      accent: 'hsl(210, 40%, 96%)',
      accentForeground: 'hsl(222, 47%, 11%)',
      background: 'hsl(0, 0%, 100%)',
      foreground: 'hsl(222, 47%, 11%)',
      card: 'hsl(0, 0%, 100%)',
      cardForeground: 'hsl(222, 47%, 11%)',
      border: 'hsl(214, 32%, 91%)',
      input: 'hsl(214, 32%, 91%)',
      ring: 'hsl(222, 47%, 11%)',
      muted: 'hsl(210, 40%, 96%)',
      mutedForeground: 'hsl(215, 16%, 47%)',
      destructive: 'hsl(0, 84%, 60%)',
      destructiveForeground: 'hsl(210, 40%, 98%)',
    },
    typography: {
      fontFamily: {
        sans: 'Inter, system-ui, sans-serif',
        heading: 'Inter, system-ui, sans-serif',
        mono: 'monospace',
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '3rem',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
    },
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },
  };

  return {
    colors: { ...defaultTheme.colors, ...customTheme.colors },
    typography: { ...defaultTheme.typography, ...customTheme.typography },
    spacing: { ...defaultTheme.spacing, ...customTheme.spacing },
    borderRadius: { ...defaultTheme.borderRadius, ...customTheme.borderRadius },
    shadows: { ...defaultTheme.shadows, ...customTheme.shadows },
  };
}
