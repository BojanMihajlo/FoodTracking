import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/RootLayout';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import MealsPage, { loader as mealsLoader } from './components/MealsPage';
import PopupMeals from './components/PopupMeals';
import MealsCalendar from './components/MealsCalendar';
import BlogPage from './components/BlogPage';
import ProtectedRoute from "./components/ProtectedRoute";
import { createTheme, ThemeProvider } from "@mui/material/styles";


const theme = createTheme({
  typography: {
    fontFamily: "Salsa, cursive",
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path: "auth",
        element: <AuthPage />, // нема action
      },
      {
        path: "/",
        element:  <ProtectedRoute>
      <HomePage />
    </ProtectedRoute>,
        // loader за demo не е потребен
      },
      {
        path:"meals",
        children:[
          {
            index:true,
            element:<ProtectedRoute><MealsPage/></ProtectedRoute> ,
            id:"mealsId",
            loader: mealsLoader, // ова е ок ако loader само fetch-ира со DEMO_TOKEN
          },
          {
            path:"popup", 
            children:[
              {
                index:true,
                element: <PopupMeals/> , 
              },
             
            ]
          },
        ]
      },
      {
        path:"calendar",
        element:<ProtectedRoute><MealsCalendar/></ProtectedRoute>,
        // loader за demo не е потребен
      },
      {
        path:"blog",
        element:<ProtectedRoute><BlogPage/></ProtectedRoute>,
        // loader за demo не е потребен
      }
    ]
  }
]);

function App() {
  return (
     <ThemeProvider theme={theme}>
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
    </ThemeProvider>
  );
}

export default App;
