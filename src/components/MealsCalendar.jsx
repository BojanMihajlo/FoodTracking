import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Container, Grid, Typography, Modal, Box } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";
import image from "../images/backfood2.webp";
import { getAuthToken } from "../util/auth";

const API_URL = process.env.REACT_APP_API_URL;

const localizer = momentLocalizer(moment);

const MealsCalendar = () => {
  const [meals, setMeals] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const token = getAuthToken();

  useEffect(() => {
    fetch(`${API_URL}/meals`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMeals(data);
      })
      .catch((err) => console.error(err));
  }, [token]);

  const events = meals.map((meal) => {
    
    const mealId = meal._id || meal.id;

 
    const firstItem =
      meal.mealItemList && meal.mealItemList.length > 0
        ? meal.mealItemList[0]
        : null;

    const description = firstItem
      ? `Name: ${firstItem.name || "-"} | Amount: ${firstItem.amount || "-"}g | Carbs: ${firstItem.carbohydrate || "-"}g | Protein: ${firstItem.protein || "-"}g | Fat: ${firstItem.fat || "-"}g | Calories: ${firstItem.calories || "-"}`
      : "No meal items";

    
    const date = meal.date ? moment(meal.date, "DD/MM/YYYY").toDate() : new Date();

    return {
      id: mealId,
      title: meal.category || "No category",
      description,
      start: date,
      end: date,
    };
  });

  const handleSelectMeal = (event) => {
    setSelectedMeal(event);
    setShowModal(true);
  };

  return (
    <Grid
      sx={{
        padding: {md:"1% 4% 8% 4%",xs:"1% 4% 10% 4%"},
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <Typography
        sx={{
          padding: "1%",
          fontFamily: "Salsa",
          textShadow: "2px 2px 2px black",
          color: "white",
          fontSize: { md: "60px", xs: "30px" },
          marginTop: { md: "0.5%", xs: "10%" },
        }}
      >
        All Meals Calendar
      </Typography>

      <Container
        sx={{
          height: "500px",
          backgroundColor: "#cdf2bb",
          border: "2px solid green",
          outline: "8px solid green",
        }}
      >
        <Calendar
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          selectable={true}
          onSelectEvent={handleSelectMeal}
        />
      </Container>

      {showModal && selectedMeal && (
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: {md:400, xs:200},
              backgroundColor: "#fff299",
              border: "2px solid green",
              padding: "2%",
              borderRadius: "8px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ fontFamily: "Salsa", color: "green" }}
            >
              {selectedMeal.title}
            </Typography>
            <Typography
              variant="h6"
              id="modal-modal-description"
              sx={{ mt: 2, fontFamily: "Salsa" }}
            >
              {selectedMeal.description}
            </Typography>
          </Box>
        </Modal>
      )}
    </Grid>
  );
};

export default MealsCalendar;
