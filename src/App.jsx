import { Routes, Route, Router } from 'react-router-dom';
import Meals from './Components/Meals';
import Details from './Components/Details';
import Header from './Components/Header';
import HotItem from './Components/HotItem';
import { CartContextProvider } from './Components/store/cartContext';
import { UserProgressContextProvider } from './Components/store/UserProgressContext';
import Cart from './Components/Cart';
import BannerSlider from './Components/BannerSlider';
import DeliveryChallenge from './Components/DeliveryChallenge';
import Service from './Components/Service';
import FoodGallery from './Components/FoodGallery';
import Categories from './Components/Categories';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import CategoryPage from './Pages/CategoryPage';

export default function App() {
  return (
    <>
    <UserProgressContextProvider>
      <CartContextProvider>
      
        <Routes>
          <Route path="/" element={<Layout/>} >

          <Route index element={<Home/>}/>

          <Route path="/meal/:mealId" element={<Details />} />
          <Route path="/cat/:catId" element={<CategoryPage />} />
          
          </Route>
        </Routes>
  
      
      </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}
