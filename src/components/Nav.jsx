import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import Hamburger from 'hamburger-react'


const Nav = ({ containerStyle, theref, onToggleMenu }) => {

	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav ref={theref} className="flex flex-row justify-between items-center max-container">
				<a href="/">
					<img
						src={headerLogo}
						alt="headerLogo"
						width={130}
						height={29}
						className=""
					/>
				</a>
                    <ul className={`${containerStyle}`}>
                        {navLinks.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className="font-montserrat leading-normal text-lg text-slate-gray hover:text-[#ff6452]"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                <div className="lg:hidden">
                    <Hamburger size={25} onToggle={onToggleMenu}/>
                </div>
           
                
			</nav>
		</header>
	);
};

export default Nav;
