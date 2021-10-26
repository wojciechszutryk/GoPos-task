export const fetchFromAPI = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/recommendations/`,
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
    )
    return await response.json()
}
