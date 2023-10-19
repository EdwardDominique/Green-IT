import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logo from '../pictures/logo.png';
import './Header.css';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: '#3E4B4C' }}>
        <img src={logo} class="image-classe" alt="logo" />
        <Button color="inherit" component={Link} to="/" style={{ fontSize: 'larger' }}>Accueil</Button>
        <Button color="inherit" component={Link} to="/projets" style={{ fontSize: 'larger' }}>Projets</Button>
        <Button color="inherit" component={Link} to="/references" style={{ fontSize: 'larger' }}>Références</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
