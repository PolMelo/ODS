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
import MenuItem from "@mui/material/MenuItem";
import { Tooltip, TooltipProps, styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ThemeSwitch from "./SwitcherThemeComponent";
import logo from "../assets/Logo_proyecto_ODSfera.png";
import { useUser } from "../context/UserContext"; // ✅ Hook del context

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
  { name: "Iniciar sesión", path: "/login" },
  { name: "Crear ODS", path: "/ODS" },
  { name: "Cerrar sesión", path: "/logout" },
  { name: "Registrate", path: "/signup" },
];

// Tooltip estilizado
const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background-color: #303030;
    color: white;
    padding: 8px 12px;
  }
`;

const NavBarComponent: React.FC<NavBarProps> = ({ darkMode, toggleTheme }) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const location = useLocation();

  // ✅ Obtenemos usuario desde UserContext
  const { user } = useUser();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElUser(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  // Contenido del tooltip del avatar
  const userTooltipContent = (
    <Box sx={{ textAlign: 'left' }}>
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{user.name}</Typography>
      <Typography variant="caption" sx={{ display: 'block', mt: '2px', opacity: 0.8 }}>{user.email}</Typography>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar disableGutters sx={{ px: 2 }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img src={logo} alt="ODSfera Logo" style={{ width: 55, height: 55, marginRight: 12 }} />
        </Link>

        {/* Menú mobile */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            {pages.map((page) => (
              <MenuItem
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  backgroundColor: location.pathname === page.path ? 'action.selected' : 'inherit',
                  '&:hover': { backgroundColor: location.pathname === page.path ? 'action.selected' : 'action.hover' },
                }}
              >
                <Link to={page.path} style={{ textDecoration: "none", color: "inherit" }}>
                  <Typography sx={{ textAlign: "center" }}>{page.name}</Typography>
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
                  px: 1,
                  minWidth: 'unset',
                  backgroundColor: isSelected ? 'action.selected' : 'transparent',
                  '&:hover': { backgroundColor: isSelected ? 'action.selected' : 'action.hover', opacity: isSelected ? 0.9 : 1 },
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
          <CustomTooltip title={userTooltipContent}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user.name} src={user.avatarUrl}>
                {!user.avatarUrl && user.name[0]}
              </Avatar>
            </IconButton>
          </CustomTooltip>
          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem sx={{ '&:hover': { backgroundColor: 'transparent' }, cursor: 'default', mb: 1 }}>
              <Box sx={{ textAlign: 'left', borderBottom: '1px solid', borderColor: 'divider', pb: 1, width: '100%' }}>
                <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>{user.name}</Typography>
                <Typography variant="caption" color="text.secondary">{user.email}</Typography>
              </Box>
            </MenuItem>
            {settings.map((setting) => (
              <MenuItem key={setting.name} onClick={handleCloseUserMenu} component={Link} to={setting.path}>
                <Typography sx={{ textAlign: "center" }}>{setting.name}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarComponent;
