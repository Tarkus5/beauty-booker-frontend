import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import {Input, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@heroui/react";

interface TopbarProps {
  username?: string;
}

const Topbar = ({ username = 'Alessandro' }: TopbarProps) => {
  return (
    <div className="w-full flex justify-between items-center h-20">
      <div className="text-3xl font-bold">
        Welcome back, {username} 👋
      </div>

        <Dropdown placement="bottom-end">
            <DropdownTrigger>
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
            <DropdownMenu aria-label="Profile Actions" className="bg-divider border-0" variant="light">
                <DropdownItem key="settings">Impostazioni</DropdownItem>
                <DropdownItem key="team_settings">Impostazioni del Team</DropdownItem>
                <DropdownItem key="configurations">Configurazioni</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" className="text-danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
  );
};

export default Topbar;
