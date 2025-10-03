import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { getSiteConfig } from '@/shared/lib/config';
import { ThemeProvider } from '@platform/ui-kit';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata(): Promise<Metadata> {
  // Only load site config if SITE_ID is set
  if (!process.env.SITE_ID && !process.env.NEXT_PUBLIC_SITE_ID) {
    return {
      title: 'Multi-Site Platform',
      description: 'Choose a site to view different business configurations',
    };
  }

  try {
    const siteConfig = await getSiteConfig();

    return {
      metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      keywords: siteConfig.seo.keywords,
      icons: siteConfig.seo.favicon ? {
        icon: siteConfig.seo.favicon,
      } : undefined,
      openGraph: {
        title: siteConfig.seo.title,
        description: siteConfig.seo.description,
        images: siteConfig.seo.ogImage ? [siteConfig.seo.ogImage] : undefined,
      },
    };
  } catch (error) {
    console.error('Failed to load site config:', error);
    return {
      title: 'Multi-Site Platform',
      description: 'Choose a site to view different business configurations',
    };
  }
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Only load site config if SITE_ID is set
  let siteConfig = null;
  
  if (process.env.SITE_ID || process.env.NEXT_PUBLIC_SITE_ID) {
    try {
      siteConfig = await getSiteConfig();
    } catch (error) {
      console.error('Failed to load site config:', error);
    }
  }

  // Default theme and locale for site selector
  const defaultTheme = {
    colors: {
      background: '#FFFFFF',
      foreground: '#000000',
      primary: '#3B82F6',
      secondary: '#F3F4F6'
    }
  };

  const theme = siteConfig?.theme || defaultTheme;
  const locale = siteConfig?.localization?.defaultLocale || 'en';

  return (
    <html lang={locale}>
      <body 
        className={inter.className}
        style={{ 
          backgroundColor: theme.colors?.background || '#FFFFFF',
          color: theme.colors?.foreground || '#000000'
        }}
      >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}