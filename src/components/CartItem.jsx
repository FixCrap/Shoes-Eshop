import { CiTrash } from "react-icons/ci";
import Select from "./Select";
import { QTY, SIZES } from "./../constant";

function CartItem({ item: { product, qty, size }, onClickTrash }) {
	return (
		<div className='cursor-pointer  hover:bg-[#DAFFA2]  bg-gray-50 space-y-2 dark:bg-transparent dark:hover:bg-night-50'>
			<div className='flex space-x-2'>
				{/* Image */}
				<img
					src={product.src}
					alt=''
					className='h-24'
				/>
				<div className='space-y-2 dark:text-white'>
					{/* Title and Description */}
					<div className='font-bold dark:text-white'>{product.title}</div>
					<div className='text-sm text-gray-400'>{product.description}</div>
				</div>
				{/* Price */}
				<div className='font-bold dark:text-white'>{product.price}$</div>
			</div>

			<div className='flex justify-between pl-32'>
				<div className='flex gap-x-6'>
					<div>
						<div className='font-bold dark:text-white'>SIZE</div>
						<Select
							value={size}
							title=''
							options={SIZES}
							className={"w-16 p-1 pl-2"}
						/>
					</div>
					<div>
						<div className='font-bold dark:text-white'>QTY</div>
						<Select
							value={qty}
							title=''
							options={QTY}
							className={"w-16 p-1 pl-2"}
						/>
					</div>
				</div>

				<button onClick={() => onClickTrash(product.id)}>
					<CiTrash
						size={25}
						className='text-black dark:text-white'
					/>
				</button>
			</div>
		</div>
	);
}

export default CartItem;
