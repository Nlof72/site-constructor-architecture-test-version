export interface Theme {
  colors?: {
    primary?: string;
    secondary?: string;
    background?: string;
    foreground?: string;
  };
  fonts?: {
    heading?: string;
    body?: string;
  };
}

export interface ThemeState {
  currentTheme: Theme;
  isDarkMode: boolean;
}
