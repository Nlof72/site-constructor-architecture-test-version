import type { Site } from '@/entities/site/model/types';

export interface SiteSelectionState {
  sites: Site[];
  selectedSiteId?: string;
  isLoading: boolean;
  error?: string;
}

export interface SiteSelectionActions {
  selectSite: (siteId: string) => void;
  loadSites: () => Promise<void>;
}
