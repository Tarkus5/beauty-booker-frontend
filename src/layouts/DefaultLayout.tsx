import Sidebar from '../components/Sidebar';
import type { LayoutProps } from '../types';

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div className="text-foreground bg-background h-screen flex items-center">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto h-[95vh] ml-4 mr-8 rounded-[24px]">
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
