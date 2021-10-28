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
import { fetchProductsWithCategoryFromAPI } from '../../data/fetch'
import { useQuery } from 'react-query'
import { ClipLoader } from 'react-spinners'

const Products = () => {
    const classes = useStyles()
    const [ProductList, setProductList] = React.useState<
        {
            name: string
            categoryId: string,
            categoryName: string
        }[]
    >([])
    const { isLoading: isLoadingProducts, error: errorProducts } = useQuery(
        'products',
        fetchProductsWithCategoryFromAPI,
        {
            onSuccess: (data) => {
                setProductList([])
                data.data.forEach((prod: any) => {
                    const product = {
                        name: prod.name,
                        categoryId: prod.category.id,
                        categoryName: prod.category.name
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
            return { name: prod.name, category: prod.categoryName,  }
        })
    }, [ProductList])

    if (isLoadingProducts)
        return (
            <Container className={classes.center}>
                <ClipLoader size={150} />
            </Container>
        )
    if (errorProducts)
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
