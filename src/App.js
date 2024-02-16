import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { createTheme, styled, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './components/RootLayout';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import MealsPage from './components/MealsPage';
import PopupMeals from './components/PopupMeals';

import MealsCalendar from './components/MealsCalendar';


const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path: "auth",
        element: <AuthPage />,
      },
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path:"meals",
       
        children:[
          {
            index:true,
            element: <MealsPage/>,
          },
          {
            path:"popup",
            element:<PopupMeals/>
          }
        ]
      },
      {
        path:"calendar",
        element:<MealsCalendar/>
      }
    ]
    
  }
])

function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
