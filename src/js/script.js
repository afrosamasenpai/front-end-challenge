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


    // BEGIN: Custom select dropdown
    const selectTrigger = document.querySelector('[data-select-trigger]')
    const selectOption = document.querySelectorAll('[data-size]')

    const selectOptions = document.querySelector('.product-details__select-options')
    const selectLabelText = document.querySelector('.product-details__select-label-text')

    const triggerDropdown = () => {
    	const isOpen = selectOptions.classList.contains('product-details__select-options--open')
    	selectOptions.classList[isOpen ? 'remove' : 'add']('product-details__select-options--open')
    }

    selectTrigger.addEventListener('click', e => triggerDropdown())

    selectOption.forEach( option => {
    	option.addEventListener('click', e => {
    		selectLabelText.innerHTML = option.dataset.size
    		triggerDropdown()
    	})
    })
    // END: Custom select dropdown


    // BEGIN: Zoom feature
    const zoomInTrigger = document.querySelectorAll('[data-trigger-zoom-in]')
    const zoomOutTrigger = document.querySelectorAll('[data-trigger-zoom-out]')
    const zoomTriggers = [...zoomInTrigger, ...zoomOutTrigger]

    const container = document.querySelector('.container')
    const zoomContainer = document.querySelector('.zoom-container')

    // Have current position outside so it can be easily grabbed
	let windowPosition

    const toggleZoom = () => {

    	const isOpen = 
    		zoomContainer.classList.contains('zoom-container--open') && 
    		container.classList.contains('container--fixed')

    	isOpen ? window.scroll(0, windowPosition) : windowPosition = window.pageYOffset

    	zoomContainer.classList[isOpen ? 'remove' : 'add']('zoom-container--open')
		container.classList[isOpen ? 'remove' : 'add']('container--fixed')
    }

    zoomTriggers.forEach( image => {

    	image.addEventListener('click', e => {
    		const index = image.dataset.imageIndex || false
    		const imageToScrollTo = document.getElementById(`zoomed-image-${index}`);
    		
    		toggleZoom()

            // This scrolls to the image that the user clicks, as it isn't
            // using the extra props, the compadability is widespread
    		if (index) imageToScrollTo.scrollIntoView(true);
    	})

    })
    // END: Zoom feature

})()