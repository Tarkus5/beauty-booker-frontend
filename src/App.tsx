import { useEffect, useState } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Services from './pages/Services';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Gestire la navigazione manuale (clic sui link)
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const path = anchor.getAttribute('href') as string;
        window.history.pushState({}, '', path);
        setCurrentPath(path);
      }
    });

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Mappa delle route per un approccio più dichiarativo
  const routeComponents = {
    '/': Dashboard,
    '/calendar': Calendar,
    '/services': Services,
  };

  // Funzione per renderizzare la pagina corrente
  const renderContent = () => {
    const Component = routeComponents[currentPath as keyof typeof routeComponents] || Dashboard;
    return <Component />;
  };

  return (
    <DefaultLayout>
      {renderContent()}
    </DefaultLayout>
  );
}
