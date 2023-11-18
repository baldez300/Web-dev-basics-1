import { tours } from "../data";
import Title from "./Title";
import Tour from "./Tour";
import { useState } from "react";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const handleDeleteTour = (tourId) => {
    // Filter out the tour with the specified ID and update the state
    const updatedTours = toursData.filter((tour) => tour.id !== tourId);
    setToursData(updatedTours);
  }


  return (
    <section className="section tours" id="tours">
      <Title title="our" subTitle="tours" />

      <div className="section-center tours-center">
        {toursData.map((tour) => {
          return <Tour key={tour.id} 
          tour={tour} 
          onDelete={handleDeleteTour} />
        })}
      </div>
    </section>
  );
}

export default Tours;