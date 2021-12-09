import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect expand='sm' bg='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link as={Link} to='page1'>Page 1</Nav.Link>
                        <Nav.Link as={Link} to='page2'>Page 2</Nav.Link>
                        <Nav.Link as={Link} to='page3'>Page 3</Nav.Link>
                        <Nav.Link as={Link} to='page4'>Page 4</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {/* <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="page1">Home</Link>
            </li>
            <li>
              <Link to="/page2">About</Link>
            </li>
            <li>
              <Link to="/page3">Contact</Link>
            </li>            
            <li>
              <Link to="/page4">Contact</Link>
            </li>
          </ul>
        </nav>
      </div> */}
        </>
    );
}

export default Navigation
// https://medium.com/swlh/responsive-navbar-using-react-bootstrap-5e0e0bd33bd6