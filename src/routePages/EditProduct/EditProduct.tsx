import React from 'react'
import { Typography } from '@mui/material'
import { Container } from 'react-bootstrap'
import { useStyles } from './styles'

const EditProduct = () => {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <Typography variant={'body1'} align={'center'}>
                EditProduct
            </Typography>
        </Container>
    )
}

export default EditProduct
