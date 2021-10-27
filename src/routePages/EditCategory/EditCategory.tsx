import React, { ReactNode, useMemo } from 'react'
import {
    Box,
    Button,
    Paper,
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
import { fetchCategoriesFromAPI, updateCategory } from '../../data/fetch'
import { ClipLoader } from 'react-spinners'

const EditCategories = () => {
    const classes = useStyles()
    const queryClient = useQueryClient()
    const [newCategoriesNames, setNewCategoriesNames] = React.useState<
        string[]
    >([])
    const [CategoriesList, setCategoriesList] = React.useState<
        { [key: string]: string }[]
    >([])
    const { isLoading: isLoadingCategories, error: errorCategories } = useQuery(
        'categoriesEdit',
        fetchCategoriesFromAPI,
        {
            onSuccess: (data) => {
                setCategoriesList([])
                setNewCategoriesNames((newCategoriesNames) => [
                    ...newCategoriesNames,
                    '',
                ])
                data.data.forEach((cat: any) => {
                    setCategoriesList((CategoriesList) => [
                        ...CategoriesList,
                        { name: cat.name, id: cat.id },
                    ])
                })
            },
        }
    )
    const editCategoryMutation = useMutation(
        updateCategory as MutationFunction,
        {
            onSuccess: () => {
                setNewCategoriesNames(Array(CategoriesList.length).fill(''))
                queryClient.invalidateQueries('categoriesEdit')
                alert('success')
            },
            onError: () => {
                alert('error')
            },
        }
    )

    const rowsHeader: string[] = useMemo(() => {
        const rowsHeader: string[] = []
        rowsHeader.push('name')
        rowsHeader.push('new name')
        rowsHeader.push('edit')
        return rowsHeader
    }, [])

    const handleSetNewCategory = React.useCallback(
        (
            index: number,
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            const newName = event.target.value
            const newCategoriesNamesCopy = [...newCategoriesNames]
            newCategoriesNamesCopy[index] = newName
            setNewCategoriesNames(newCategoriesNamesCopy)
        },
        [newCategoriesNames]
    )

    const rows: { [key: string]: ReactNode }[] = useMemo(() => {
        return CategoriesList.map((cat, index) => {
            return {
                name: <Typography>{cat.name}</Typography>,
                newName: (
                    <TextField
                        multiline
                        placeholder={cat.name}
                        value={newCategoriesNames[index]}
                        onChange={(event) => handleSetNewCategory(index, event)}
                    />
                ),
                save: (
                    <Button
                        onClick={() =>
                            editCategoryMutation.mutate({
                                id: cat.id,
                                name: newCategoriesNames[index],
                            })
                        }
                    >
                        {isLoadingCategories ? (
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
        editCategoryMutation,
        handleSetNewCategory,
        isLoadingCategories,
        newCategoriesNames,
    ])

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

export default EditCategories
