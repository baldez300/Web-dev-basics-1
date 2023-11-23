// AddOrDeleteTour.js

import React from 'react';


const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    backgroundColor: 'lightyellow',
};

const buttonStyle = {
    margin: '0 10px',
};

const AddOrDeleteTour = () => {
  const apiURL = 'http://localhost:5001/api/tours';

  const newTour = async ({
    image,
    date,
    title,
    info,
    location,
    duration,
    cost,
  }) => {
    try {
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: image,
          date: date,
          title: title,
          info: info,
          location: location,
          duration: duration,
          cost: cost,
        }),
      });

      const data = await response.json();

      if (response.status === 500) {
        throw new Error(data.errors);
      }

      if (response.ok) {
        console.log('Tour added successfully');
        // You can handle the new tour in your main component state or wherever appropriate
        // For now, just log the data
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTour = async (tourId) => {
    try {
      const response = await fetch(`${apiURL}/${'655e68e9d853cfd3dd3daa52'}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.status === 500) {
        throw new Error(data.errors);
      }

      if (response.ok) {
        console.log('Tour deleted successfully');
        // Handle the deleted tour as needed
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTour = () => {
    newTour({
      image: 'https://i.imgur.com/UvvYdtH.jpeg',
      date: 'August 30, 2023',
      title: 'New Tour Added by Balde',
      info: 'This is a new tour description.',
      location: 'New Location',
      duration: 7,
      cost: 1500,
    });
  };

  return (
    <div style={buttonContainerStyle}>
      <button style={buttonStyle} onClick={handleAddTour}>
        Add Tour
      </button>
      <button style={buttonStyle} onClick={() => deleteTour('tourIdToDelete')}>
        Delete Tour
      </button>
    </div>
  );
};

export default AddOrDeleteTour;
