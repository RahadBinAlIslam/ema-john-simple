import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import About from "./components/About/About";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
