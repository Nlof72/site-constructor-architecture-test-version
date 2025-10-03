import { SiteConfig } from '@platform/config';

export interface Site {
  id: string;
  name: string;
  description: string;
  url: string;
  color: string;
  config: SiteConfig;
}

export interface SiteSelection {
  sites: Site[];
  selectedSiteId?: string;
}
