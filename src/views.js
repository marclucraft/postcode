const generateDealerDOM = (dealer) => {
    const dealerWrap = document.createElement('div')
    const dealerText = document.createElement('div')
    const dealerMiles = document.createElement('p')
    const dealerName = document.createElement('p')
    const dealerAddress = document.createElement('p')
    const dealerButton = document.createElement('button')

    dealerWrap.className = 'dealer'
    dealerText.className = 'dealer__text'
    dealerWrap.appendChild(dealerText)


    // Add the distance
    dealerMiles.textContent = `${(dealer.distance / 1609.344).toFixed(1)} miles`
    dealerMiles.className = 'distance'
    dealerText.appendChild(dealerMiles)

    // Add the dealer name
    dealerName.textContent = dealer['Trading Title']
    dealerName.className = 'name'
    dealerText.appendChild(dealerName)

    // Add the address
    dealerAddress.textContent = `${dealer.Address1}, ${dealer.Address2}, ${dealer.Address3}, ${dealer['Post Code']}`
    dealerAddress.className = 'address'
    dealerText.appendChild(dealerAddress)

    // Add the book button
    dealerButton.textContent = 'Book Now'
    dealerButton.className = 'button'
    dealerWrap.appendChild(dealerButton)
    dealerButton.addEventListener('click', (e) => {
        e.preventDefault()
        window.location = `https://eventsair.co.uk/${dealer['Main / Car Dealer Code']}`
    })

    return dealerWrap
} 

export { generateDealerDOM as default }