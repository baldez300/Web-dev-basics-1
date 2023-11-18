import React from 'react';

function Profile(props) {
  const { name, imageUrl, profession, awards, discovery } = props;

  return (
    <section className="profile">
      <h2>{name}</h2>
      <img className="avatar" src={imageUrl} alt={name} width={100} height={100} />
      <ul>
        <li>
          <b>Profession: </b> {profession}
        </li>
        <li>
          <b>Awards: {awards.length} </b> ({awards.join(', ')})
        </li>
        <li>
          <b>Discovered: </b> {discovery}
        </li>
      </ul>
    </section>
  );
}

export default Profile;
