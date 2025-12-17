import { Grid } from "@mui/material";
import image from "../images/backbrokuli.jpg";

const FavoriteMeal = () => {
  return (
    <Grid
      sx={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "650px",
        borderBottomRightRadius: "100px",
        borderBottomLeftRadius: "100px",
      }}
    ></Grid>
  );
};

export default FavoriteMeal;
