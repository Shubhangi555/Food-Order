import BannerSlider from "../Components/BannerSlider";
import Categories from "../Components/Categories";
import DeliveryChallenge from "../Components/DeliveryChallenge";
import FoodGallery from "../Components/FoodGallery";
import HotItem from "../Components/HotItem";
import Meals from "../Components/Meals";
import Service from "../Components/Service";


export default function Home() {
  return (
    <>
      <BannerSlider />
      <Categories />
      <Meals />
      <HotItem />
      <FoodGallery />
      <DeliveryChallenge />
      <Service />
    </>
  );
}
