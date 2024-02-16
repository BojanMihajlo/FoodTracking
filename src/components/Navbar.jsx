import { AppBar, Toolbar, Box, Stack, Button, MenuItem } from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const pages = [
  { name: "Home", url: "/" },
  { name: "Meals", url: "meals" },
  { name: "Calendar", url: "calendar" },
  { name: "Blog", url: "blog" },
];

const Navbar = (props) => {
  const navigate = useNavigate();

  const saved = localStorage.getItem("email");

  // const toLogin = () => {
  //   navigate("auth");
  // };
  const logout = () => {
    localStorage.removeItem("email");
  };
  return (
    <AppBar>
      <Toolbar sx={{ backgroundColor: "green" }}>
        <LunchDiningIcon sx={{ fontSize: "40px" }} />
        <Box sx={{ flexGrow: 0.9 }}></Box>
        <Stack direction="row">
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <NavLink
                key={page.name}
                to={page.url}
                style={({ isActive }) => ({
                  color: "white",
                  textDecoration: isActive ? "underline" : "none",
                  fontSize: "20px",
                  marginRight: "10%",
                })}
              >
                {page.name}
              </NavLink>
            ))}
            {!saved ? (
              <NavLink
                to="auth"
                style={{
                  backgroundColor: "#08F91C",
                  textDecoration: "none",
                  padding: "3%",
                  borderRadius: "5px",
                  fontSize: "px",
                  color: "black",
                }}
              >
                Login
              </NavLink>
            ) : (
              <NavLink
                style={{
                  backgroundColor: "#08F91C",
                  textDecoration: "none",
                  padding: "3%",
                  borderRadius: "5px",
                  fontSize: "18px",
                  color: "black",
                }}
                onClick={logout}
              >
                Logout
              </NavLink>
            )}
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
