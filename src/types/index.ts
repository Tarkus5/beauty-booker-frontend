import { ReactNode } from 'react';

export interface Route {
  name: string;
  path: string;
  icon: React.ElementType; // Cambiato da ReactNode a ElementType
}

export interface LayoutProps {
  children: ReactNode;
}
