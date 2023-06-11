$(document).ready(function () {
	let favoriteFoods = $('#favorite-foods')
	favoriteFoods.css('background-color', 'purple')

	const menu = $('#menu')

	const favs = [
		{
			food: 'pizza',
			imgUrl:
				'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*',
		},
		{
			food: 'falafel',
			imgUrl:
				'https://www.elal.com/magazine/wp-content/uploads/2019/01/Falafel2_806.jpg',
		},
		{
			food: 'bolani',
			imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Bolani.jpg',
		},
		{
			food: 'burger',
			imgUrl:
				'https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=1&w=640',
		},
		{
			food: 'crepe',
			imgUrl:
				'https://www.homemadeinterest.com/wp-content/uploads/2022/01/Homemade-Crepes-with-Nutella_2022_IG-2.jpg',
		},
		{
			food: 'ice cream',
			imgUrl:
				'https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg',
		},
		{
			food: 'hot dog',
			imgUrl:
				'https://www.foodandwine.com/thmb/Au_zD0Qmb5sD5NWLOuktc5MPg1E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/chorizo-and-kimchi-dogs-FT-RECIPE0819-74abcc92e9154e729c7e98e248daa3c7.jpg',
		},
		{
			food: 'meatball sandwich',
			imgUrl:
				'https://img.delicious.com.au/XUko_aOz/w759-h506-cfill/del/2017/11/meatball-sandwiches-55197-2.jpg',
		},
	]
	let totalCounter = 0
	const orderCount = $('<div></div>').text(`Total Food is: ${totalCounter}`)

	$('#starting-point').after(orderCount)

	favs.forEach((item) => {
		// console.log(item.food, item.color)
		let itemCounter = 0
		const foodBox = $("<div class='menu-item'></div>")
		const foodImage = $(
			`<img class='food-image' src=${item.imgUrl} alt='image not found'>`
		)

		const foodName = $('<div></div>').text(item.food)

		const count = $('<div></div>').text(`Quantity: ${itemCounter}`)

		const button = $('<button></button>')
			.text('Add Item')
			.css({
				border: '1px solid gray',
				'background-color': 'darkgray',
				padding: '5px 10px',
				'font-weight': 'bold',
				'font-size': '12px',
			})

			.on('click', () => {
				itemCounter += 1
				count.text(`Quantity: ${itemCounter}`)
				totalCounter += 1
				orderCount.text(`Total Food is: ${totalCounter}`)
			})
		foodBox.append(foodImage)
		foodBox.append(foodName)
		foodBox.append(count) 
		foodBox.append(button)

		favoriteFoods.after(foodBox)
		menu.append(foodBox)
	})
})
//
// const button = $('<button></button>')
// 	.text('Add Item')
// 	.css({
// 		'background-color': 'lightblue',
// 		padding: '5px',
// 		'font-weight': 'Bold',
// 	})
// 	.on('click', () => {
// 		itemCounter += 1
// 		count.text(`Quantity: ${itemCounter}`)
// 	})

// foodBox.append(button)
