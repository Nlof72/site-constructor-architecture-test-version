# @platform/config

Пакет для управления конфигурациями сайтов с валидацией схем.

## Установка

```bash
pnpm add @platform/config
```

## Использование

### Загрузка конфигурации

```typescript
import { loadSiteConfig, getSiteConfigById } from '@platform/config';

// Из объекта
const config = loadSiteConfig({
  siteId: 'my-site',
  siteName: 'My Site',
  // ... остальные поля
});

// По ID
const config = await getSiteConfigById('my-site');
```

### Валидация

Пакет использует Zod для валидации:

```typescript
import { SiteConfigSchema } from '@platform/config';

const result = SiteConfigSchema.safeParse(data);

if (result.success) {
  console.log('Valid config:', result.data);
} else {
  console.error('Validation errors:', result.error);
}
```

## Схема конфигурации

### Основные поля

```typescript
interface SiteConfig {
  siteId: string;
  siteName: string;
  domain: string;
  businessType: 'vpn' | 'gaming' | 'marketplace' | 'saas' | 'digital-keys';
  theme: ThemeConfig;
  seo: SEOConfig;
  features: FeatureFlags;
  navigation: Navigation[];
  paymentMethods: PaymentMethod[];
  localization: LocalizationConfig;
  api: APIConfig;
  analytics?: AnalyticsConfig;
  social?: SocialConfig;
}
```

### ThemeConfig

```typescript
interface ThemeConfig {
  colors: {
    primary: string;
    primaryForeground?: string;
    secondary?: string;
    accent?: string;
    background?: string;
    foreground?: string;
  };
  typography?: {
    fontFamily?: {
      sans?: string;
      heading?: string;
    };
  };
  borderRadius?: {
    sm?: string;
    md?: string;
    lg?: string;
  };
}
```

### FeatureFlags

```typescript
interface FeatureFlags {
  enableBlog?: boolean;
  enableChat?: boolean;
  enableReviews?: boolean;
  enableNewsletter?: boolean;
  enableAnalytics?: boolean;
  enableABTesting?: boolean;
}
```

## Примеры

### Минимальная конфигурация

```json
{
  "siteId": "my-site",
  "siteName": "My Site",
  "domain": "mysite.com",
  "businessType": "saas",
  "theme": {
    "colors": {
      "primary": "#0066FF"
    }
  },
  "seo": {
    "title": "My Site",
    "description": "Site description"
  },
  "features": {},
  "navigation": [],
  "paymentMethods": ["card"],
  "localization": {
    "defaultLocale": "en",
    "supportedLocales": ["en"],
    "currency": "USD"
  },
  "api": {
    "baseUrl": "https://api.mysite.com",
    "endpoints": {}
  }
}
```

### Полная конфигурация

См. примеры в `/configs/sites/`
