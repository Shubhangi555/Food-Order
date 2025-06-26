



import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import cat1 from "../assets/cat1.avif";
import cat2 from "../assets/cat2.avif";
import cat3 from "../assets/cat3.avif";
import cat4 from "../assets/cat4.avif";
import cat5 from "../assets/cat5.avif";
import cat6 from "../assets/cat6.avif";

import cat8 from "../assets/cat8.avif";
import cat9 from "../assets/cat9.avif";
import cat10 from "../assets/cat10.avif";
import cat11 from "../assets/cat11.avif";
import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    { id: "pizza", image: cat1, title: "Pizza" },
    { id: "biryani", image: cat2, title: "Biryani" },
    { id: "cat3", image: cat3, title: "Thali" },
    { id: "cat4", image: cat4, title: "Burger" },
    { id: "cat5", image: cat5, title: "Chicken" },
    { id: "cat6", image: cat6, title: "Cake" },
  
    { id: "cat8", image: cat8, title: "North Indian" },
    { id: "cat9", image: cat9, title: "Rolls" },
    { id: "cat10", image: cat10, title: "Sweets" },
    { id: "cat11", image: cat11, title: "Dosa" },
  ];

  return (
  <section className="categories-section">
   
  <div className="categories-slider-wrapper">
<div className="container">
  <h3 className="heading02">Inspiration for your first order</h3>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        pagination={{clickable:true}}
        slidesPerView={6}
        navigation
       
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id}>
           
            <div className="cat-image">
              <Link to={`/cat/${cat.id}`}><img src={cat.image} alt={cat.title} /></Link>
              <h4 className="para28">{cat.title}</h4>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
</section>

  );
}
