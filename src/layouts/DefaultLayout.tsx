import { Card } from '@heroui/react';
import { type KeyboardEvent, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import type { LayoutProps } from '../types';

const DefaultLayout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);
  const toggleSidebar = () => setSidebarOpen((open) => !open);

  return (
    <div className="text-foreground bg-background h-screen flex items-center justify-center p-4 lg:p-8 overflow-hidden">
      <div
        className={`
          fixed inset-y-0 left-0 z-30
          w-52 md:w-56
          h-full md:h-[95vh]
          bg-default
          transform transition-transform duration-200 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          rounded-tr-[24px] rounded-br-[24px]
          md:rounded-[24px]
          md:translate-x-0 md:static
        `}
      >
        <Sidebar onLinkClick={closeSidebar} />
      </div>

      <div
        className={`
          fixed inset-0 bg-black bg-opacity-60 z-20
          ${sidebarOpen ? 'block' : 'hidden'}
          md:hidden
        `}
        onClick={closeSidebar}
      />

      <div className="flex-1 h-[95vh] flex flex-col ml-0 md:ml-8">
        <Topbar onToggleSidebar={toggleSidebar} />
        <Card className="flex-1 p-8 mt-4 overflow-auto">{children}</Card>
      </div>
    </div>
  );
};

export default DefaultLayout;
