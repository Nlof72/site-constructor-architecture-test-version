import { SiteConfig } from '@platform/config';
import { Button } from '../../shared/ui/Button';
import { Header } from '../header';
import { Footer } from '../footer';

interface GamingHeroProps {
  config: SiteConfig;
}

export function GamingHero({ config }: GamingHeroProps) {
  return (
    <div className="min-h-screen">
      <Header config={config} />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Buy & Sell CS2 Skins
          </h1>
          <p className="text-xl opacity-80">
            The best marketplace for Counter-Strike 2 skins. Instant trades, secure transactions.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Browse Marketplace
            </Button>
            <Button variant="outline" size="lg">
              Sell Your Items
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 rounded-lg border">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              10M+
            </div>
            <div className="text-sm opacity-70 mt-2">Active Users</div>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              50K+
            </div>
            <div className="text-sm opacity-70 mt-2">Items Listed</div>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              $100M+
            </div>
            <div className="text-sm opacity-70 mt-2">Trading Volume</div>
          </div>
          <div className="text-center p-6 rounded-lg border">
            <div className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              24/7
            </div>
            <div className="text-sm opacity-70 mt-2">Support</div>
          </div>
        </div>

        {/* Featured Items */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="rounded-lg border overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-1">AK-47 | Redline</h3>
                  <p className="text-sm opacity-70 mb-3">Field-Tested</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold" style={{ color: 'var(--color-primary)' }}>
                      $45.99
                    </span>
                    <Button variant="primary" size="sm">Buy</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Instant Trading</h3>
            <p className="opacity-70">
              Trade items instantly with our automated system
            </p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="opacity-70">
              All trades are protected and verified
            </p>
          </div>
          <div className="text-center p-8">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="opacity-70">
              Competitive pricing with low fees
            </p>
          </div>
        </div>
      </div>

      <Footer config={config} />
    </div>
  );
}
