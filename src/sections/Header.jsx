import Nav from "../components/Nav";
import { useOutSideAlerter } from "../hooks/useOtsideAlerter";

const Header = () => {
	const { isShow, ref, setIsShow } = useOutSideAlerter(false);

	const onToggleMenu = () => setIsShow(!isShow);
	return (
		<Nav
			containerStyle={
				isShow
					? "flex flex-col justify-center align-center p-12 fixed top-24 bg-white shadow-lg rounded-lg transition-all duration-600 right-10 gap-20 text-3xl"
					: "hidden lg:flex justify-between items-center max-container gap-20 "
			}
			theref={ref}
			onToggleMenu={onToggleMenu}
		/>
	);
};

export default Header;
