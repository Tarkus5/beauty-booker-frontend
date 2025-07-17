import {
  CalendarIcon,
  Squares2X2Icon,
  UserIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import type { Route } from '../types';

const routes: Route[] = [
  { name: 'Dashboard', path: '/', icon: Squares2X2Icon },
  { name: 'Calendario', path: '/calendar', icon: CalendarIcon },
  { name: 'Servizi', path: '/services', icon: WrenchScrewdriverIcon },
  { name: 'Clienti', path: '/clients', icon: UserIcon },
];

export default routes;
