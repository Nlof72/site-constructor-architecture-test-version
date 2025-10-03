import { SiteSelector } from '../../widgets/site-selector';
import type { Site } from '@/entities/site/model/types';

interface HomePageProps {
  searchParams: Promise<{ site?: string; site_id?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  
  // Check if we have a site_id from middleware (subdomain detection)
  const siteIdFromMiddleware = params.site_id;
  
  // If no site parameter and no subdomain, show site selector
  if (!params.site && !siteIdFromMiddleware) {
    const sites: Site[] = [
      {
        id: 'vpn-service-01',
        name: 'VPN Service',
        description: 'SecureVPN Pro - Fast & Secure VPN Service',
        url: '/?site=vpn',
        color: 'bg-blue-500',
        config: {} as any // Will be loaded when site is selected
      },
      {
        id: 'saas-tools-01', 
        name: 'SaaS Tools',
        description: 'WebTools Pro - Professional Web Development Tools',
        url: '/?site=saas',
        color: 'bg-purple-500',
        config: {} as any
      },
      {
        id: 'cs2-skins-01',
        name: 'CS2 Skins',
        description: 'CS2 Skins Market - Trade and Buy CS2 Skins',
        url: '/?site=gaming',
        color: 'bg-red-500',
        config: {} as any
      }
    ];

    return <SiteSelector sites={sites} />;
  }

  // Override SITE_ID based on query parameter or subdomain
  if (params.site) {
    process.env.SITE_ID = params.site === 'vpn' ? 'vpn-service-01' :
                         params.site === 'saas' ? 'saas-tools-01' :
                         params.site === 'gaming' ? 'cs2-skins-01' :
                         process.env.SITE_ID;
  } else if (siteIdFromMiddleware) {
    process.env.SITE_ID = siteIdFromMiddleware;
  }

  // This will be handled by the site page
  return null;
}
