export const getCharacters = (num, page) => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${num}&page=${page}`)
    .then(res => res.json())
    .then(res => res.map(character => ({
      ...character,
      imageUrl: character.photoUrl || 'https://images-na.ssl-images-amazon.com/images/I/818k1CLbUbL._SY741_.jpg'
    })));
};

export const getCharacter = name => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters/${name}`)
    .then(res => res.json())
    .then(({ character }) => ({
      ...character,
      imageUrl: character.photoUrl || 'https://images-na.ssl-images-amazon.com/images/I/818k1CLbUbL._SY741_.jpg'
    }));
};

