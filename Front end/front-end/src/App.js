import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Green [it]
          </Typography>
          <Button color="inherit">Accueil</Button>
          <Button color="inherit">Projets</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      {/* Votre contenu ici */}
    </div>
  );
}

export default App;
