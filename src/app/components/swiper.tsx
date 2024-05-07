"use client";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import RestaurantInfo from "../components/restaurantInfo";

export default function SwiperComponent() {
  const restaurantList = [
    {
      restaurantName: "Restaurant 1",
      visitDate: "22.03.2024",
      pizzaType: "Pepperoni",
      rating: 4.7,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Restaurant 2",
      visitDate: "22.03.2024",
      pizzaType: "Margherita",
      rating: 4.5,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Restaurant 3",
      visitDate: "22.03.2024",
      pizzaType: "Quattro Stagioni",
      rating: 4.2,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Restaurant 4",
      visitDate: "22.03.2024",
      pizzaType: "Capricciosa",
      rating: 4.5,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Restaurant 5",
      visitDate: "22.03.2024",
      pizzaType: "Funghi",
      rating: 4.5,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Restaurant 6",
      visitDate: "22.03.2024",
      pizzaType: "Funghi",
      rating: 4.5,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Restaurant 7",
      visitDate: "22.03.2024",
      pizzaType: "Funghi",
      rating: 4.5,
      country: "Serbia",
      place: "Novi Sad",
    },
  ];

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto">
      <p className="text-3xl font-bold mb-8 mt-8 lg:mb-10 lg:mt-12 text-center text-yellow-400">
        Reviews
      </p>
      <div className="overflow-hidden">
        <Swiper
          loop={true}
          pagination={{ clickable: true }}
          className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          modules={[Pagination]}
          breakpoints={{
            430: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {restaurantList.map((restaurant, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center "
            >
              <div className="w-full h-full flex flex-col items-center justify-center">
                <RestaurantInfo
                  index={index}
                  restaurantName={restaurant.restaurantName}
                  visitDate={restaurant.visitDate}
                  pizzaType={restaurant.pizzaType}
                  rating={restaurant.rating}
                  country={restaurant.country}
                  place={restaurant.place}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
