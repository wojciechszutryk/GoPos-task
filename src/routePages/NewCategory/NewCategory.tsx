import React from 'react'
import { Typography } from '@mui/material'
import { Container } from 'react-bootstrap'
import { useStyles } from './styles'

const NewCategory = () => {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <Typography variant={'body1'} align={'center'}>
                NewCategory
            </Typography>
        </Container>
    )
}

export default NewCategory
