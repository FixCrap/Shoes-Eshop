import Card from "./Card";

function NewArrivalsSection({ items, onClickCard }) {
	return (
		<div className=' mt-20'>
			<div className='flex-center'>
				<div className=' dark:text-white text-4xl font-extrabold bg-[url("./assets/lines.png")] bg-center'>
					NEW ARRIVALS
				</div>
			</div>

			<div className='mt-10 justify-between grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]'>
				{items.map((item) => (
					<Card
						key={item.id}
						item={item}
						onClick={onClickCard}
					/>
				))}
			</div>
		</div>
	);
}

export default NewArrivalsSection;
