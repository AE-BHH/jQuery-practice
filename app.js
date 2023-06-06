$(document).ready(function () {
	// grabs the element with ID
	const startingElement = $('#starting-point')

	//creates a new div
	const siblingElement = $('<div></div>')
	// adds test to the new div
	siblingElement.text('This is the next part')
	// appends the new div to startingElement
	startingElement.after(siblingElement)
})
