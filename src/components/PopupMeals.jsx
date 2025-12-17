import { Container, Stack, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../images/greenback1.jpg";
import { getAuthToken } from "../util/auth";
import NewItems from "./NewItems";

const API_URL = process.env.REACT_APP_API_URL;


const PopupMeals = () => {
  const location = useLocation();
  const data = location.state;

  const [category, setCategory] = useState(data?.name || "");
  const [mealItems, setMealItems] = useState([]);
  const [openNewItems, setOpenNewItems] = useState(false);
  const navigate = useNavigate();

  const getDate = () => {
    const today = new Date();
    return `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
  };
  const [currentDate] = useState(getDate());

  // додавање нов item
  const handleAddItem = (item) => {
    setMealItems((prev) => [...prev, item]);
  };

  // бришење item
  const handleRemoveItem = (index) => {
    setMealItems((prev) => prev.filter((_, i) => i !== index));
  };

  // SAVE MEAL -> директно fetch до backend
  const saveMeal = async () => {
    if (!category || mealItems.length === 0) {
      alert("Category and at least one item are required!");
      return;
    }

    const token = getAuthToken();

    await fetch(`${API_URL}/meals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        category,
        date: currentDate,
        mealItemList: mealItems,
      }),
    });

    navigate("/meals");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#EAFAC0",
        minHeight: "91vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, md: 0 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          py: { xs: 4, md: 6 },
        }}
      >
        <Stack rowGap={3} sx={{ width: "100%" }}>
          {/* CATEGORY */}
          <TextField
            fullWidth
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          {/* DATE */}
          <TextField fullWidth value={currentDate} disabled />

          {/* Add Meal Items */}
          <Button onClick={() => setOpenNewItems(!openNewItems)} sx={{ color: "green" }}>
            {openNewItems ? "Close New Items" : "Add New Item"}
          </Button>

          {openNewItems && <NewItems onAddItem={handleAddItem} />}

          {/* Preview of Meal Items */}
          {mealItems.length > 0 && (
            <Box sx={{ mt: 2 }}>
              {mealItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #ccc",
                    p: 1,
                    mb: 1,
                    borderRadius: 1,
                  }}
                >
                  <span>
                    {item.name} - {item.amount}g - {item.calories} kcal
                  </span>
                  <Button color="error" onClick={() => handleRemoveItem(index)}>
                    Remove
                  </Button>
                </Box>
              ))}
            </Box>
          )}

          {/* SAVE MEAL */}
          <Button
            fullWidth
            variant="contained"
            sx={{ backgroundColor: "green" }}
            onClick={saveMeal}
          >
            Save Meal
          </Button>

          <Button onClick={() => navigate(-1)} sx={{ color: "green" }}>
            Back
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default PopupMeals;
