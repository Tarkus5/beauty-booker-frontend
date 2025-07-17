import { type KeyboardEvent, useEffect, useState } from 'react';
import routes from '../routes';
import Logo from './Logo';
import NavigationLink from './NavigationLink';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';

interface SidebarProps {
  onLinkClick?: () => void;
}

const Sidebar = ({ onLinkClick }: SidebarProps) => {
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    const updateActivePath = () => setActivePath(window.location.pathname);
    updateActivePath();
    window.addEventListener('popstate', updateActivePath);
    window.addEventListener('navigationChange', updateActivePath);
    return () => {
      window.removeEventListener('popstate', updateActivePath);
      window.removeEventListener('navigationChange', updateActivePath);
    };
  }, []);

  const handleKey = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onLinkClick?.();
    }
  };

  return (
    <div className="flex flex-col justify-between items-center h-full w-full md:w-56 p-4">
      <div className="w-full">
        <div className="hidden md:block mb-6">
          <Logo />
        </div>

        <nav className="w-full">
          <ul className="space-y-4 w-full">
            {routes.map((route) => {
              const isActive = activePath === route.path;
              return (
                <li
                  key={route.path}
                  className="w-full"
                  onClick={onLinkClick}
                  onKeyDown={handleKey}
                  role="button"
                  tabIndex={0}
                >
                  <NavigationLink path={route.path} isActive={isActive} icon={route.icon}>
                    {route.name}
                  </NavigationLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ThemeSwitcher />
    </div>
  );
};

export default Sidebar;
