import { CalendarIcon, Squares2X2Icon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';

const routes = [
  { name: 'Dashboard', path: '/', icon: <Squares2X2Icon className="w-5 h-5" /> },
  { name: 'Calendario', path: '/calendar', icon: <CalendarIcon className="w-5 h-5" /> },
  { name: 'Servizi', path: '/services', icon: <WrenchScrewdriverIcon className="w-5 h-5" /> },
];

const Sidebar = () => {
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    setActivePath(window.location.pathname);

    const handleLocationChange = () => {
      setActivePath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between items-center bg-default h-[95vh] w-56 ml-8 rounded-[24px] p-4">
      <div className="w-full">
        <h2 className="bg-primary text-center mb-8 py-2">LOGO</h2>

        <nav className="w-full">
          <ul className="space-y-4 w-full">
            {routes.map((route, index) => {
              const isActive = activePath === route.path;

              return (
                <li key={index} className="w-full">
                  <a
                    href={route.path}
                    className={`flex items-center gap-3 py-2 px-4 rounded-full transition-colors 
                    ${
                      isActive
                        ? 'bg-primary text-default-900'
                        : 'text-white hover:bg-primary hover:text-default-900'
                    }
					`}
                  >
                    {route.icon}
                    {route.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
export default Sidebar;
