import { z } from 'zod';

// Theme configuration schema
export const ThemeConfigSchema = z.object({
  colors: z.object({
    primary: z.string(),
    primaryForeground: z.string().optional(),
    secondary: z.string().optional(),
    secondaryForeground: z.string().optional(),
    accent: z.string().optional(),
    background: z.string().optional(),
    foreground: z.string().optional(),
  }),
  typography: z.object({
    fontFamily: z.object({
      sans: z.string().optional(),
      heading: z.string().optional(),
    }).optional(),
    fontSize: z.record(z.string()).optional(),
  }).optional(),
  borderRadius: z.object({
    sm: z.string().optional(),
    md: z.string().optional(),
    lg: z.string().optional(),
  }).optional(),
});

// SEO configuration schema
export const SEOConfigSchema = z.object({
  title: z.string(),
  description: z.string(),
  keywords: z.array(z.string()).optional(),
  ogImage: z.string().optional(),
  favicon: z.string().optional(),
  manifest: z.string().optional(),
});

// Feature flags schema
export const FeatureFlagsSchema = z.object({
  enableBlog: z.boolean().default(false),
  enableChat: z.boolean().default(false),
  enableReviews: z.boolean().default(true),
  enableNewsletter: z.boolean().default(true),
  enableAnalytics: z.boolean().default(true),
  enableABTesting: z.boolean().default(false),
});

// Navigation schema
export const NavigationSchema = z.array(z.object({
  label: z.string(),
  href: z.string(),
  icon: z.string().optional(),
  children: z.array(z.object({
    label: z.string(),
    href: z.string(),
    description: z.string().optional(),
  })).optional(),
}));

// Payment methods schema
export const PaymentMethodsSchema = z.array(z.enum([
  'card',
  'paypal',
  'crypto',
  'google-pay',
  'apple-pay',
  'bank-transfer',
]));

// Localization schema
export const LocalizationSchema = z.object({
  defaultLocale: z.string(),
  supportedLocales: z.array(z.string()),
  currency: z.string(),
  timezone: z.string().optional(),
});

// Main site configuration schema
export const SiteConfigSchema = z.object({
  // Basic info
  siteId: z.string(),
  siteName: z.string(),
  domain: z.string(),
  businessType: z.enum(['vpn', 'gaming', 'marketplace', 'saas', 'digital-keys']),
  
  // Theme
  theme: ThemeConfigSchema,
  
  // SEO
  seo: SEOConfigSchema,
  
  // Features
  features: FeatureFlagsSchema,
  
  // Navigation
  navigation: NavigationSchema,
  
  // Payment
  paymentMethods: PaymentMethodsSchema,
  
  // Localization
  localization: LocalizationSchema,
  
  // API endpoints
  api: z.object({
    baseUrl: z.string(),
    endpoints: z.record(z.string()),
  }),
  
  // Analytics
  analytics: z.object({
    googleAnalytics: z.string().optional(),
    yandexMetrika: z.string().optional(),
    facebookPixel: z.string().optional(),
  }).optional(),
  
  // Social links
  social: z.object({
    telegram: z.string().optional(),
    twitter: z.string().optional(),
    discord: z.string().optional(),
    instagram: z.string().optional(),
  }).optional(),
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;
export type ThemeConfig = z.infer<typeof ThemeConfigSchema>;
export type SEOConfig = z.infer<typeof SEOConfigSchema>;
export type FeatureFlags = z.infer<typeof FeatureFlagsSchema>;
