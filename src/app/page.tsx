import RestaurantInfo from "./components/restaurantInfo";
import SwiperComponent from "./components/swiper";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <img
          className="m-12"
          src="images/pizza-time.png"
          alt="Header Image"
          width={300}
        />
        <SwiperComponent />
      </div>
    </div>
  );
}
