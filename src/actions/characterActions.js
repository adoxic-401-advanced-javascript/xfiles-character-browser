import { getCharacters, getCharacter } from '../services/xfilesApi';

export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_DONE = 'FETCH_CHARACTERS_DONE';

export const fetchCharactersAction = (num, page) => ({
  type: FETCH_CHARACTERS,
  payload: getCharacters(num, page),
  pendingType: FETCH_CHARACTERS_LOADING,
  fulfilledType: FETCH_CHARACTERS_DONE
});

export const FETCH_CHARACTER_LOADING = 'FETCH_CHARACTER_LOADING';
export const FETCH_CHARACTER = 'FETCH_CHARACTER';
export const FETCH_CHARACTER_DONE = 'FETCH_CHARACTER_DONE';

export const fetchCharacter = name => ({
  type: FETCH_CHARACTER,
  payload: getCharacter(name),
  pendingType: FETCH_CHARACTER_LOADING,
  fulfilledType: FETCH_CHARACTER_DONE
});
