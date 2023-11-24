// Tours.js

import Title from "./Title";
import Tour from "./Tour";
import { useState, useEffect } from "react";
import AddOrDeleteTour from "../components/AddOrDeleteTour";

const apiUrl = 'http://localhost:5001/api/tours';

const Tours = () => {
  const [toursData, setToursData] = useState(null);

  const getTours = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setToursData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTours();
  }, []); // Add an empty dependency array to run only once on mount

  const handleDeleteTour = (tourId) => {
    // Filter out the tour with the specified ID and update the state
    const updatedTours = toursData.filter((tour) => tour.id !== tourId);
    setToursData(updatedTours);
  }


  return (
    <section className="section tours" id="tours">
      <Title title="our" subTitle="tours" />

      <div className="section-center tours-center">
        {toursData && toursData.map((tour) => {
          return <Tour {...tour} key={tour._id} 
          tour={tour} 
          onDelete={handleDeleteTour} />
        })}
      </div>
      {<AddOrDeleteTour />}
    </section>
  );
}

export default Tours;