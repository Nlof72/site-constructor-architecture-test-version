'use client';

import React, { createContext, useContext, useEffect } from 'react';
import type { Theme } from './types';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface ThemeContextValue {
  theme: DeepPartial<Theme>;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context.theme;
}

interface ThemeProviderProps {
  theme: DeepPartial<Theme>;
  children: React.ReactNode;
}

export function ThemeProvider({ theme, children }: ThemeProviderProps) {
  useEffect(() => {
    // Apply theme colors as CSS variables
    if (theme.colors) {
      const root = document.documentElement;
      
      Object.entries(theme.colors).forEach(([key, value]) => {
        const cssVarName = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        root.style.setProperty(cssVarName, value);
      });
    }

    // Apply typography
    if (theme.typography?.fontFamily) {
      const root = document.documentElement;
      
      if (theme.typography.fontFamily.sans) {
        root.style.setProperty('--font-sans', theme.typography.fontFamily.sans);
      }
      if (theme.typography.fontFamily.heading) {
        root.style.setProperty('--font-heading', theme.typography.fontFamily.heading);
      }
    }

    // Apply border radius
    if (theme.borderRadius) {
      const root = document.documentElement;
      
      Object.entries(theme.borderRadius).forEach(([key, value]) => {
        root.style.setProperty(`--radius-${key}`, value);
      });
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}