import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input, Avatar } from "@heroui/react";

interface TopbarProps {
  username?: string;
}

const Topbar = ({ username = 'Alessandro' }: TopbarProps) => {
  return (
    <div className="w-full flex justify-between items-center h-20">
      <div className="text-3xl font-bold">
        Welcome back, {username} 👋
      </div>

        <Avatar
        name={username}
        showFallback
        size="md"
        className="bg-primary text-default-900"
        />
    </div>
  );
};

export default Topbar;
