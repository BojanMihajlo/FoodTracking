import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Container, Grid, Typography, Modal, Box } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const MealsCalendar = () => {
  const now = new Date();
  const events = [
    {
      id: 7,
      title: "Lunch",
      url: "https://familystylefood.com/wp-content/uploads/2022/03/Baked-Chicken-Asparagus.jpg",
      description: "boiled chicken with asparagus",
      start: new Date(new Date().setHours(new Date().getHours() - 48)),
      end: new Date(new Date().setHours(new Date().getHours() - 48)),
    },
    {
      id: 15,
      title: "Breakfast",
      url: "https://www.breakfastfordinner.net/wp-content/uploads/2017/01/Avocado-Toast-with-Hardboiled-Eggs-8-of-9-600x900.jpg",
      description: "boiled eggs with avocado and almonds",
      start: now,
      end: now,
    },
    {
      id: 16,
      title: "Lunch",
      url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/roast-turkey-with-potatoes-and-bacon-louise-heusinkveld.jpg",
      description: "roasted turkey with potatoes",
      start: now,
      end: now,
    },
    {
      id: 12,
      title: "Dinner",
      description: "sushi",
      url: "https://ik.imagekit.io/awwybhhmo/satellite_images/japanese/beyondmenu/hero/16.jpg?tr=w-3840,q-50",
      start: new Date(new Date().setHours(new Date().getHours() - 72)),
      end: new Date(new Date().setHours(new Date().getHours() - 72)),
    },
  ];
  const [meals, setMeals] = useState(events);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const handleSelect = (slotinfo) => {
    setShowModal(true);
    setSelectedDate(slotinfo);
  };

  const handleSelectMeal = (event) => {
    setShowModal(true);
    setSelectedMeal(event);
  };

  return (
    <Grid sx={{ marginTop: "5%" }}>
      <Typography variant="h3" sx={{ padding: "1%", fontFamily: "Salsa" }}>
        All Meals
      </Typography>
      <Container
        sx={{
          height: "500px",
          backgroundColor: "#cdf2bb",
          border: "2px solid green",
        }}
      >
        <Calendar
          events={meals}
          startAccessor="start"
          endAccessor="end"
          defaultDate={moment().toDate()}
          localizer={localizer}
          selectable={true}
          onSelectEvent={handleSelectMeal}
        />
      </Container>
      {showModal && (
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
              width: "400",
              backgroundColor: "lightgreen",
              border: "2px solid green",
              padding: "2%",
              borderRadius: "8px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              component="h2"
              sx={{ fontFamily: "Salsa" }}
            >
              {selectedMeal.title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {selectedMeal.description}
            </Typography>
            <img src={selectedMeal.url} width={150} height={150} />
          </Box>
        </Modal>
      )}
    </Grid>
  );
};

export default MealsCalendar;
