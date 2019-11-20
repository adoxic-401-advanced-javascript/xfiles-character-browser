import React from 'react';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {
  const mappedCharacters = characters[0].map(character => {
    return (
      <li key={character._id}>
        <h3>{character.name}</h3>
        <img src={character.photoUrl} />
      </li>
    );
  });
 
  return (
    <ul>
      {mappedCharacters}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.array
};

export default Characters;
