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
// 💡 Importación crucial: para los estilos dinámicos del tooltip
import { Tooltip, TooltipProps, styled } from "@mui/material"; 
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../assets/Logo_proyecto_ODSfera.png";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitch from "./SwitcherThemeComponent";

interface NavBarProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

interface UserData {
    name: string;
    email: string;
    avatarUrl: string;
}

const pages = [
    { name: "Inicio", path: "/" },
    { name: "Acciones", path: "/acciones" },
    { name: "Recursos", path: "/recursos" },
    { name: "Contacto", path: "/contacto" },
];

const settings = [
    { name: "Iniciar sesion", path: "/login" },
    { name: "Crear ODS", path: "/ODS" },
    { name: "Cerrar sesion", path: "/logout" },
    { name: "Registrate", path: "/signup"},
    
];

// 1. Estiliza Tooltip para aceptar contenido JSX
const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    /* Estilo de fondo más oscuro para el texto del usuario */
    background-color: #303030; 
    color: white;
    padding: 8px 12px;
  }
`;

function NavBarComponent({ darkMode, toggleTheme }: NavBarProps) {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    
    // USAR useLocation
    const location = useLocation(); 

    // 💡 NUEVA LÓGICA: Obtener el usuario de localStorage al inicio del componente
    const getCurrentUser = (): UserData => {
        try {
            const userString = localStorage.getItem('odsfera_user');
            if (userString) {
                // Parsear los datos si existen
                return JSON.parse(userString) as UserData;
            }
        } catch (error) {
            console.error("Error leyendo localStorage:", error);
        }
        
        // Usuario por defecto si no hay sesión o si hay un error
        return {
            name: "Invitado",
            email: "inicia.sesion@odsfera.com",
            avatarUrl: "",
        };
    };

    const currentUser = getCurrentUser(); // Los datos del usuario ahora provienen de localStorage

    // 💡 Contenido del Tooltip usando los datos de currentUser
    const userTooltipContent = (
        <Box sx={{ textAlign: 'left' }}>
            <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {currentUser.name}
            </Typography>
            <Typography variant="caption" sx={{ display: 'block', mt: '2px', opacity: 0.8 }}>
                {currentUser.email}
            </Typography>
        </Box>
    );

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
                </Typography>

                {/* Menú hamburguesa (móvil) */}
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
                        
                        return (
                            <Button
                                key={page.name}
                                component={Link}
                                to={page.path}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2,
                                    color: isSelected ? 'inherit' : 'inherit',
                                    display: "block",
                                    px: 1, 
                                    minWidth: 'unset',
                                    
                                    // ESTILO ACTIVO: Fondo gris claro como en tu ejemplo
                                    backgroundColor: isSelected ? 'action.selected' : 'transparent', 
                                    
                                    // Asegurar que el hover mantenga el fondo si está seleccionado
                                    '&:hover': {
                                        backgroundColor: isSelected ? 'action.selected' : 'action.hover',
                                        opacity: isSelected ? 0.9 : 1, 
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
                    {/* 💡 APLICACIÓN: Usar CustomTooltip con el contenido dinámico del usuario */}
                    <CustomTooltip title={userTooltipContent}>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar
                                alt={currentUser.name}
                                src={currentUser.avatarUrl}
                            >
                                {/* Muestra la inicial si no hay imagen */}
                                {!currentUser.avatarUrl && currentUser.name[0]} 
                            </Avatar>
                        </IconButton>
                    </CustomTooltip>
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
                        {/* Información del usuario en el menú desplegable (opcional) */}
                        <MenuItem sx={{ 
                            '&:hover': { backgroundColor: 'transparent' }, 
                            cursor: 'default',
                            mb: 1
                        }}>
                            <Box sx={{ 
                                textAlign: 'left', 
                                borderBottom: '1px solid', 
                                borderColor: 'divider', 
                                pb: 1, 
                                width: '100%' 
                            }}>
                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{currentUser.name}</Typography>
                                <Typography variant="caption" color="text.secondary">{currentUser.email}</Typography>
                            </Box>
                        </MenuItem>

                        {/* Opciones de configuración */}
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