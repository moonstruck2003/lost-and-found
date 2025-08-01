import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return ( 
        <div>
            <Navbar expand="lg" style={{ backgroundColor: 'rgb(255, 248, 247)' }}>
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">LOST AND FOUND</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/">Profiles</Nav.Link>

                            <NavDropdown title="Dashboard" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/lost">FOUND</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/found">LOST</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Report Something?" id="navbarScrollingDropdown">
                                <NavDropdown.Item as={Link} to="/">Report FOUND</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/">Report LOST</NavDropdown.Item>
                            </NavDropdown>
                            
                            <Nav.Link as={Link} to="/sign-up" >SignUp</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default Navigation;