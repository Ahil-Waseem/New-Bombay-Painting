import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./GallerySlider.css";

const GallerySlider = ({ images, title, subtitle }) => {
    const navigate = useNavigate();

    const handleClick = (link) => {
        navigate(link);
    };

    return (
        <div className="slider-section">
            <div className="slider-header">
                <h2 className="slider-heading">{title}</h2>
                <p className="slider-subtitle">{subtitle}</p>
            </div>

            <div className="slider-container">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={3}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    preventClicks={false}
                    preventClicksPropagation={false}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="slide-link"
                                onClick={() => handleClick(image.link)}
                                
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="slide-image"
                                    loading="lazy"
                                    width="400"
                                    height="300"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default GallerySlider;
