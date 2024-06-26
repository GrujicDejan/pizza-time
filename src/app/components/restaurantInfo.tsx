import React from "react";
import pizza1 from "../../../public/images/pizza1.png";

interface Props {
  index: number;
  restaurantName: string;
  visitDate: string;
  pizzaType: string;
  rating: number; // Promenjen tip polja rating iz string u number
  country: string;
  place: string;
}

const RestaurantInfo: React.FC<Props> = ({
  index,
  restaurantName,
  visitDate,
  pizzaType,
  rating,
  country,
  place,
}) => {
  const stickers = [
    "images/pizza1.png",
    "images/pizza2.png",
    "images/pizza3.png",
    "images/sir.png",
    "images/pizza4.png",
    "images/pizza5.png",
  ];

  return (
    <div className="mx-4 relative">
      <div className="h-[310px] bg-cover bg-no-repeat p-4 bg-[url('../../public/images/paper.png')] flex flex-col justify-between">
        <div>
          <div className="absolute top-0 right-0 ">
            <img
              src={stickers[index % 6]}
              alt="Sticker"
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-lg font-bold mb-2 pt-8 text-center">
            {restaurantName}
          </h2>

          <br />

          <p className="text-gray-600 m-2 max-w-[180px]">
            <strong>Place:</strong> {place}, {country}
          </p>
          <p className="text-gray-600 m-2 max-w-[180px]"><strong>Pizza Type:</strong> {pizzaType}</p>
          <p className="text-gray-600 m-2"><strong>Visit Date:</strong> {visitDate}</p>
        </div>

        <div className="flex items-center justify-center pb-4 mb-12">
          <p className="text-gray-600 text-sm">{rating}</p>
          <ul className="flex ml-2">
            {Array(Math.floor(rating))
              .fill(null)
              .map((_, index) => (
                <li key={index} className="mr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-500 w-6 h-6 fill-current hover:text-yellow-600"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                    />
                  </svg>
                </li>
              ))}
            {rating % 1 >= 0.5 && (
              <li className="mr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-yellow-500 w-6 h-6 fill-current hover:text-yellow-600"
                  viewBox="0 0 20 20"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"
                  />
                </svg>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
