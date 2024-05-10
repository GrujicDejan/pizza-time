import supabase from "../supabase";

export default async function addRestuarantReview(req: { method: string; body: { restaurantName: any; pizzaType: any; city: any; country: any; visitDate: any; rating: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { error?: string; message?: string; }): void; new(): any; }; }; }) {
    console.log("Usao")
    
    if (req.method === 'POST') {
        // Dobijanje podataka iz tela zahteva
        const { restaurantName, pizzaType, city, country, visitDate, rating } = req.body;
    
        // Dodavanje podataka u Supabase bazu
        const { data, error } = await supabase.from('Restaurant').insert([
          {
            restaurant_name: restaurantName,
            pizza_type: pizzaType,
            city: city,
            country: country,
            visit_date: visitDate,
            rating: rating,
          },
        ]);
    
        if (error) {
          console.error('Error adding review:', error.message);
          res.status(500).json({ error: 'Failed to add review' });
        } else {
          console.log('Review added successfully:', data);
          res.status(200).json({ message: 'Review added successfully!' });
        }
      } else {
        res.status(405).json({ error: 'Method not allowed' });
      }
  }