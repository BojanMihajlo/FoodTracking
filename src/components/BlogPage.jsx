import {
  Box,
  Grid,
  Typography,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  CardHeader,
  Container,
} from "@mui/material";
import image from "../images/blogback1.jpg";
import image1 from "../images/platefood.jpg";
import image3 from "../images/apple1.jpg";
import image4 from "../images/exercise.jpeg";
import image2 from "../images/recipe1.jpg";
import image5 from "../images/blueberyblog.jpg";
import image6 from "../images/recipe2.jpg";
import Footer from "./Footer";

const BlogPage = () => {
  return (
    <Box sx={{ backgroundColor: "#dff7e0" }}>
      {/* HERO */}
      <Box
        sx={{
          p: "4%",
          backgroundImage: `linear-gradient(rgba(0,155,0,0.4), rgba(0,155,0,0.4)), url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 240,
          borderBottomLeftRadius:"100px",
          borderBottomRightRadius:"100px"
        }}
      >
        <Typography
          sx={{
            fontFamily: "Salsa",
            mt: { xs: "15%", md: "5%" },
            color: "white",
            fontSize: { xs: 30, md: 65 },
            textShadow: "2px 2px 2px black",
          }}
        >
          Welcome To Our Blog
        </Typography>
        <Typography
          sx={{
            fontFamily: "Salsa",
            color: "white",
            fontSize: { xs: 18, md: 25 },
            textShadow: "2px 2px 2px green",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Typography>
      </Box>

      {/* RECENT POSTS */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Salsa", mb: 4 }}
        >
          Recent blog posts
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* BIG CARD */}
          <Grid item xs={12} md={7}>
            <Card elevation={5}>
              <CardMedia component="img" image={image2} />
              <CardHeader title="New recipe" />
              <CardContent>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="secondary">More</Button>
                <Button color="secondary">Share</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* RIGHT SMALL CARDS (DESKTOP) */}
          <Grid item xs={12} md={5}>
            <Grid container spacing={4}>
              {[image1, image5].map((img, i) => (
                <Grid item xs={12} key={i}>
                  <Card elevation={5} sx={{ display: "flex" }}>
                    <Box sx={{ flex: 1 }}>
                      <CardContent>
                        <Typography variant="h6">
                          New recipe
                        </Typography>
                        <Typography variant="body2">
                          Lorem ipsum dolor sit amet consectetur.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button color="secondary">More</Button>
                        <Button color="secondary">Share</Button>
                      </CardActions>
                    </Box>
                    <CardMedia
                      component="img"
                      image={img}
                      sx={{ width: 200 }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* ALL POSTS */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Salsa", mb: 4 }}
        >
          All posts
        </Typography>

        {/* FIRST ROW */}
        <Grid container spacing={4} justifyContent="center">
          {[image1, image, image4].map((img, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
            >
              <Card sx={{ width: 350 }} elevation={5}>
                <CardMedia component="img" height={150} image={img} />
                <CardHeader title="Blog post" />
                <CardContent>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="secondary">More</Button>
                  <Button color="secondary">Share</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* SECOND ROW */}
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {[image6, image3, image5].map((img, i) => (
            <Grid
              key={i}
              item
              xs={12}
              sm={6}
              md={4}
              display="flex"
              justifyContent="center"
            >
              <Card sx={{ width: 350 }} elevation={5}>
                <CardMedia component="img" height={150} image={img} />
                <CardHeader title="Blog post" />
                <CardContent>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button color="secondary">More</Button>
                  <Button color="secondary">Share</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* FOOTER */}
      <Box sx={{ textAlign: "center", my: 6 }}>
        <Button sx={{ backgroundColor: "green", color: "white" }}>
          See more
        </Button>
      </Box>

      <Footer />
    </Box>
  );
};

export default BlogPage;
