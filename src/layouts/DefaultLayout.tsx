import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { Card } from "@heroui/react";
import type { LayoutProps } from '../types';

const DefaultLayout = ({ children }: LayoutProps) => {
  return (
    <div className="text-foreground bg-background h-screen flex items-center">
      <Sidebar />
      <div className="flex-1 h-[95vh] flex flex-col mx-8">
        <Topbar />
        <Card className="flex-1 p-8 mt-4 overflow-auto">
          {children}
        </Card>
      </div>
    </div>
  );
};

export default DefaultLayout;
