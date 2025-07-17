import { Bars3Icon } from '@heroicons/react/24/outline';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@heroui/react';
import Logo from './Logo';

interface TopbarProps {
  username?: string;
  onToggleSidebar?: () => void;
}

const Topbar = ({ username = 'Alessandro', onToggleSidebar }: TopbarProps) => {
  return (
    <div className="w-full flex justify-between items-center h-10 lg:h-20 px-0 lg:px-2 ">
      <div className="flex items-center">
        <div className="block md:hidden">
          <Logo />
        </div>
        <div className="hidden md:block font-bold text-3xl">Welcome back, {username} 👋</div>
      </div>

      <div className="flex items-center">
        <Dropdown placement="bottom-end">
          <DropdownTrigger className="hidden md:block">
            <Avatar
              name={username}
              src="https://avatars.githubusercontent.com/u/10214025?v=4"
              showFallback
              size="md"
              isBordered
              color="primary"
              className="text-default-900 text-md transition-transform hover:cursor-pointer"
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            className="bg-divider border-0"
            variant="light"
          >
            <DropdownItem key="settings">Impostazioni</DropdownItem>
            <DropdownItem key="team_settings">Impostazioni del Team</DropdownItem>
            <DropdownItem key="configurations">Configurazioni</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" className="text-danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* hamburger solo su mobile */}
        <Button
          isIconOnly
          variant="shadow"
          className="bg-divider md:hidden ml-2"
          onPress={onToggleSidebar}
        >
          <Bars3Icon className="w-6 h-6 text-default" />
        </Button>
      </div>
    </div>
  );
};

export default Topbar;
