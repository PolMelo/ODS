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
// IMPORTAR useLocation
import { Link, useLocation } from "react-router-dom"; 
import ThemeSwitch from "./SwitcherThemeComponent";

interface NavBarProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const pages = [
    { name: "Inicio", path: "/" },
    { name: "Acciones", path: "/acciones" },
    { name: "Recursos", path: "/recursos" },
    { name: "Contacto", path: "/contacto" },
];

const settings = [
    { name: "Iniciar sesion", path: "/login" },
    { name: "Cuenta", path: "/account" },
    { name: "Crear ODS", path: "/ODS" },
    { name: "Cerrar sesion", path: "/logout" },
    { name: "Registrate", path: "/signup"},
    
];

function NavBarComponent({ darkMode, toggleTheme }: NavBarProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    
    // USAR useLocation
    const location = useLocation(); 

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Toolbar disableGutters sx={{ px: 2 }}>
                {/* Logo */}

                <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                    <img
                        src={logo}
                        alt="ODSfera Logo"
                        style={{
                            width: 55,
                            height: 55,
                            marginRight: "12px",
                            display: "flex",
                        }}
                    />
                </Link>

                {/* Título móvil */}
                <Typography
                    variant="h5"
                    noWrap
                    component={Link}
                    to="/"
                    sx={{
                        mr: 2,
                        display: { xs: "flex", md: "none" },
                        flexGrow: 1,
                        fontFamily: "monospace",
                        fontWeight: 700,
                        letterSpacing: ".3rem",
                        color: "inherit",
                        textDecoration: "none",
                    }}
                >
                    ODSfera
                </Typography>

                {/* Menú hamburguesa (móvil) - Podrías aplicar la misma lógica aquí si quieres el marcado en el menú móvil. */}
                <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                    <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        {pages.map((page) => (
                            <MenuItem 
                                key={page.name} 
                                onClick={handleCloseNavMenu}
                                // Lógica de color de fondo para móvil
                                sx={{ 
                                    backgroundColor: location.pathname === page.path ? 'action.selected' : 'inherit',
                                    '&:hover': {
                                        backgroundColor: location.pathname === page.path ? 'action.selected' : 'action.hover',
                                    },
                                }}
                            >
                                <Link
                                    to={page.path}
                                    style={{
                                        textDecoration: "none",
                                        color: "inherit",
                                    }}
                                >
                                    <Typography sx={{ textAlign: "center" }}>
                                        {page.name}
                                    </Typography>
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

              

                {/* Menú desktop */}
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
                    {pages.map((page) => {
                        const isSelected = location.pathname === page.path;
                        
                        // NOTA: Para la ruta de inicio ("/") también marcará otros si estás en una sub-ruta (ej. "/acciones/sub"). 
                        // Si quieres un marcado exacto, usa: location.pathname === page.path
                        // Si quieres marcar la ruta principal y sus sub-rutas, usa: location.pathname.startsWith(page.path)
                        
                        return (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    // Estilos para el botón activo
                                    color: isSelected ? 'inherit' : 'inherit', // Mantener color de texto igual o cambiar
                                    display: "block",
                                    px: 1, 
                                    minWidth: 'unset',
                                    
                                    // ESTILO ACTIVO: Fondo gris claro como en tu ejemplo
                                    backgroundColor: isSelected ? 'action.selected' : 'transparent', 
                                    
                                    // Asegurar que el hover mantenga el fondo si está seleccionado
                                    '&:hover': {
                                        backgroundColor: isSelected ? 'action.selected' : 'action.hover',
                                        opacity: isSelected ? 0.9 : 1, // Ligeramente más oscuro en hover si ya está seleccionado
                                    },
                                }}
                            >
                                {page.name}
                            </Button>
                        );
                    })}
                </Box>

                {/* Switch de tema */}
                <ThemeSwitch checked={darkMode} onChange={toggleTheme} />

                {/* Avatar y menú usuario */}
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt="Usuario"
                                src="/static/images/avatar/2.jpg"
                            />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem
                                key={setting.name}
                                onClick={handleCloseUserMenu}
                                component={Link}
                                to={setting.path}
                            >
                                <Typography sx={{ textAlign: "center" }}>
                                    {setting.name}
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