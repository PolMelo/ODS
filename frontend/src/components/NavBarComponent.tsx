import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../assets/Logo_proyecto_ODSfera.png";
import { Link } from "react-router-dom";
import ThemeSwitch from "./SwitcherThemeComponent";
import "./NavBarComponent.css";

const pages = [
  { name: "Inicio", path: "/" },
  { name: "Acciones", path: "/acciones" },
  { name: "Recursos", path: "/recursos" },
  { name: "Contacto", path: "/contacto" },
];

const settings = ["Iniciar sesion", "Account", "Dashboard", "Cerrar sesion"];

function NavBarComponent() {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ px: 2 }}>
        
        {/* Logo */}
        <img src={logo} alt="ODSfera Logo" className="navbar-logo" />

        {/* Título */}
        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/"
          className="navbar-title"
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          ODSfera
        </Typography>

        {/* Menú móvil */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-haspopup="true"
            onClick={(e) => setAnchorElNav(e.currentTarget)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={() => setAnchorElNav(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={() => setAnchorElNav(null)}>
                <Link to={page.path} className="navbar-mobile-link">
                  <Typography className="navbar-text-center">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

        {/* Menú Desktop */}
        <Box className="navbar-desktop-buttons" sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={Link}
              to={page.path}
              className="navbar-button"
            >
              {page.name}
            </Button>
          ))}
        </Box>

        <ThemeSwitch checked={darkMode} onChange={toggleTheme} />

        {/* Avatar Usuario */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton
              onClick={(e) => setAnchorElUser(e.currentTarget)}
              className="navbar-avatar"
            >
              <Avatar alt="User" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>

          <Menu
            className="navbar-user-menu"
            anchorEl={anchorElUser}
            open={Boolean(anchorElUser)}
            onClose={() => setAnchorElUser(null)}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={() => setAnchorElUser(null)}>
                <Typography className="navbar-text-center">
                  {setting}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarComponent;
