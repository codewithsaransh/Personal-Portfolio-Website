import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Info from "./components/about/Info.jsx";
import Skills from "./components/skills/Skills.jsx";
import Education from "./components/education/Education.jsx";
import Contact from "./components/contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Info />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
