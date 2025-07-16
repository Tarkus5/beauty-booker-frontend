import { useEffect, useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';
import routes from '../routes';
import Logo from './Logo';
import NavigationLink from './NavigationLink';

const Sidebar = () => {
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    const updateActivePath = () => {
      setActivePath(window.location.pathname);
    };

    // Imposta il percorso iniziale
    updateActivePath();

    // Aggiorna il percorso attivo quando cambia la location
    window.addEventListener('popstate', updateActivePath);

    // Custom event per aggiornare il percorso quando la navigazione viene gestita nell'App
    const handleCustomNavigation = () => updateActivePath();
    window.addEventListener('navigationChange', handleCustomNavigation);

    return () => {
      window.removeEventListener('popstate', updateActivePath);
      window.removeEventListener('navigationChange', handleCustomNavigation);
    };
  }, []);

  return (
    <div className="flex flex-col justify-between items-center bg-default h-[95vh] w-56 ml-8 rounded-[24px] p-4">
      <div className="w-full">
        <Logo />

        <nav className="w-full">
          <ul className="space-y-4 w-full">
            {routes.map((route, index) => {
              const isActive = activePath === route.path;

              return (
                <li key={index} className="w-full">
					                  <NavigationLink 
					                    path={route.path} 
					                    isActive={isActive} 
					                    icon={route.icon}
					                  >
					                    {route.name}
					                  </NavigationLink>
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
