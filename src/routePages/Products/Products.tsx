import React, { useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import { Container } from 'react-bootstrap'
import { useStyles } from './styles'
import { fetchCategoriesFromAPI, fetchProductsFromAPI } from '../../data/fetch'
import { useQuery } from 'react-query'
import { ClipLoader } from 'react-spinners'

const Products = () => {
    const classes = useStyles()
    const [ProductList, setProductList] = React.useState<
        {
            name: string
            categoryId: string
        }[]
    >([])
    const [CategoriesList, setCategoriesList] = React.useState<
        { id: string; name: string }[]
    >([])
    const { isLoading: isLoadingCategories, error: errorCategories } = useQuery(
        'categories',
        fetchCategoriesFromAPI,
        {
            onSuccess: (data) => {
                data.data.forEach((cat: any) => {
                    const category = {
                        id: cat.id,
                        name: cat.name,
                    }
                    setCategoriesList((CategoriesList) => [
                        ...CategoriesList,
                        category,
                    ])
                })
            },
        }
    )
    const { isLoading: isLoadingProducts, error: errorProducts } = useQuery(
        'products',
        fetchProductsFromAPI,
        {
            onSuccess: (data) => {
                data.data.forEach((prod: any) => {
                    const product = {
                        name: prod.name,
                        categoryId: prod.category_id,
                    }
                    setProductList((ProductList) => [...ProductList, product])
                })
            },
        }
    )

    const productsList = useMemo(
        () =>
            ProductList.map((prod, index) => {
                const categoryName =
                    CategoriesList?.find((cat) => cat.id === prod.categoryId)
                        ?.name ?? null
                return (
                    <li key={index}>
                        {prod.name} {categoryName}
                    </li>
                )
            }),
        [ProductList, CategoriesList]
    )

    if (isLoadingCategories || isLoadingProducts)
        return (
            <Container className={classes.center}>
                <ClipLoader size={150} />
            </Container>
        )
    if (errorCategories || errorProducts)
        return <Box>An error has occurred</Box>

    return (
        <Container className={classes.center}>
            <Typography variant={'h2'} align={'center'}>
                Products list:
            </Typography>
            <ul>{productsList}</ul>
        </Container>
    )
}

export default Products
