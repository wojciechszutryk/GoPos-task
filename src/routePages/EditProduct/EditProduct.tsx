import React, { ReactNode, useMemo } from 'react'
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from '@mui/material'
import {
    useMutation,
    useQuery,
    useQueryClient,
    MutationFunction,
} from 'react-query'
import { Container } from 'react-bootstrap'
import { useStyles } from './styles'
import {
    fetchProductsWithCategoryFromAPI,
    updateProduct,
    fetchCategoriesFromAPI
} from '../../data/fetch'
import { ClipLoader } from 'react-spinners'

const EditProducts = () => {
    const classes = useStyles()
    const queryClient = useQueryClient()
    const [newProductsData, setNewProductsData] = React.useState<
        { category_id: string; name: string; id: string }[]
    >([])
    const [productsData, setProductsData] = React.useState<
        { category: string; name: string; id: string }[]
    >([])
    const [CategoriesList, setCategoriesList] = React.useState<
        { id: string; name: string }[]
    >([])
    const { isLoading: isLoadingProducts, error: errorProducts } = useQuery(
        'productsEdit',
        fetchProductsWithCategoryFromAPI,
        {
            onSuccess: (data) => {
                setProductsData([])
                setNewProductsData([])
                data.data.forEach((prod: any) => {
                    setProductsData((productsData) => [
                        ...productsData,
                        {
                            name: prod.name,
                            category: prod.category.name,
                            id: prod.id,
                        },
                    ])
                    setNewProductsData((newProductsData) => [
                        ...newProductsData,
                        { category_id: '', name: '', id: prod.id },
                    ])
                })
            },
        }
    )
    const { isLoading: isLoadingCategories, error: errorCategories } = useQuery(
        'categoriesSelect',
        fetchCategoriesFromAPI,
        {
            onSuccess: (data) => {
                setCategoriesList([])
                data.data.forEach((cat: any) => {
                    setCategoriesList((CategoriesList) => [
                        ...CategoriesList,
                        { name: cat.name, id: cat.id },
                    ])
                })
            },
        }
    )
    const editProductMutation = useMutation(updateProduct as MutationFunction, {
        onSuccess: () => {
            setNewProductsData(
                Array(newProductsData.length).fill({
                    category_id: '',
                    name: '',
                    id: '',
                })
            )
            queryClient.invalidateQueries('productsEdit')
            alert('success')
        },
        onError: () => {
            alert('error')
        },
    })

    const rowsHeader: string[] = useMemo(() => {
        const rowsHeader: string[] = []
        rowsHeader.push('name')
        rowsHeader.push('category')
        rowsHeader.push('new name')
        rowsHeader.push('new category')
        rowsHeader.push('edit')
        return rowsHeader
    }, [])

    const handleSetNewProductName = React.useCallback(
        (
            index: number,
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            const newName = event.target.value
            const newProductsDataCopy = [...newProductsData]
            newProductsDataCopy[index].name = newName
            setNewProductsData(newProductsDataCopy)
        },
        [newProductsData]
    )

    const handleNewCategoryChange = React.useCallback(
        (index: number, event: SelectChangeEvent<string>) => {
            const newCategoryId = event.target.value
            const newProductsDataCopy = [...newProductsData]
            newProductsDataCopy[index].category_id = newCategoryId.toString()
            setNewProductsData(newProductsDataCopy)
        },
        [newProductsData]
    )

    const rows: { [key: string]: ReactNode }[] = useMemo(() => {
        return productsData.map(({ name, category, id }, index) => {
            return {
                name: <Typography>{name}</Typography>,
                category: (
                    <Typography>
                        {category}
                    </Typography>
                ),
                newName: (
                    <TextField
                        multiline
                        placeholder={name}
                        value={newProductsData[index]?.name ?? null}
                        onChange={(event) =>
                            handleSetNewProductName(index, event)
                        }
                    />
                ),
                newCategory: (
                    <FormControl>
                        <InputLabel id="new_category">new Category</InputLabel>
                        <Select
                            sx={{
                                width: 300,
                            }}
                            labelId="new_category_label"
                            id="new_category_select"
                            value={newProductsData[index]?.category_id ?? null}
                            label="new category"
                            onChange={(event) =>
                                handleNewCategoryChange(index, event)
                            }
                        >
                            {CategoriesList.map(cat => <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>)}
                        </Select>
                    </FormControl>
                ),
                save: (
                    <Button
                        onClick={() =>
                            editProductMutation.mutate({
                                id: newProductsData[index].id,
                                name: newProductsData[index].name,
                                category_id: newProductsData[index].category_id,
                            })
                        }
                    >
                        {isLoadingProducts ? (
                            <ClipLoader />
                        ) : (
                            <Typography>Save</Typography>
                        )}
                    </Button>
                ),
            }
        })
    }, [
        CategoriesList,
        isLoadingProducts,
        newProductsData,
        productsData,
        handleSetNewProductName,
        editProductMutation,
        handleNewCategoryChange,
    ])

    if (isLoadingProducts || isLoadingCategories)
        return (
            <Container className={classes.center}>
                <ClipLoader size={150} />
            </Container>
        )
    if (errorProducts || errorCategories)
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

export default EditProducts
