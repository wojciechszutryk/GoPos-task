import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Categories,
    EditCategory,
    EditProduct,
    Home,
    NewCategory,
    NewProduct,
    Products,
} from './routePages'

function App() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Lorem...</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#products/edit">
                                Edit Products
                            </Nav.Link>
                            <Nav.Link href="#products/new">
                                New Product
                            </Nav.Link>
                            <Nav.Link href="#categories">Categories</Nav.Link>
                            <Nav.Link href="#categories/edit">
                                Edit Categories
                            </Nav.Link>
                            <Nav.Link href="#categories/new">
                                New Category
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Router>
                <Switch>
                    <Route exact path="/products" component={Products} />
                    <Route exact path="/categories" component={Categories} />
                    <Route
                        exact
                        path="/products/edit"
                        component={EditProduct}
                    />
                    <Route
                        exact
                        path="/categories/edit"
                        component={EditCategory}
                    />
                    <Route exact path="/products/new" component={NewProduct} />
                    <Route
                        exact
                        path="/categories/new"
                        component={NewCategory}
                    />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </>
    )
}

export default App
