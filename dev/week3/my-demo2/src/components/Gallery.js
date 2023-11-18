import React from 'react';
import Profile from './Profile'; // Import the Profile component
import { getImageUrl } from './utils.js';

const scientists = [
  {
    name: 'Maria Skłodowska-Curie',
    imageUrl: getImageUrl('szV5sdG'),
    profession: 'physicist and chemist',
    awards: [
      'Nobel Prize in Physics',
      'Nobel Prize in Chemistry',
      'Davy Medal',
      'Matteucci Medal',
    ],
    discovery: 'polonium (chemical element)',
  },
  {
    name: 'Katsuko Saruhashi',
    imageUrl: getImageUrl('YfeOqp2'),
    profession: 'geochemist',
    awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
    discovery: 'a method for measuring carbon dioxide in seawater',
  },
];

function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((scientist, index) => (
        <Profile key={index} {...scientist} />
      ))}
    </div>
  );
}

export default Gallery;
