import { ThemeSwitcher } from './ThemeSwitcher.tsx';

const Topbar = () => {
	return (
		<div className="flex justify-between items-center p-4 bg-default">
			<h2>LOGO</h2>
			<div>
				<ThemeSwitcher />
			</div>
		</div>
	);
};
export default Topbar;
