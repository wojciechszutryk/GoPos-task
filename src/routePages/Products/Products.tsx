import React, { useMemo } from 'react'
import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material'
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
                setCategoriesList([])
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
                setProductList([])
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

    const rowsHeader: string[] = useMemo(() => {
        const rowsHeader: string[] = []
        rowsHeader.push('name')
        rowsHeader.push('category')
        return rowsHeader
    }, [])

    const rows: { [key: string]: null | string }[] = useMemo(() => {
        return ProductList.map((prod, index) => {
            const categoryName =
                CategoriesList?.find((cat) => cat.id === prod.categoryId)
                    ?.name ?? null
            return { name: prod.name, category: categoryName }
        })
    }, [ProductList, CategoriesList])

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
            <TableContainer component={Paper} elevation={0}>
                <Table aria-label="products table">
                    <TableHead>
                        <TableRow>
                            {rowsHeader.map((row, index) => (
                                <TableCell key={index}>
                                    <Typography variant={'h4'}>
                                        {row}
                                    </Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                {Object.values(row).map((value, index) => (
                                    <TableCell key={index}>{value}</TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default Products
