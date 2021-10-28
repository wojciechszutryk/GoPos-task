import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { MutationFunction, useMutation } from 'react-query'
import { createCategory } from '../../data/fetch'
import { useStyles } from './styles'

const NewCategory = () => {
    const classes = useStyles()
    const [newCategoryName, setNewCategoryName] =useState('')
    const newCategoryMutation = useMutation(
        createCategory as MutationFunction,
        {
            onSuccess: () => {
                setNewCategoryName('')
                alert('success')
            },
            onError: () => {
                alert('error')
            },
        }
    )

    const handleSetNewCategory = React.useCallback(
        (
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
            const newName = event.target.value
            setNewCategoryName(newName)
        },
        []
    )
    return (
        <Box className={classes.center}>
            <Typography variant={'body1'} align={'center'} gutterBottom>
                New Category
            </Typography>
            <TextField
                multiline
                placeholder={'name'}
                value={newCategoryName}
                onChange={(event) => handleSetNewCategory( event)}
            />
            <Button
                onClick={() =>
                    newCategoryMutation.mutate({
                        name: newCategoryName,
                    })
                }
            >
                <Typography>Save</Typography>
            </Button>
        </Box>
    )
}

export default NewCategory