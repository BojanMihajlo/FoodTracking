import { Container, Paper, Typography, Box, Button } from "@mui/material";
import image from "../greenback1.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const MealsPage = () => {
  const navigate = useNavigate();
  const toPopup = () => {
    navigate("popup");
  };

  const category = [
    { name: "Breakfast", url: "/breakfast" },
    { name: "Lunch", url: "/lunch" },
    { name: "Dinner", url: "/dinner" },
    { name: "Snack", url: "/snack" },
  ];

  return (
    <Container sx={{ marginTop: "10%" }}>
      <Paper
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Typography variant="h5" sx={{ fontFamily: " Salsa", padding: "4%" }}>
          Daily Entered Meals
        </Typography>
        <Box>
          {category.map((cat) => (
            <Link
              key={cat.name}
              style={{
                backgroundColor: "green",
                margin: "1%",
                color: "black",
                textDecoration: "none",
                padding: "1%",
                borderRadius: "10px",
              }}
              to="popup"
              state={{ cat }}
            >
              {cat.name}
            </Link>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default MealsPage;
