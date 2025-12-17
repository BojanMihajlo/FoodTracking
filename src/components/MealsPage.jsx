import { Container, Paper, Typography, Box, Grid } from "@mui/material";
import image from "../images/greenback1.jpg";
import { getAuthToken } from "../util/auth";
import { Link, useLoaderData } from "react-router-dom";

import MealsCard from "./MealsCard";

const API_URL = process.env.REACT_APP_API_URL;


const MealsPage = () => {
  const data = useLoaderData();
  const meals = data || []; 

  const category = [
    { name: "Breakfast", id: 1 },
    { name: "Lunch", id: 2 },
    { name: "Dinner", id: 3 },
    { name: "Snack", id: 4 },
  ];

  return (
    <Box sx={{ backgroundColor: "#EAFAC0" }}>
      <Container sx={{ paddingTop: { md: "5%", xs: "18%" } }}>
        <Paper
          sx={{
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Typography
            sx={{
              padding: "4%",
              fontSize: { md: "60px", xs: "25px" },
              fontFamily: "Salsa, cursive",
            }}
          >
            Daily Entered Meals
          </Typography>
          <Box>
            {category.map((cat) => (
              <Link
                key={cat.id}
                style={{
                  backgroundColor: "green",
                  margin: "1%",
                  color: "white",
                  textDecoration: "none",
                  padding: "1.5%",
                  borderRadius: "10px",
                  fontFamily: "Salsa, cursive",
                }}
                to="popup"
                state={cat}
              >
                {cat.name}
              </Link>
            ))}
          </Box>
        </Paper>
      </Container>

      <Grid
        sx={{
          marginTop: "5%",
          backgroundColor: "#c3edbe",
          borderTopLeftRadius: "50px",
          borderTopRightRadius: "50px",
          minHeight: "50vh",
          paddingBottom: "3%",
        }}
      >
        <Typography
          sx={{
            padding: "2% 0",
            fontSize: { md: "60px", xs: "35px" },
            textAlign: "center",
            fontFamily: "Salsa, cursive",
          }}
        >
          Meals
        </Typography>

        <Container>
          {meals.length > 0 ? (
            meals.map((meal) => (
              <Box
                key={meal._id}
                sx={{
                  backgroundColor: "green",
                  borderRadius: "10px",
                  padding: "1%",
                  margin: "1% 0",
                }}
              >
                <Grid>
                  <MealsCard meals={meal} />
                </Grid>
              </Box>
            ))
          ) : (
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { md: "30px", xs: "20px" },
                padding: "5%",
                color: "darkgreen",
                fontFamily: "Salsa, cursive",
              }}
            >
              No meals entered.
            </Typography>
          )}
        </Container>
      </Grid>
    </Box>
  );
};

export default MealsPage;

export const loader = () => {
  const token = getAuthToken();
  return fetch(`${API_URL}/meals`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => res.json());
};
