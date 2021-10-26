export const fetchProductsFromAPI = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/recommendations/products`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
            },
        }
    )
    return await response.json()
}
