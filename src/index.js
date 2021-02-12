import nearestDealers from './dealers'
import generateDealerDOM from './views'

document.querySelector('#search').addEventListener('submit', (e) => {
    e.preventDefault()

    const resultsEl = document.querySelector('#results')

    resultsEl.innerHTML = ''

    nearestDealers(e.target.elements.postcode.value)
    .then((dealers) => {
        const dealersSlice = dealers.slice(0, 5)
        dealersSlice.forEach((dealer) => {
            resultsEl.appendChild(generateDealerDOM(dealer))
        })
    })
    .catch(e => console.log("Unable to find customer postcode"))

    e.target.elements.postcode.value = ''

    setTimeout(() => {
        resultsEl.scrollIntoView({
            behavior: 'smooth'
        })
    }, 500);
})