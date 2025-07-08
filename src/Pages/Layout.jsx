// src/pages/Layout.jsx

import { Outlet } from "react-router-dom";
import Cart from "../Components/Cart";
import Header from "../Components/Header";
import Checkout from "../Components/Checkout";
import Wishlist from "../Components/Wishlist";
import Footer from "../Components/Footer";



export default function Layout() {
  return (
    <>
      <Header/>
      <Cart />
      <Checkout/>
      <Wishlist/>
      
      <Outlet/>
      <Footer/>
      
    </>
  );
}
