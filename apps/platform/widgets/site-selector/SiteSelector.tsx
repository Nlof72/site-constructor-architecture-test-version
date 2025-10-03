import Link from 'next/link';
import type { Site } from '@/entities/site/model/types';

interface SiteSelectorProps {
  sites: Site[];
}

export function SiteSelector({ sites }: SiteSelectorProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Multi-Site Platform
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Choose a site to view different business configurations
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {sites.map((site) => (
            <Link
              key={site.id}
              href={site.url}
              className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <div className={`w-12 h-12 ${site.color} rounded-lg mb-4`}></div>
              <h3 className="text-xl font-semibold mb-2">{site.name}</h3>
              <p className="text-gray-600">{site.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
