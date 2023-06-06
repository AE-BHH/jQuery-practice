$(document).ready(function () {
	// grabs the element with ID
	const startingElement = $('#starting-point')

	//creates a new div
	const siblingElement = $('<div></div>')
	// adds test to the new div
	siblingElement.text('This is the next part')
	// appends the new div to startingElement
	startingElement.after(siblingElement)

	let favoriteFoods = $('#favorite-foods')
	// favoriteFoods.css('background-color', 'purple')

	// const favFoods = ['Bolani', 'Mantu', 'Qabli']
	// const favColors = ['green', 'orange', '#fff']

	// favFoods.forEach((food) => {
	// 	let favFood = $('<div></div>').text(food)

	// })

	const favs = [
		{ food: 'pizza', color: 'green' },
		{ food: 'falafel', color: 'yellow' },
		{ food: 'bolani', color: 'red' },
		{ food: 'hot dog', color: 'orange' },
	]
	// how the array 'favs' looks like

	// console.log(favs)

	// access each elements in the array
	favs.forEach((el) => {
		let foodColors = $('<div></div>')
			.text(el.food)
			.css('background-color', el.color)

		favoriteFoods.after(foodColors)
	})
})
