#!/usr/bin/env node

/**
 * Script to create a new site from template
 * Usage: npm run create-site -- --id=my-site --type=vpn --name="My VPN Service"
 */

const fs = require('fs').promises;
const path = require('path');

const BUSINESS_TYPES = ['vpn', 'gaming', 'marketplace', 'saas', 'digital-keys'];

const TEMPLATES = {
  vpn: {
    theme: {
      colors: {
        primary: '#0066FF',
        primaryForeground: '#FFFFFF',
        secondary: '#F0F4FF',
        accent: '#00C2FF',
        background: '#FFFFFF',
        foreground: '#1A1A1A',
      },
      typography: {
        fontFamily: {
          sans: 'Inter, sans-serif',
          heading: 'Manrope, sans-serif',
        },
      },
    },
    navigation: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'Features', href: '/features' },
      { label: 'Apps', href: '/apps' },
      { label: 'Support', href: '/support' },
    ],
    paymentMethods: ['card', 'paypal', 'crypto', 'google-pay', 'apple-pay'],
  },
  gaming: {
    theme: {
      colors: {
        primary: '#FF4655',
        primaryForeground: '#FFFFFF',
        secondary: '#2A2D35',
        accent: '#FFA726',
        background: '#1A1D24',
        foreground: '#FFFFFF',
      },
      typography: {
        fontFamily: {
          sans: 'Roboto, sans-serif',
          heading: 'Rajdhani, sans-serif',
        },
      },
    },
    navigation: [
      { label: 'Marketplace', href: '/marketplace' },
      { label: 'Inventory', href: '/inventory' },
      { label: 'Sell', href: '/sell' },
      { label: 'FAQ', href: '/faq' },
    ],
    paymentMethods: ['card', 'crypto', 'bank-transfer'],
  },
  saas: {
    theme: {
      colors: {
        primary: '#6366F1',
        primaryForeground: '#FFFFFF',
        secondary: '#F3F4F6',
        accent: '#8B5CF6',
        background: '#FFFFFF',
        foreground: '#111827',
      },
      typography: {
        fontFamily: {
          sans: 'Inter, sans-serif',
          heading: 'Plus Jakarta Sans, sans-serif',
        },
      },
    },
    navigation: [
      { label: 'Product', href: '/product' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Resources', href: '/resources' },
      { label: 'Enterprise', href: '/enterprise' },
    ],
    paymentMethods: ['card', 'paypal', 'bank-transfer'],
  },
};

async function parseArgs() {
  const args = process.argv.slice(2);
  const config = {};

  for (const arg of args) {
    const [key, value] = arg.replace('--', '').split('=');
    config[key] = value;
  }

  return config;
}

async function createSite(config) {
  const { id, type, name, domain } = config;

  if (!id || !type || !name) {
    console.error('❌ Missing required arguments: --id, --type, and --name are required');
    console.log('Usage: npm run create-site -- --id=my-site --type=vpn --name="My Site Name" --domain=mysite.com');
    process.exit(1);
  }

  if (!BUSINESS_TYPES.includes(type)) {
    console.error(`❌ Invalid business type: ${type}`);
    console.log(`Available types: ${BUSINESS_TYPES.join(', ')}`);
    process.exit(1);
  }

  const template = TEMPLATES[type] || TEMPLATES.saas;
  const configsDir = path.join(process.cwd(), 'configs', 'sites');
  const configPath = path.join(configsDir, `${id}.json`);

  // Check if site already exists
  try {
    await fs.access(configPath);
    console.error(`❌ Site with id "${id}" already exists at ${configPath}`);
    process.exit(1);
  } catch (error) {
    // File doesn't exist, proceed
  }

  const siteConfig = {
    siteId: id,
    siteName: name,
    domain: domain || `${id}.example.com`,
    businessType: type,
    theme: template.theme,
    seo: {
      title: name,
      description: `${name} - Premium ${type} service`,
      keywords: [type, name.toLowerCase()],
      ogImage: `/images/og-${id}.jpg`,
      favicon: `/favicon-${id}.ico`,
    },
    features: {
      enableBlog: true,
      enableChat: true,
      enableReviews: true,
      enableNewsletter: true,
      enableAnalytics: true,
      enableABTesting: false,
    },
    navigation: template.navigation,
    paymentMethods: template.paymentMethods,
    localization: {
      defaultLocale: 'en',
      supportedLocales: ['en', 'ru'],
      currency: 'USD',
    },
    api: {
      baseUrl: `https://api.${domain || `${id}.example.com`}`,
      endpoints: {
        auth: '/v1/auth',
        user: '/v1/user',
      },
    },
    analytics: {
      googleAnalytics: '',
    },
    social: {
      telegram: '',
      twitter: '',
    },
  };

  // Ensure configs directory exists
  await fs.mkdir(configsDir, { recursive: true });

  // Write configuration file
  await fs.writeFile(configPath, JSON.stringify(siteConfig, null, 2), 'utf-8');

  console.log('✅ Site created successfully!');
  console.log(`📁 Configuration: ${configPath}`);
  console.log(`🌐 Domain: ${siteConfig.domain}`);
  console.log(`🎨 Business Type: ${type}`);
  console.log('');
  console.log('Next steps:');
  console.log(`1. Review and update the configuration at ${configPath}`);
  console.log(`2. Set SITE_ID environment variable: export SITE_ID=${id}`);
  console.log('3. Run: npm run dev');
}

parseArgs().then(createSite).catch(console.error);
