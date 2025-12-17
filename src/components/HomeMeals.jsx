import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomeMeals = ({ meals }) => {
  const navigate = useNavigate();

  const getYesterdayString = () => {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const yesterdayStr = getYesterdayString();

 
  const yestMeals = meals.filter((meal) => meal.date === yesterdayStr);

  
  const sumMacro = (macro) =>
    yestMeals.reduce(
      (sum, meal) =>
        sum +
        meal.mealItemList?.reduce((itemSum, item) => itemSum + Number(item[macro] || 0), 0),
      0
    );

  const carboSum = sumMacro("carbohydrate");
  const proteinSum = sumMacro("protein");
  const fatSum = sumMacro("fat");
  const calorieSum = sumMacro("calories");

  const categories = ["Breakfast", "Lunch", "Dinner", "Snack"];

  const toMealsPage = () => navigate("/meals");

  return (
    <Box
      sx={{
        border: "5px solid green",
        borderRadius: "10px",
        padding: "4%",
        backgroundColor: "#dff7e0",
      }}
    >
      <Typography variant="h5" sx={{ fontFamily: "Salsa, cursive" }}>
        Yesterday's Meals
      </Typography>

      {yestMeals.length > 0 ? (
        <Box sx={{ padding: "2%" }}>
          {categories.map((category) => {
            const mealsByCategory = yestMeals.filter((meal) => meal.category === category);

            return (
              <Box
                key={category}
                sx={{ display: "flex", flexDirection: "column", padding: "4%", cursor: "pointer" }}
                onClick={toMealsPage}
              >
                <Typography sx={{ fontFamily: "Salsa", fontWeight: "bold" }}>{category}:</Typography>

                <Box sx={{ marginLeft: "20px" }}>
                  {mealsByCategory.length > 0 ? (
                    mealsByCategory.map((meal) => (
                      <Box key={meal._id} sx={{ marginBottom: "10px" }}>
                        {meal.mealItemList?.map((item, idx) => (
                          <Typography key={idx}>
                            {item.name} — Amount: {item.amount}, Carbs: {item.carbohydrate}, Protein: {item.protein}, Fat: {item.fat}, Calories: {item.calories}
                          </Typography>
                        ))}
                      </Box>
                    ))
                  ) : (
                    <Typography sx={{ fontStyle: "italic" }}>No {category.toLowerCase()}</Typography>
                  )}
                </Box>
              </Box>
            );
          })}

          <Box sx={{ marginTop: "8%" }}>
            <Typography sx={{ fontWeight: "bold", color: "green" }}>
              Total carbohydrate: {carboSum}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "green" }}>
              Total protein: {proteinSum}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "green" }}>
              Total fat: {fatSum}
            </Typography>
            <Typography sx={{ fontWeight: "bold", color: "green" }}>
              Total calories: {calorieSum}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box>
          <Typography>No meals entered for yesterday.</Typography>
          <Button
            sx={{ backgroundColor: "green", color: "black", mt: 2 }}
            onClick={toMealsPage}
          >
            Enter your daily meal
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default HomeMeals;
