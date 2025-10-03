import { SiteConfig } from '@platform/config';
import { Button } from '../../shared/ui/Button';
import { Header } from '../header';
import { Footer } from '../footer';

interface SaaSHeroProps {
  config: SiteConfig;
}

export function SaaSHero({ config }: SaaSHeroProps) {
  return (
    <div className="min-h-screen">
      <Header config={config} />

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6" 
               style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-primary)' }}>
            🚀 New: AI-powered features
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            All-in-One Platform for Modern Teams
          </h1>
          <p className="text-xl opacity-80 mb-8">
            Streamline your workflow with powerful tools designed for productivity.
            Everything you need in one place.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="primary" size="lg">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg">
              Watch Demo
            </Button>
          </div>
          <p className="text-sm opacity-60 mt-4">
            No credit card required · 14-day free trial
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="p-6 rounded-lg border">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                 style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
            <p className="opacity-70">
              Real-time insights and metrics to track your performance
            </p>
          </div>
          <div className="p-6 rounded-lg border">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                 style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Integrations</h3>
            <p className="opacity-70">
              Connect with 100+ tools you already use
            </p>
          </div>
          <div className="p-6 rounded-lg border">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                 style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Automation</h3>
            <p className="opacity-70">
              Automate repetitive tasks and save time
            </p>
          </div>
          <div className="p-6 rounded-lg border">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                 style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="opacity-70">
              Work together seamlessly with your team
            </p>
          </div>
          <div className="p-6 rounded-lg border">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                 style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="opacity-70">
              Bank-level security and compliance
            </p>
          </div>
          <div className="p-6 rounded-lg border">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                 style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Mobile Apps</h3>
            <p className="opacity-70">
              Access anywhere on iOS and Android
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg opacity-70">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-2">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="opacity-70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Up to 10 users</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Basic features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Email support</span>
                </li>
              </ul>
              <Button variant="outline" fullWidth>Get Started</Button>
            </div>
            
            <div className="rounded-2xl border-2 p-8 relative" style={{ borderColor: 'var(--color-primary)' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-semibold"
                   style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                Most Popular
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$99</span>
                <span className="opacity-70">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Unlimited users</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">All features</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Priority support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Advanced analytics</span>
                </li>
              </ul>
              <Button variant="primary" fullWidth>Get Started</Button>
            </div>
            
            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Dedicated support</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">Custom integrations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span className="text-sm">SLA guarantee</span>
                </li>
              </ul>
              <Button variant="outline" fullWidth>Contact Sales</Button>
            </div>
          </div>
        </div>
      </div>

      <Footer config={config} />
    </div>
  );
}
