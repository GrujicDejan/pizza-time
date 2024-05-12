"use client";

import React, { useState } from "react";
import AddReviewModal from "./components/AddReviewModal";
import SwiperComponent from "./components/swiper";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const refreshData = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  const onSubmitSuccess = () => {
    refreshData();
  };

  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center">
        <img
          className="m-12"
          src="images/pizza-time.png"
          alt="Header Image"
          width={300}
        />

        <button
          onClick={openModal}
          className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >
          Add New Review
        </button>

        <SwiperComponent key={refreshKey} />

        <AddReviewModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmitSuccess={onSubmitSuccess}
        />
      </div>
    </div>
  );
}
