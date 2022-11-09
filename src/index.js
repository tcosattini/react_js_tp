import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import App from "./App";
import { Exercice1 } from "./exercices/Exercice1";
import { Exercice2 } from "./exercices/Exercice2";
import { Exercice3 } from "./exercices/Exercice3";
import { Exercice4 } from "./exercices/Exercice4";
import { Exercice5 } from "./exercices/Exercice5";
import { Exercice6 } from "./exercices/Exercice6";
import { Exercice7 } from "./exercices/Exercice7";
import { Country } from "./components/Country";
import { HomePage } from "./components/nav_menu/HomePage";
const refs = {
  ref1: React.createRef(),
  ref2: React.createRef(),
  ref3: React.createRef(),
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "exercice/1",
        element: <Exercice1 />,
      },
      {
        path: "exercice/2",
        element: <Exercice2 />,
      },
      {
        path: "exercice/3",
        element: <Exercice3 />,
      },
      {
        path: "exercice/4",
        element: <Exercice4 refs={refs} />,
      },
      {
        path: "exercice/5",
        element: <Exercice5 />,
      },
      {
        path: "exercice/6",
        element: <Exercice6 />,
      },
      {
        path: "exercice/7",
        element: <Exercice7 refs={refs} />,
      },
      {
        path: "country/:country",
        element: <Country />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
