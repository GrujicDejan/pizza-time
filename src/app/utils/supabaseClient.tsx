import supabase from "../pages/supabase";
import { RestaurantReview } from "../components/RestaurantReview";

const fetchRestaurantReviews = async (): Promise<RestaurantReview[] | null> => {
  try {
    const { data, error } = await supabase.from("Restaurant").select("*");
    if (error) {
      throw error;
    }

    // Mapiranje podataka
    const mappedData: RestaurantReview[] = data.map((item: any) => ({
      id: item.id,
      restaurantName: item.restaurant_name.trim(),
      visitDate: item.visit_date,
      pizzaType: item.pizza_type,
      rating: item.rating,
      country: item.country,
      place: item.place,
    }));

    return mappedData;
  } catch (error) {
    console.error("Error fetching restaurant reviews:", error);
    return null;
  }
};

export default fetchRestaurantReviews;
