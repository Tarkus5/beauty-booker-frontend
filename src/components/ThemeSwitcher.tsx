import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/react';
import { useTheme } from '@heroui/use-theme';

export const ThemeSwitcher = () => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<Button
			type="button"
			onPress={toggleTheme}
			isIconOnly
			variant="ghost"
			radius="full"
			aria-label={`Passa al tema ${theme === 'light' ? 'scuro' : 'chiaro'}`}
		>
			{theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
		</Button>
	);
};
