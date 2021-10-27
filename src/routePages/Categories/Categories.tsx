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
import { fetchCategoriesFromAPI } from '../../data/fetch'
import { useQuery } from 'react-query'
import { ClipLoader } from 'react-spinners'

const Categories = () => {
    const classes = useStyles()
    const [CategoriesList, setCategoriesList] = React.useState<string[]>([])
    const { isLoading: isLoadingCategories, error: errorCategories } = useQuery(
        'categoriesList',
        fetchCategoriesFromAPI,
        {
            onSuccess: (data) => {
                setCategoriesList([])
                data.data.forEach((cat: any) => {
                    setCategoriesList((CategoriesList) => [
                        ...CategoriesList,
                        cat.name,
                    ])
                })
            },
        }
    )

    const rowsHeader: string[] = useMemo(() => {
        const rowsHeader: string[] = []
        rowsHeader.push('category')
        return rowsHeader
    }, [])

    const rows: { [key: string]: null | string }[] = useMemo(() => {
        return CategoriesList.map((cat) => {
            return { name: cat }
        })
    }, [CategoriesList])

    if (isLoadingCategories)
        return (
            <Container className={classes.center}>
                <ClipLoader size={150} />
            </Container>
        )
    if (errorCategories) return <Box>An error has occurred</Box>

    return (
        <Container className={classes.center}>
            <Typography variant={'h2'} align={'center'}>
                Categories list:
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

export default Categories
