import React, { useState } from "react";
import { addRestuarantReview } from "../pages/api/addRestuarantReview";

interface AddReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  restaurantName: any;
  pizzaType: any;
  place: any;
  country: any;
  visitDate: any;
  rating: any;
}

const today = new Date();
const defaultDate = today.toISOString().split("T")[0];

const AddReviewModal: React.FC<AddReviewModalProps> = ({ isOpen, onClose }) => {
  const initialFormData: FormData = {
    restaurantName: "",
    pizzaType: "",
    place: "",
    country: "",
    visitDate: defaultDate, 
    rating: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "rating") {
      // Provera da li je uneta vrednost validan decimalni broj između 1 i 5
      const floatValue = parseFloat(value);
      if (value !== ' ' && floatValue >= 0 && floatValue <= 5) {
        setFormData({ ...formData, [name]: value });
      } else {
        setFormData({...formData, [name]: ""})
      }
    } else {
      // Ako nije polje rating, koristi vrednost kao što je
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // const response = await fetch("/api/addRestuarantReview", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });

      const response = async () => {
        try {
            const res = await addRestuarantReview({
                method: 'POST',
                body: formData,
            });
            console.log(res);
            setFormData(initialFormData);
            onClose();
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };
        
    response();
    

      // if (response) {
      //   // Uspešno dodavanje recenzije
      //   console.log("Review added successfully!");
      //   setFormData(initialFormData);
      //   onClose();
      // } else {
      //   // Greška prilikom dodavanja recenzije
      //   console.error("Failed to add review", response);
      // }
    } catch (error) {
      console.error("Error adding review:", error);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opaplace-75 transition-opaplace"
          onClick={onClose}
        />
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <form onSubmit={handleSubmit}>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2 text-right">
                    Add New Review
                  </h3>
                  {/* Ime rostorana */}
                  <div className="mb-4">
                    <label
                      htmlFor="restaurantName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Restaurant Name
                    </label>
                    <input
                      type="text"
                      name="restaurantName"
                      id="restaurantName"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.restaurantName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Vrsta pice */}
                  <div className="mb-4">
                    <label
                      htmlFor="pizzaType"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pizza Type
                    </label>
                    <input
                      type="text"
                      name="pizzaType"
                      id="pizzaType"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.pizzaType}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* Ocena */}
                  <div className="mb-4">
                    <label
                      htmlFor="rating"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Rating (1-5)
                    </label>
                    <input
                      type="text"
                      name="rating"
                      id="rating"
                      min="0"
                      max="5"
                      pattern="^([0-5](\.\d{0,1})?|\.\d{1})?$"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.rating}
                      onChange={handleChange}
                      title="Please enter a number between 0 and 5 with up to one decimal place."
                    />
                  </div>
                  {/* Mesto */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label
                        htmlFor="place"
                        className="block text-sm font-medium text-gray-700"
                      >
                        place
                      </label>
                      <input
                        type="text"
                        name="place"
                        id="place"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData.place}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        id="country"
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* datum posete */}
                  <div className="mb-4">
                    <label
                      htmlFor="visitDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Visit Date
                    </label>
                    <input
                      type="date"
                      name="visitDate"
                      id="visitDate"
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                      value={formData.visitDate || defaultDate}
                      onChange={handleChange}
                    />
                  </div>
                  {/* Ostatak forme */}
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Add Review
              </button>
              <button
                type="button"
                className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviewModal;
