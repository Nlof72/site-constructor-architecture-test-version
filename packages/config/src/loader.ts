import { SiteConfig, SiteConfigSchema } from './schema';

/**
 * Load and validate site configuration
 */
export function loadSiteConfig(config: unknown): SiteConfig {
  const result = SiteConfigSchema.safeParse(config);
  
  if (!result.success) {
    console.error('Site configuration validation failed:', result.error);
    throw new Error('Invalid site configuration');
  }
  
  return result.data;
}

/**
 * Get configuration by site ID from environment or file
 */
export function getSiteConfigById(siteId: string): SiteConfig | null {
  // In production, this would load from database or config service
  // For now, we'll return null and handle it in the app
  return null;
}
