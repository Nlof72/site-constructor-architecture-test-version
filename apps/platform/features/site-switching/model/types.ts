export interface SiteSwitchingState {
  currentSiteId?: string;
  isSwitching: boolean;
  error?: string;
}

export interface SiteSwitchingActions {
  switchToSite: (siteId: string) => Promise<void>;
  switchToHome: () => void;
}
