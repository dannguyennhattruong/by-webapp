import Image from "next/image";
import React, { useState } from "react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner from "/public/postbox_image.jpeg";

function TrendingSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const movieTrending = [
    { id: 21, image: banner, title: "Post banner" },
    { id: 22, image: banner, title: "Post banner" },
    { id: 23, image: banner, title: "Post banner" },
    { id: 24, image: banner, title: "Post banner" },
    { id: 25, image: banner, title: "Post banner" },
    { id: 26, image: banner, title: "Post banner" },
    { id: 27, image: banner, title: "Post banner" },
  ];

  const onRenderMovieCard = () => {
    return movieTrending?.map((post, index) => {
      return (
        <SwiperSlide
          key={post.id}
          className="relative transition-all duration-500"
        >
          <div
            title={post.title}
            className="relative aspect-[3/2] w-fit rounded-2xl hover:rounded-none"
          >
            <Image
              className="h-full w-full rounded-2xl transition-all duration-300 hover:scale-110 hover:rounded-none hover:brightness-110"
              src={post.image}
              alt={post.title}
              width={90000000}
              height={90000000}
              loading="eager"
            />
          </div>
          {activeIndex === index ? (
            <button className="absolute bottom-0 left-0 right-0 w-full scale-125 bg-by-white/60">
              The Weeknd’s list
            </button>
          ) : (
            <></>
          )}
        </SwiperSlide>
      );
    });
  };
  return (
    <div className="py-5">
      <div className="trendy-swiper">
        <Swiper
          modules={[Navigation, FreeMode, Autoplay]}
          spaceBetween={50}
          navigation={true}
          breakpoints={{
            375: {
              slidesPerView: 1.5,
            },
            640: {
              slidesPerView: 2.5,
            },
            768: {
              slidesPerView: 3.5,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          centeredSlides
          centeredSlidesBounds
          loop
          freeMode
          style={{ zIndex: "0" }}
          onSlideChange={(currentswiper) => {
            setActiveIndex(currentswiper.realIndex);
          }}
        >
          {onRenderMovieCard()}
        </Swiper>
      </div>
    </div>
  );
}

export default TrendingSwiper;
