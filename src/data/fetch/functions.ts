export const fetchProductsFromAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
        },
    })
    return await response.json()
}

export const fetchCategoriesFromAPI = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/product_categories`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
            },
        }
    )
    return await response.json()
}
