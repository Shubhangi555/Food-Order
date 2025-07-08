import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import slide1 from "../assets/hero-bg-1.jpg";
import burger1 from "../assets/burger.png";
import pizza1 from "../assets/pizza.png";
import chicken1 from "../assets/chiken.png";
import Button from "./UI/Button";

export default function BannerSlider() {
    const slides = [
        { id: 1, image: slide1, image2: burger1, title: "Hot Spicy Chicken Burger" },
        { id: 2, image: slide1, image2: pizza1, title: "Super Delicious Pizza" },
        { id: 3, image: slide1, image2: chicken1, title: "Awesome Fried Chicken" }
    ]

    return (<>
        <section className="banner-section">

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={true}
                speed={500}

            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="slide">

                            <div className="swiper-content">
                                <div className="swiper-flex">
                                    <div>
                                        <h2 className="heading01">{slide.title}</h2>
                                        <Button style={{marginTop:"30px"}} >Order Now</Button>
                                    </div>
                                    <img className="image2" src={slide.image2} alt={slide.title} />
                                </div>

                            </div>

                        </div>


                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    </>
    )
}


