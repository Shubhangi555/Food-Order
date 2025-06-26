import { Swiper, SwiperSlide } from "swiper/react";
import gallery01 from "../assets/gallery01.jpg";
import gallery02 from "../assets/gallery02.jpg";
import gallery03 from "../assets/gallery03.jpg";
import { Autoplay, Navigation, } from "swiper/modules";


export default function FoodGallery() {

    const galleryImages = [
        { id: "gallery01", image: gallery01, title: "Gallery 01" },
        { id: "gallery02", image: gallery02, title: "Gallery 02" },
        { id: "gallery03", image: gallery03, title: "Gallery 03" },
        { id: "gallery04", image: gallery01, title: "Gallery 01" },
        { id: "gallery05", image: gallery02, title: "Gallery 02" },
        { id: "gallery06", image: gallery03, title: "Gallery 03" }
    ]

    return (
        <section className="food-gallery-section">
            <div className="container">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    autoplay={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    loop={true}
                >

                    {galleryImages.map((gallery) => (
                        <SwiperSlide key={gallery.id}>
                            <img className="gallery-img" src={gallery.image} />
                        </SwiperSlide>
                    ))}

                    <div className="swiper-button-prev">
                        <i className="fas fa-arrow-left"></i>
                    </div>
                    <div className="swiper-button-next">
                        <i className="fas fa-arrow-right"></i>
                    </div>

                </Swiper>
            </div>
        </section>
    )
}