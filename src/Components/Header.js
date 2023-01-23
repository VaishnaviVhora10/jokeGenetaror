import React from 'react';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar bg="primary">
        <Nav.Item className='mx-auto'>Joke Generator</Nav.Item>
    </Navbar>
  )
}

export default Header