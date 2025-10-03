# @platform/ui-kit

Переиспользуемая библиотека UI компонентов с поддержкой тем для мультибрендовой платформы.

## Установка

```bash
pnpm add @platform/ui-kit
```

## Использование

### Базовые компоненты

```tsx
import { Button, Card, Input } from '@platform/ui-kit';

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

### Система тем

```tsx
import { ThemeProvider, createTheme } from '@platform/ui-kit';

const customTheme = createTheme({
  colors: {
    primary: '#0066FF',
    primaryForeground: '#FFFFFF',
  },
  typography: {
    fontFamily: {
      sans: 'Inter, sans-serif',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Компоненты

### Button

```tsx
<Button variant="primary" size="md">
  Click me
</Button>

<Button variant="outline" fullWidth>
  Full width
</Button>

<Button variant="ghost" isLoading>
  Loading...
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `fullWidth`: boolean
- `isLoading`: boolean

### Card

```tsx
<Card>
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
  </Card.Header>
  <Card.Content>
    Card content goes here
  </Card.Content>
  <Card.Footer>
    <Button>Action</Button>
  </Card.Footer>
</Card>
```

### Input

```tsx
<Input 
  type="email"
  placeholder="Enter email"
  error="Invalid email"
/>
```

## Хуки

### useTheme

```tsx
import { useTheme } from '@platform/ui-kit';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <div style={{ color: theme.colors.primary }}>
      Themed content
    </div>
  );
}
```

### useMediaQuery

```tsx
import { useMediaQuery } from '@platform/ui-kit';

function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  return isMobile ? <MobileView /> : <DesktopView />;
}
```

## Кастомизация

Все компоненты поддерживают кастомизацию через className:

```tsx
<Button className="custom-class">
  Custom styled button
</Button>
```

## Типы

Все компоненты полностью типизированы:

```tsx
import type { ButtonProps, ThemeConfig } from '@platform/ui-kit';
```
