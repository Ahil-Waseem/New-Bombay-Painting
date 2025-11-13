import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./GallerySlider.css";

const GallerySlider = ({ images, title, subtitle }) => {
    return (
        <div className="slider-section">
            {/* Heading and Subheading */}
            <div className="slider-header">
                <h2 className="slider-heading">{title}</h2>
                <p className="slider-subtitle">{subtitle}</p>
            </div>

            {/* Swiper Gallery */}
            <div className="slider-container">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredSlides={false}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img src={img} alt={`slide-${index}`} className="slide-image" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default GallerySlider;
