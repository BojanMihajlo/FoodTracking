import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
} from "@mui/material";
import { useState } from "react";
import { getAuthToken } from "../util/auth";
import { useNavigate } from "react-router-dom";
import EditMeals from "./EditMeals";

const API_URL = process.env.REACT_APP_API_URL;


const MealsCard = ({ meals }) => {
  const navigate = useNavigate();
  const token = getAuthToken();
  const [openEdit, setOpenEdit] = useState(false);

  // Delete meal
 const deleteMeals = (id) => {
  fetch(`${API_URL}/meals/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(() => {
      navigate("/meals");
    })
    .catch((err) => {
      console.error("Error deleting meal:", err);
    });
};


  const mealId = meals._id || meals.id;

  // Sum of all values
  const totals = meals.mealItemList?.reduce(
    (acc, item) => {
      acc.calories += Number(item.calories) || 0;
      acc.protein += Number(item.protein) || 0;
      acc.fat += Number(item.fat) || 0;
      acc.carbohydrate += Number(item.carbohydrate) || 0;
      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbohydrate: 0 }
  );

  return (
    <>
      <Card sx={{ backgroundColor: "#fff299", mb: 2 }}>
        <CardContent>
          {/* CATEGORY & DATE */}
          <Box sx={{ display: "flex", gap: "5%" }}>
            <Typography variant="h5" sx={{ fontFamily: "Salsa" }}>
              {meals.category || "No category"}
            </Typography>
            <Typography variant="body1">{meals.date || "-"}</Typography>
          </Box>

          {/* ALL MEAL ITEMS */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              mt: 2,
            }}
          >
            {meals.mealItemList && meals.mealItemList.length > 0 ? (
              meals.mealItemList.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 1,
                    p: 1,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "Salsa", fontWeight: "bold" }}
                  >
                    {item.name || "-"}
                  </Typography>
                  <Typography>Amount: {item.amount || "-"}</Typography>
                  <Typography>Carbohydrate: {item.carbohydrate || "-"}</Typography>
                  <Typography>Protein: {item.protein || "-"}</Typography>
                  <Typography>Fat: {item.fat || "-"}</Typography>
                  <Typography>Calories: {item.calories || "-"}</Typography>
                </Box>
              ))
            ) : (
              <Typography>No meal items</Typography>
            )}
          </Box>

          {/* TOTALS */}
          {totals && (
            <Box sx={{ mt: 2, p: 1, borderTop: "2px solid green" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Totals:
              </Typography>
              <Typography>Calories: {totals.calories}</Typography>
              <Typography>Protein: {totals.protein}</Typography>
              <Typography>Fat: {totals.fat}</Typography>
              <Typography>Carbohydrate: {totals.carbohydrate}</Typography>
            </Box>
          )}
        </CardContent>

        {/* ACTIONS */}
        <CardActions>
          <Button
            onClick={() => deleteMeals(mealId)}
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Delete
          </Button>
          <Button
            onClick={() => setOpenEdit(true)}
            sx={{ backgroundColor: "green", color: "white" }}
          >
            Edit
          </Button>
        </CardActions>
      </Card>

      {/* EDIT MODAL */}
      {openEdit && <EditMeals setOpenEdit={setOpenEdit} meals={meals} />}
    </>
  );
};

export default MealsCard;
