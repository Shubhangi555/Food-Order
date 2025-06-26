// src/pages/Layout.jsx

import { Outlet } from "react-router-dom";
import Cart from "../Components/Cart";
import Header from "../Components/Header";



export default function Layout() {
  return (
    <>
      <Header/>
      <Cart />
      <Outlet/>
      
    </>
  );
}
