import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Green [it]
        </Typography>
        <Button color="inherit" component={Link} to="/">Accueil</Button>
        <Button color="inherit" component={Link} to="/projets">Projets</Button>
        <Button color="inherit" component={Link} to="/references">Références</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
