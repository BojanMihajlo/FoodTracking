import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";

const NewItems = ({ onAddItem }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [carbohydrate, setCarbohydrate] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [calories, setCalories] = useState("");

  const addItem = () => {
    if (!name || !amount) return; // базична валидација

    onAddItem({
      name,
      amount,
      carbohydrate,
      protein,
      fat,
      calories,
    });

    // reset fields
    setName("");
    setAmount("");
    setCarbohydrate("");
    setProtein("");
    setFat("");
    setCalories("");
  };

  return (
    <Box sx={{ mt: 2, mb: 2, border: "1px solid #ccc", p: 2, borderRadius: 1 }}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        label="Amount (g)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        label="Carbohydrate"
        value={carbohydrate}
        onChange={(e) => setCarbohydrate(e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        label="Protein"
        value={protein}
        onChange={(e) => setProtein(e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        label="Fat"
        value={fat}
        onChange={(e) => setFat(e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />
      <TextField
        label="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        fullWidth
        sx={{ mb: 1 }}
      />

      <Button variant="contained" color="success" onClick={addItem}>
        Add Item
      </Button>
    </Box>
  );
};

export default NewItems;
