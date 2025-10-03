import { getSiteConfig } from '../../shared/lib/config';
import { VPNHero, GamingHero, SaaSHero } from '../../widgets/hero';
import Link from 'next/link';

interface SitePageProps {
  searchParams: Promise<{ site?: string; site_id?: string }>;
}

export default async function SitePage({ searchParams }: SitePageProps) {
  const params = await searchParams;
  
  // Override SITE_ID based on query parameter or subdomain
  if (params.site) {
    process.env.SITE_ID = params.site === 'vpn' ? 'vpn-service-01' :
                         params.site === 'saas' ? 'saas-tools-01' :
                         params.site === 'gaming' ? 'cs2-skins-01' :
                         process.env.SITE_ID;
  } else if (params.site_id) {
    process.env.SITE_ID = params.site_id;
  }

  const config = await getSiteConfig();

  return (
    <main className="min-h-screen">
      {/* Site switcher */}
      <div className="fixed top-4 right-4 z-50">
        <Link 
          href="/"
          className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-medium hover:bg-white transition-colors"
        >
          Back to Sites
        </Link>
      </div>

      {config.businessType === 'vpn' && <VPNHero config={config} />}
      {config.businessType === 'gaming' && <GamingHero config={config} />}
      {config.businessType === 'saas' && <SaaSHero config={config} />}
    </main>
  );
}
