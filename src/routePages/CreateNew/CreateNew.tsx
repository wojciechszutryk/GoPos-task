import React from 'react'
import { Container } from 'react-bootstrap'
import NewCategory from './NewCategory'
import NewProduct from './NewProduct'
import { useStyles } from './styles'

const CreateNew = () => {
    const classes = useStyles()
    return (
        <Container className={classes.center}>
            <NewCategory/>
            <NewProduct/>
        </Container>
    )
}

export default CreateNew
