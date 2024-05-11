import supabase from "../supabase";

export async function addRestuarantReview(req: { method: string; body: { restaurantName: any; pizzaType: any; place: any; country: any; visitDate: any; rating: any; }; }) {
  
  if (req.method === 'POST') {
      // Dobijanje podataka iz tela zahteva
      const { restaurantName, pizzaType, place, country, visitDate, rating } = req.body;
  
      // Dodavanje podataka u Supabase bazu
      const { data, error } = await supabase.from('Restaurant').insert([
        {
          restaurant_name: restaurantName,
          pizza_type: pizzaType,
          place: place,
          country: country,
          visit_date: visitDate,
          rating: rating,
        },
      ]);
  
      if (error) {
        console.error('Error adding review:', error.message);
        return { error: 'Failed to add review' };
      } else {
        console.log('Review added successfully:', data);
        return { message: 'Review added successfully!' };
      }
    } else {
      return { error: 'Method not allowed' };
    }
}
