/**
 * Get the correct subdomain URL based on the current environment
 */
export function getSubdomainUrl(subdomain: string): string {
  // In development, use localhost with port
  if (process.env.NODE_ENV === 'development') {
    return `http://${subdomain}.localhost:3000`;
  }
  
  // In production, use Vercel domain with subdomain
  const baseDomain = 'site-constructor-architecture.vercel.app';
  return `https://${subdomain}.${baseDomain}`;
}

/**
 * Get all site URLs for the current environment
 */
export function getSiteUrls() {
  return {
    vpn: getSubdomainUrl('vpn'),
    saas: getSubdomainUrl('saas'),
    gaming: getSubdomainUrl('gaming')
  };
}
