import {
  Box,
  Button,
  Container,
  Grid,
  Card,
  CardMedia,
  CardHeader,
  CardContent,
  CardActions,
  TextField,
  Typography,
  Autocomplete,
} from "@mui/material";
import Footer from "./Footer";
import HomeMeals from "./HomeMeals";
import FavoriteMeal from "./FavoriteMeal";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import image from "../images/heroback3.png";
import image1 from "../images/platefood.jpg";
import image2 from "../images/plate1.png";
import image3 from "../images/apple1.jpg";
import image4 from "../images/exercise.jpeg";
import image5 from "../images/kiwiback.jpg";
import { getAuthToken } from "../util/auth";

const API_URL = process.env.REACT_APP_API_URL;


const HomePage = () => {
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);

  // Fetch meals from backend
  useEffect(() => {
  fetch(`${API_URL}/meals`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAuthToken()}`,
    },
  })
    .then((res) => res.json())
    .then((data) => setMeals(data))
    .catch((err) => console.error(err));
}, []);


  // Prepare meal options for Autocomplete
  const mealOptions = meals.map((meal) => ({
    label: meal.mealItemList?.[0]?.name || "No name",
    _id: meal._id,
  }));

  return (
    <Box sx={{ backgroundColor: "#EAFAC0" }}>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "380px",
          borderBottomLeftRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        <Typography
          sx={{
            color: "whitesmoke",
            fontSize: { md: "60px", xs: "40px" },
            paddingTop: { md: "8%", xs: "25%" },
            fontFamily: "Salsa, cursive",
          }}
        >
          Food Tracking
        </Typography>

        <Box
          sx={{
            marginTop: "2%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         <Autocomplete
  disablePortal
  id="combo-box-demo"
  options={mealOptions}
  getOptionLabel={(option) => option.label}
  onChange={(event, value) => {
    if (value?._id) {
      
      navigate(`/meals/`);
    }
  }}
  sx={{
    width: { md: 350, xs: 250 },
    backgroundColor: "#dff7e0",
    borderRadius: "10px",
    border: "4px solid green",
  }}
  renderInput={(params) => <TextField {...params} label="Search meals" />}
/>

        </Box>
      </Box>

      {/* Yesterday Meals Section */}
      <Container sx={{ marginTop: "5%" }}>
        <Box
          sx={{
            display: { md: "flex", sm: "block" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <HomeMeals meals={meals} />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <img src={image2} alt="decorative plate" />
          </Box>
        </Box>
      </Container>

      {/* Quote Section */}
      <Grid
        sx={{
          backgroundImage: `url(${image5})`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "6%",
          height: "500px",
          borderTopRightRadius: "100px",
          borderTopLeftRadius: "100px",
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontFamily: "Salsa", textAlign: "center", padding: { md: "4%", xs: "12%" } }}
        >
          "Food is our common ground, a universal experience." - James Beard
        </Typography>
      </Grid>

      {/* Favorite Meal Section */}
      <FavoriteMeal />

      {/* Cards Section */}
      <Grid
        container
        spacing={{ xs: 2, md: 6 }}
        justifyContent="center"
        sx={{ padding: { xs: "8% 4%", md: "5%" } }}
      >
        {[
          { img: image1, title: "Premium recipes" },
          { img: image3, title: "Easy Tracking" },
          { img: image4, title: "Perfect exercises" },
        ].map((card, idx) => (
          <Grid item key={idx} xs={12} sm={6} md={4} display="flex" justifyContent="center">
            <Card elevation={5} sx={{ width: { xs: 280, sm: 300, md: 350 } }}>
              <CardMedia component="img" height={140} image={card.img} alt={card.title} />
              <CardHeader title={card.title} sx={{ textAlign: "center" }} />
              <CardContent>
                <Typography variant="body2" align="center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Link to="blog" style={{ padding: "4px", textDecoration: "none" }}>
                  MORE
                </Link>
                <Button color="secondary">Share</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        sx={{
          backgroundColor: "green",
          color: "white",
          display: "block",
          margin: "0 auto",
          mt: { xs: 6, md: 2 },
          mb: { xs: 4, md: 2 },
        }}
        onClick={() => navigate("/blog")}
      >
        More
      </Button>

      <Footer />
    </Box>
  );
};

export default HomePage;
