import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

function Nav({ onClickShoppingBtn }) {
	const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

	return (
		<nav className='flex flex-wrap justify-between items-center z-10 relative'>
			{/*Logo */}
			<a href='#'>
				<NikeLogo className='h-20 w-20 dark:fill-white' />
			</a>
			{/*Burger Button */}
			<button
				onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
				className='lg:hidden p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'>
				<RxHamburgerMenu size={25} />
			</button>
			{/*Menu List*/}
			<div
				className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}>
				<ul className='lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 text-lg border border-gray-100 lg:border-none rounded-lg p-4 lg:bg-transparent lg:dark:text-white'>
					{ROUTES.map((route, i) => {
						return (
							<li
								className={` lg:hover:bg-transparent lg:hover:text-blue-500 rounded py-2 px-3 cursor-pointer ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} ${(i == 3 || i == 4) && "lg:text-white"}`}
								key={route}>
								{route}
							</li>
						);
					})}
				</ul>
			</div>
			<div
				onClick={onClickShoppingBtn}
				className='fixed left-4 bottom-4 lg:static lg:mr-8 btn-press-anim'>
				<div className='flex justify-center items-center  h-12 w-12 rounded-full bg-white shadow-md cursor-pointer'>
					<TbShoppingBag />
				</div>
			</div>
		</nav>
	);
}

export default Nav;
