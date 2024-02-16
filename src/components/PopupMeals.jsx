import { Container, Stack, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Form, useLocation } from "react-router-dom";
import image from "../greenback1.jpg";

const PopupMeals = () => {
  const [foodDescription, setFoodDescription] = useState("");
  const [drinkDescription, setDrinkDescription] = useState("");
  const location = useLocation();
  const data = location.state;

  const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  };

  const [currentDate, setCurrentDate] = useState(getDate());

  const onChangeFoodDescriptionHandler = (event) => {
    setFoodDescription(event.target.value);
  };
  const onChangeDrinkDescriptionHandler = (event) => {
    setDrinkDescription(event.target.value);
  };

  return (
    <Container
      sx={{
        marginTop: "8%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "2%",
        borderRadius: "5px",
      }}
    >
      <Form method="post">
        <Stack alignItems="center" width="50%" rowGap={5} mt={5}>
          <Typography variant="h5" sx={{ fontFamily: " Salsa" }}>
            {data.cat.name}
          </Typography>
          <Typography>Date:{currentDate}</Typography>

          <TextField
            label="Food Description"
            variant="standard"
            multiline
            rows={3}
            fullWidth
            value={foodDescription}
            onChange={onChangeFoodDescriptionHandler}
            name="foodDescription"
          />
          <TextField
            label="Drink Description"
            variant="standard"
            multiline
            rows={3}
            fullWidth
            value={drinkDescription}
            onChange={onChangeDrinkDescriptionHandler}
            name="drinkDescription"
          />
          <Button variant="contained" type="submit">
            Save meal
          </Button>
        </Stack>
      </Form>
    </Container>
  );
};

export default PopupMeals;
