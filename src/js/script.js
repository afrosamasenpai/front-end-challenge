(function () {
	'use strict'

	// BEGIN: Quantity selector
    const quantityButtons = document.querySelectorAll('[data-quantity-change]')
    const quantity = document.querySelector('.product-details__number')

    // The quantity amount is set as a let since it needs to be updated
    let quantityAmount = 0

    // I am setting the value here so that the input fields info
    // doesn't carry over from a page refresh
    quantity.value = quantityAmount

    quantityButtons.forEach( button => {
    	const changeQuantity = button.dataset.quantityChange

    	button.addEventListener('click', e => {

    		if (changeQuantity === 'up') quantityAmount++

    		// Added a limit on how far down the quantity can go to match the input
    			// because giving a negative quantity makes little sense
    		if (changeQuantity === 'down' && quantityAmount >= 1) quantityAmount--

			quantity.value = quantityAmount
    	})
    })
    // END: Quantity selector


})()