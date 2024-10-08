import { Navbar, Container ,Nav } from "react-bootstrap"
import Logo from '../photos/log.png'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux"
// import { store } from "../rtk/store";

export default function Navbarr(){

    const myCart =  useSelector((state)=>state.card.cart)


return (
<>
<Container>
    <Navbar expand="lg" className="nav"  >
    <Container>
    <Navbar.Brand>
        <Link to={"/"} className="link">
        <img
        alt=""
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        />
        </Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="outline-none">
        <Nav className="ms-auto">
        <Nav.Link>
            <Link to={"/home"} className="link">Home</Link>
        </Nav.Link>
        <Nav.Link>
            <Link to={"/products"} className="link">Products</Link>
        </Nav.Link>
        <Nav.Link  className="position-relative">
            <Link to={"/card"} className="link">Cart</Link>
            {myCart.length ? <span className="count">{myCart.length}</span> : null}
        </Nav.Link>
        </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>
</Container>
</>
)
}