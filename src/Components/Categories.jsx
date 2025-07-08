import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { motion, useScroll, useTransform } from "framer-motion";


import cat1 from "../assets/cat1.avif";
import cat2 from "../assets/cat2.avif";
import cat3 from "../assets/cat3.avif";
import cat4 from "../assets/cat4.avif";
import cat5 from "../assets/cat5.avif";
import cat6 from "../assets/cat6.avif";
import cat7 from "../assets/pasta1.png"
import cat8 from "../assets/cat8.avif";
import cat9 from "../assets/cat9.avif";
import cat10 from "../assets/cat10.avif";
import cat11 from "../assets/cat11.avif";

import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    { id: "pizza", image: cat1, title: "Pizza" },
    { id: "biryani", image: cat2, title: "Biryani" },
    { id: "thali", image: cat3, title: "Thali" },
    { id: "burger", image: cat4, title: "Burger" },
    { id: "chicken", image: cat5, title: "Chicken" },
    { id: "cake", image: cat6, title: "Cake" },
    { id: "pasta", image: cat7, title: "Pasta" },
    { id: "north indian", image: cat8, title: "North Indian" },
    { id: "rolls", image: cat9, title: "Rolls" },
    { id: "sweets", image: cat10, title: "Sweets" },
    { id: "dosa", image: cat11, title: "Dosa" },
    
  ];

  const { scrollY } = useScroll()
  const opacityimg = useTransform(scrollY, [0, 200, 500], [0, 0.5, 1])
  const scaleImg = useTransform(scrollY, [0, 400], [0.5, 1]);


  return (


    <section className="categories-section">

      <div className="categories-slider-wrapper">
        <div className="container">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false }}
            className="heading02">Inspiration for your first order</motion.h3>
          <Swiper
            modules={[Autoplay, Navigation,]}
            spaceBetween={30}
            slidesPerView={6}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}

          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id}>

                <motion.div
                  style={{ opacity: opacityimg, scale: scaleImg }}
                  className="cat-image">
                  <Link to={`/cat/${cat.id}`}><motion.img  whileHover={{ rotate: -5}}
                  src={cat.image} alt={cat.title} /></Link>
                  <h4 className="para28">{cat.title}</h4>
                </motion.div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>

  );
}
