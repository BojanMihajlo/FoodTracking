import {
  AppBar,
  Toolbar,
  Box,
  Stack,
  MenuItem,
  Typography,
  IconButton,
  Menu,
} from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isEntered = localStorage.getItem("isEntered");
  const firstName = localStorage.getItem("name");
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  const pages = [
    { name: "Home", url: "/", show: isEntered },
    { name: "Meals", url: "/meals", show: isEntered },
    { name: "Calendar", url: "/calendar", show: isEntered },
    { name: "Blog", url: "/blog", show: isEntered },
  ];

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ backgroundColor: "green" }}>
        <LunchDiningIcon sx={{ fontSize: 40, display: { xs: "none", md: "flex" } }} />

        <Typography sx={{ fontFamily: "'Salsa', cursive", px: 2 }}>
          {isEntered ? firstName : ""}
        </Typography>

        {/* MOBILE MENU */}
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, }}>
          {isEntered && (
            <>
              <IconButton color="inherit" onClick={handleOpenNavMenu}>
                <LunchDiningIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages
                  .filter((p) => p.show)
                  .map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <Typography
                        component={NavLink}
                        to={page.url}
                        sx={{
                          textDecoration: "none",
                          color: "black",
                          fontFamily: "'Salsa', cursive",
                          width: "100%",
                          "&.active": { color:"#b6e810"  },
                        }}
                      >
                        {page.name}
                      </Typography>
                    </MenuItem>
                  ))}

                <MenuItem onClick={logout}>
                  <Typography
                    sx={{
                      backgroundColor: "#08F91C",
                      px: 2,
                      borderRadius: 1,
                      color: "black",
                      fontFamily: "'Salsa', cursive",
                      textAlign: "center",
                      width: "100%",
                    }}
                  >
                    Logout
                  </Typography>
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>

        {/* DESKTOP MENU */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Stack direction="row" spacing={3}>
            {pages
              .filter((p) => p.show)
              .map((page) => (
                <Typography
                  key={page.name}
                  component={NavLink}
                  to={page.url}
                  sx={{
                    fontFamily: "'Salsa', cursive",
                    color: "white",
                    textDecoration: "none",
                    fontSize: 20,
                    "&.active": { color:"#b6e810" },
                  }}
                >
                  {page.name}
                </Typography>
              ))}

            {isEntered && (
              <Typography
                onClick={logout}
                sx={{
                  backgroundColor: "#b6e810",
                  px: 2,
                  borderRadius: 1,
                  fontSize: 18,
                  color: "black",
                  cursor: "pointer",
                  fontFamily: "'Salsa', cursive",
                }}
              >
                Logout
              </Typography>
            )}
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
