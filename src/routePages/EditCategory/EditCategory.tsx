import React from 'react'
import { Typography } from '@mui/material'
import { Container } from 'react-bootstrap'
import { useStyles } from './styles'

const EditCategory = () => {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <Typography variant={'body1'} align={'center'}>
                EditCategory
            </Typography>
        </Container>
    )
}

export default EditCategory
