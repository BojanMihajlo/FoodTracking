import { Stack, TextField, Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuthToken } from "../util/auth";

const API_URL = process.env.REACT_APP_API_URL;

 
const EditMeals = ({ meals, setOpenEdit }) => {
  const navigate = useNavigate();
  const token = getAuthToken();

  // State for category and date
  const [category, setCategory] = useState(meals.category || "");
  const [date, setDate] = useState(meals.date || "");

  // State for all meal items
  const [mealItems, setMealItems] = useState(
    meals.mealItemList?.map(item => ({
      name: item.name || "",
      amount: item.amount || "",
      carbohydrate: item.carbohydrate || "",
      protein: item.protein || "",
      fat: item.fat || "",
      calories: item.calories || "",
    })) || []
  );

  // Adding new meal
  const addMealItem = () => {
    setMealItems([
      ...mealItems,
      { name: "", amount: "", carbohydrate: "", protein: "", fat: "", calories: "" }
    ]);
  };

  // Remove meal item
  const removeMealItem = (index) => {
    const newItems = [...mealItems];
    newItems.splice(index, 1);
    setMealItems(newItems);
  };

  // PATCH update на meal
  const editMeals = async () => {
  await fetch(`${API_URL}/meals/${meals._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        category,
        date,
        mealItemList: mealItems.map(item => ({
          name: item.name,
          amount: Number(item.amount),
          carbohydrate: Number(item.carbohydrate),
          protein: Number(item.protein),
          fat: Number(item.fat),
          calories: Number(item.calories),
        })),
      }),
    });

    setOpenEdit(false);
    navigate("/meals");
  };

  return (
    <Container sx={{ width: "60%", mt: 2, mb: 4 }}>
      <Stack gap={2}>
        <TextField
          label="Category"
          variant="standard"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <TextField
          label="Date"
          variant="standard"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <Typography variant="h6" sx={{ mt: 2 }}>Meal Items</Typography>

        {mealItems.map((item, index) => (
          <Box key={index} sx={{ border: "1px solid #ccc", p: 2, borderRadius: 1, mb: 2 }}>
            <Stack gap={1}>
              <TextField
                label="Name"
                variant="standard"
                value={item.name}
                onChange={(e) => {
                  const newItems = [...mealItems];
                  newItems[index].name = e.target.value;
                  setMealItems(newItems);
                }}
              />
              <TextField
                label="Amount"
                variant="standard"
                value={item.amount}
                onChange={(e) => {
                  const newItems = [...mealItems];
                  newItems[index].amount = e.target.value;
                  setMealItems(newItems);
                }}
              />
              <TextField
                label="Carbohydrate"
                variant="standard"
                value={item.carbohydrate}
                onChange={(e) => {
                  const newItems = [...mealItems];
                  newItems[index].carbohydrate = e.target.value;
                  setMealItems(newItems);
                }}
              />
              <TextField
                label="Protein"
                variant="standard"
                value={item.protein}
                onChange={(e) => {
                  const newItems = [...mealItems];
                  newItems[index].protein = e.target.value;
                  setMealItems(newItems);
                }}
              />
              <TextField
                label="Fat"
                variant="standard"
                value={item.fat}
                onChange={(e) => {
                  const newItems = [...mealItems];
                  newItems[index].fat = e.target.value;
                  setMealItems(newItems);
                }}
              />
              <TextField
                label="Calories"
                variant="standard"
                value={item.calories}
                onChange={(e) => {
                  const newItems = [...mealItems];
                  newItems[index].calories = e.target.value;
                  setMealItems(newItems);
                }}
              />

              <Button
                variant="outlined"
                color="error"
                sx={{ mt: 1 }}
                onClick={() => removeMealItem(index)}
              >
                Remove Item
              </Button>
            </Stack>
          </Box>
        ))}

        <Button variant="contained" onClick={addMealItem} sx={{ backgroundColor: "green" }}>
          Add Meal Item
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#c3edbe", color: "black", mt: 2 }}
          onClick={editMeals}
        >
          Update Meal
        </Button>
      </Stack>
    </Container>
  );
};

export default EditMeals;
