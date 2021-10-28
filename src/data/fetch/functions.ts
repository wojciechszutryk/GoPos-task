export const fetchProductsFromAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
        },
    })
    return await response.json()
}

export const fetchProductsWithCategoryFromAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products?include=category&include=`, {
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

export const updateCategory = async ({
    id,
    name,
}: {
    id: string
    name: string
}) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/product_categories/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                name: name,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
            },
        }
    )
    return await response.json()
}

export const updateProduct = async ({id, name, category_id}:
    {
        id: string,
        name: string,
        category_id: string,
    },
) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/products/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                category_id: category_id,
                type: "BASIC",
                tax_id: 1,
                status: "ENABLED",
                measure_type: "ITEM"
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
            },
        }
    )
    return await response.json()
}

export const createCategory = async (name: string) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/product_categories/`,
        {
            method: 'POST',
            body: JSON.stringify({
                name: name,
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
            },
        }
    )
    return await response.json()
}

export const createProduct = async (name: string, category_id: string) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/products/`, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            category_id: category_id,
        }),
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${process.env.REACT_APP_API_AUTH_KEY}`,
        },
    })
    return await response.json()
}
