import { SiteConfig } from '@platform/config';
import { Button } from '../../shared/ui/Button';

interface HeaderProps {
  config: SiteConfig;
}

export function Header({ config }: HeaderProps) {
  return (
    <header className="px-6 lg:px-8 py-6">
      <nav className="flex items-center justify-between">
        <div className="flex lg:flex-1">
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
            {config.siteName}
          </h1>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {config.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold leading-6 hover:opacity-80 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex lg:flex-1 lg:justify-end gap-4">
          <Button variant="ghost">Sign in</Button>
          <Button variant="primary">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
