import RestaurantInfo from "./components/restaurantInfo";
import SwiperComponent from "./components/swiper";

export default function Home() {
  // Niz sa podacima o restoranima
  const restaurants = [
    {
      restaurantName: "Garden",
      visitDate: "22.03.2024",
      pizzaType: "kapricoza",
      rating: 4.7,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Garden",
      visitDate: "22.03.2024",
      pizzaType: "kapricoza",
      rating: 4.5,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Garden",
      visitDate: "22.03.2024",
      pizzaType: "kapricoza",
      rating: 4.2,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Garden",
      visitDate: "22.03.2024",
      pizzaType: "kapricoza",
      rating: 4.5,
      country: "Serbia",
      place: "Novi Sad",
    },
    {
      restaurantName: "Garden",
      visitDate: "22.03.2024",
      pizzaType: "kapricoza",
      rating: 4.5,
      country: "Serbia",
      place: "Novi Sad",
    },
  ];

  // Lista elemenata RestaurantInfo
  const restaurantElements = [];
  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    restaurantElements.push(
      // <RestaurantInfo
      //   key={i}
      //   restaurantName={restaurant.restaurantName}
      //   visitDate={restaurant.visitDate}
      //   pizzaType={restaurant.pizzaType}
      //   rating={restaurant.rating}
      //   country={restaurant.country}
      //   place={restaurant.place}
      // />
    );
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <img className="m-12" src="images/pizza-time.png" alt="Header Image" width={300} />
        <SwiperComponent />
      </div>
      
    </div>
  );
}
