import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import slide1 from "../assets/hero-bg-1.jpg";
import burger1 from "../assets/burger.png";

export default function BannerSlider(){
const slides=[
    {id:1, image:slide1, image2:burger1, title: "Hot Spicy Chicken Burger"},
    {id:2, image:slide1, title: "fresh burger"},
    {id:3, image:slide1, title: "fresh burger"}
]

    return(<>
   <section className="banner-section">
    
        <Swiper
            modules={[Pagination,  Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
          
            pagination={{clickable:true}}
            loop={true}
        >
            {slides.map((slide)=>(
                <SwiperSlide key={slide.id}>
                    <div className="slide">
                      
                        <div className="swiper-content">
                            <div className="swiper-flex">
                                <h2 className="heading01">{slide.title}</h2>
                              <img className="image2" src={slide.image2} alt={slide.title}/>
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


