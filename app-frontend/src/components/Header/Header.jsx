import React from 'react';
import {Button, Navbar,NavDropdown,Nav,Form,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";

function Header(){
    return(
        <header className="hebNav">
 <Navbar bg="light" expand="lg" >
  <Navbar.Brand href="#home">We-Clean</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav "  />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="mr-auto text-right ">
      <Nav.Link className="home " href="#home">| דף הבית</Nav.Link>
      <Nav.Link className="about " href="#link"> אודות</Nav.Link>
      <Nav.Link className="registration " href="#link">| הרשמה</Nav.Link>
      <Nav.Link className="login " href="#link">| התחברות</Nav.Link>
      {/* <NavDropdown className="account" title="חשבון" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">התחברות</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">הרשמה</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form> */}
  </Navbar.Collapse>
</Navbar>

        </header>
    );
}

export default Header;