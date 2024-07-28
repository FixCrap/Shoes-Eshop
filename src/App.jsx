import Nav from "./components/Nav";
import NewArrivalSection from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import SideBar from "./components/SideBar";
import { SHOE_LIST } from "./constant";
import { useState } from "react";
import Cart from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";
import { useEffect } from "react";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
	return {
		product: shoe,
		qty: 1,
		size: 44,
	};
});

function App() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
	const [cartItems, setCartItems] = useState([]);

	const toggleDarkMode = () => {
		window.document.documentElement.classList.toggle("dark");

		useEffect(() => {
			const isDarkMode = localStorage.getItem("isDarkMode");
			if (isDarkMode === "true") {
				window.document.documentElement.classList.add("dark");
			}
		}, []);

		localStorage.setItem(
			"isDarkMode",
			window.document.documentElement.classList.contains("dark")
		);
	};

	const addToCart = (product, qty, size) => {
		if (qty && size) {
			const updatedCartItems = [...cartItems];
			const existingItemIndex = cartItems.findIndex(
				(item) => item.product.id === product.id
			);
			if (existingItemIndex > -1) {
				updatedCartItems[existingItemIndex].qty = qty;
				updatedCartItems[existingItemIndex].size = size;
			} else {
				updatedCartItems.push({ product: product, qty: qty, size: size });
			}
			setCartItems(updatedCartItems);
		}
	};

	const removeFromCart = (productId) => {
		const updatedCartItems = [...cartItems];
		const existingItemIndex = cartItems.findIndex(
			(item) => item.product.id === productId
		);
		updatedCartItems.splice(existingItemIndex, 1);
		setCartItems(updatedCartItems);
	};

	return (
		<div className='p-10 xl:px-24 animate-fadeIn dark:bg-night'>
			<Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
			<ShoeDetail
				shoe={currentShoe}
				onClickAdd={addToCart}
			/>
			<NewArrivalSection
				items={SHOE_LIST}
				onClickCard={setCurrentShoe}
			/>
			<SideBar
				isOpen={isSidebarOpen}
				onClickClose={() => setIsSidebarOpen(false)}>
				<Cart
					cartItems={cartItems}
					onClickTrash={removeFromCart}
				/>
			</SideBar>
			<div className='fixed bottom-4 right-4 '>
				<button
					onClick={toggleDarkMode}
					className='bg-night-50 text-white  px-4 py-2 rounded-full dark:bg-white dark:text-night'>
					<BiSun className='hidden dark:block' />
					<BiMoon className='dark:hidden' />
				</button>
			</div>
		</div>
	);
}

export default App;
