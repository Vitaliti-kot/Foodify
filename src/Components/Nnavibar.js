import React, { useState } from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import MyModal from "./Modal/Mmodal";

export default function NaviBar(props)
{
    const [modalActive, setModalActive] = useState(false);
    const isVisible = props.isvisible;
    return(
    <>
    <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navLinks">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/favourites">Favourites</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Button variant={isVisible} className={isVisible} onClick={()=>setModalActive(true)}>Add custom dish</Button>
    </Navbar>
    <MyModal active={modalActive} setActive={setModalActive}></MyModal>
    </>
    )
}