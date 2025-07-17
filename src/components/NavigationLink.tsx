import type { ReactNode } from 'react';
import { navigate } from '../utils/navigation';

interface NavigationLinkProps {
  path: string;
  isActive: boolean;
  icon: React.ElementType; // Cambiato da ReactNode a ElementType
  children: ReactNode;
}

const NavigationLink = ({ path, isActive, icon: Icon, children }: NavigationLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <a
      href={path}
      onClick={handleClick}
      className={`flex items-center gap-3 py-2 px-4 rounded-full transition-colors 
      ${
        isActive
          ? 'bg-primary text-default'
          : 'text-white hover:bg-primary hover:text-default-900'
      }`}
    >
      <Icon className="h-5 w-5" />
      {children}
    </a>
  );
};

export default NavigationLink;
