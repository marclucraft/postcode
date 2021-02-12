const getPostcode = async (postcode) => {
    const response = await fetch(`//api.postcodes.io/postcodes/${encodeURIComponent(postcode)}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.result
    } else {
        throw new Error('Unable to fetch data')
    }
}

export { getPostcode as default }