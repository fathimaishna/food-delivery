import react from "react";
import {Container,Nav,Navbar,NavDropdown} from "react-bootstrap";
import "../../styles/HeaderStyle.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";


function Header(){
    return(
    <Header>
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Link>
          <img src={Logo} alt="logo" className="img-fluid"/>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
           <Nav.Link as={Link} to="/">
             Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
             About
            </Nav.Link>
            <Nav.Link as={Link} to="menu/">
             our menu
            </Nav.Link>
            <Nav.Link as={Link} to="blog/">
             Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
             Contact
            </Nav.Link>
            
            
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
           

            <Nav.Link as={Link} to="/">
             <div className="cart">
             <i class="bi bi-bag fs-5"></i>
             <em className="roundPoint">2</em>
             </div>
             
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </Header>
    );
}

export default Header;
