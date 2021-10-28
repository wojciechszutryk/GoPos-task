import React, { useState } from 'react'
import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material'
import { Container } from 'react-bootstrap'
import { MutationFunction, useMutation, useQuery } from 'react-query'
import { ClipLoader } from 'react-spinners'
import {  createProduct, fetchCategoriesFromAPI } from '../../data/fetch'
import { useStyles } from './styles'

const NewProduct = () => {
    const [name, setName] =useState('')
    const [category, setCategory] = useState('')
    const classes = useStyles()
    const [allCategories, setAllCategories] = useState<{name:string, id:string}[]>([])
    const { isLoading: isLoadingCategories, error: errorCategories } = useQuery(
        'categoriesSelect',
        fetchCategoriesFromAPI,
        {
            onSuccess: (data) => {
                setAllCategories([])
                data.data.forEach((cat: any) => {
                    setAllCategories((allCategories) => [
                        ...allCategories,
                        { name: cat.name, id: cat.id },
                    ])
                })
            },
        }
    )
    const newCategoryMutation = useMutation(
        createProduct as MutationFunction,
        {
            onSuccess: () => {
                setName('')
                setCategory('')
                alert('success')
            },
            onError: () => {
                alert('error')
            },
        }
    )

    const handleCategoryChange = React.useCallback(
        (event: SelectChangeEvent<string>) => {
            const newCategoryId = event.target.value
            setCategory(newCategoryId)
        },
        []
    )
    const handleSetName = React.useCallback(
        (
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            const newName = event.target.value
            setName(newName)
        },
        []
    )

    if (isLoadingCategories)
        return (
            <Container className={classes.center}>
                <ClipLoader size={150} />
            </Container>
        )
    if (errorCategories)
        return <Box>An error has occurred</Box>
    return (
        <Box className={classes.center}>
            <Typography variant={'body1'} align={'center'} gutterBottom>
                New Product
            </Typography>
            <TextField
                sx={{
                    marginBottom:1,
                }}
                multiline
                placeholder={'name'}
                value={name}
                onChange={(event) => handleSetName( event)}
            />
            <FormControl>
                <InputLabel id="new_category">new Category</InputLabel>
                <Select
                    sx={{
                        width: 300,
                        marginBottom: 2,
                    }}
                    labelId="new_category_label"
                    id="new_category_select"
                    value={category}
                    label="new category"
                    onChange={(event) =>
                        handleCategoryChange(event)
                    }
                >
                    {allCategories.map(cat => <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>)}
                </Select>
            </FormControl>
            <Button
                onClick={() =>
                    newCategoryMutation.mutate({
                        name: name,
                        category_id: category,
                    })
                }
            >
                <Typography>Save</Typography>
            </Button>
        </Box>
    )
}

export default NewProduct