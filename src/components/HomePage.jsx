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
} from "@mui/material";
import Footer from "./Footer";
import image from "../heroback3.png";
import image1 from "../platefood.jpg";
import image2 from "../plate1.jpg";
import image3 from "../apple1.jpg";
import image4 from "../exercise.jpeg";
import image5 from "../kiwiback.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [description, setDescription] = useState("");
  const [desc, setDesc] = useState([]);

  const getFile = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };
  const deleteFile = () => {
    setFile();
    setDesc("");
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const saveDescription = (text) => {
    setDesc(...desc, description, text);

    setDescription("");
    console.log(desc);
  };

  const toMealsPage = () => {
    navigate("meals");
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginTop: "4.2%",
          height: "380px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "whitesmoke",
            paddingTop: "8%",
            fontFamily: " Salsa, cursive",
          }}
        >
          Food Tracking
        </Typography>
        <Box
          sx={{
            marginTop: "2%",
          }}
        >
          <TextField
            placeholder="Search Meal..."
            sx={{
              backgroundColor: "#c6f7c6",
              borderStartStartRadius: "5px",
              borderBottomLeftRadius: "5px",
            }}
          />
          <Button
            sx={{
              backgroundColor: "limegreen",
              padding: "1.05%",
              color: "black",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Container
        sx={{
          marginTop: "5%",
        }}
      >
        <Box
          sx={{
            display: { md: "flex", sm: "block" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              border: "5px solid green",
              borderRadius: "5px",
              padding: "4%",
              height: "300px",
            }}
          >
            <Typography variant="h4" sx={{ fontFamily: " Salsa, cursive" }}>
              Your Meals
            </Typography>

            <Typography variant="body1">
              "No meals entered. Head over to the tracker to enter a meal"
            </Typography>
            <Button
              sx={{ backgroundColor: "green", color: "black" }}
              onClick={toMealsPage}
            >
              Enter your daily meal
            </Button>
          </Box>
          <Box>
            <img src={`${image2}`} />
          </Box>
        </Box>
      </Container>

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
          sx={{ fontFamily: " Salsa", textAlign: "center", paddingTop: "5%" }}
        >
          "Lorem ipsum dolor sit amet consectetur, corporis animi, odit quidem
          tenetur?"
        </Typography>
      </Grid>

      {/* green section */}

      <Grid
        sx={{
          marginBottom: "4%",
          backgroundColor: "#dff2ee",
          padding: "6%",
          borderBottomLeftRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontFamily: " Salsa", marginBottom: "3%" }}
        >
          Your Favourite Meal
        </Typography>
        <Box
          sx={{
            display: { md: "flex", sm: "block" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ border: "3px solid green", paddingTop: "2%" }}
            width="380px"
            height="380px"
          >
            <img src={file} width="350px" height="350px" />
          </Box>
          <Box sx={{ margin: "8%" }}>
            <Typography variant="h6" sx={{ fontFamily: " Salsa" }}>
              {desc}
            </Typography>
          </Box>
          <Box sx={{ flexDirection: "row" }}>
            <Box>
              <input type="file" onChange={getFile}></input>

              <Button onClick={deleteFile} sx={{ backgroundColor: "green" }}>
                Delete
              </Button>
            </Box>
            <Box>
              <TextField
                placeholder="Meal description.."
                onChange={descriptionHandler}
                value={description}
                type="text"
              />
              <Button onClick={saveDescription}>Save</Button>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* favourite meal section */}

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5%",
          padding: "5%",
        }}
      >
        <Box
          item
          width={350}
          height={350}
          sx={{ marginTop: "2%", flexDirection: { xs: "column", md: "row" } }}
        >
          <Card elevation={5}>
            <CardMedia
              component="img"
              height={150}
              image={image1}
              alt="platefood"
            />
            <CardHeader title="Premium recipes" />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                assumenda blanditiis cumque, eaque fuga numquam possimus quas
                quibusdam quis voluptas? A aliquam assumenda cum fugiat ipsa
                minus nisi officia voluptates!
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Box>
        <Grid
          item
          width={350}
          height={350}
          sx={{ marginTop: "2%", flexDirection: { xs: "column", md: "row" } }}
        >
          <Card elevation={5}>
            <CardMedia
              component="img"
              height={150}
              image={image3}
              alt="apple"
            />
            <CardHeader title="Easy Tracking" />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                assumenda blanditiis cumque, eaque fuga numquam possimus quas
                quibusdam quis voluptas? A aliquam assumenda cum fugiat ipsa
                minus nisi officia voluptates!
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          width={350}
          height={350}
          sx={{ marginTop: "2%", flexDirection: { xs: "column", md: "row" } }}
        >
          <Card elevation={5}>
            <CardMedia
              component="img"
              height={150}
              image={image4}
              alt="platefood"
            />
            <CardHeader title="Perfect exercises" />
            <CardContent>
              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                assumenda blanditiis cumque, eaque fuga numquam possimus quas
                quibusdam quis voluptas? A aliquam assumenda cum fugiat ipsa
                minus nisi officia voluptates!
              </Typography>
            </CardContent>
            <CardActions>
              <Button color="secondary">more</Button>
              <Button color="secondary">Share</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      {/* card content section */}
      <Footer />
    </>
  );
};

export default HomePage;
