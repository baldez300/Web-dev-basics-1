import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  const imageSize = size < 90 ? 's' : 'b'; // Use 's' for small size, 'b' for big size
  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{
        name: 'Gregorio Y. Zara',
        imageId: '7vQD0fP',
      }}
    />
  );
}

export function getImageUrl(person, size) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}
// .avatar { margin: 20px; border-radius: 50%; }
