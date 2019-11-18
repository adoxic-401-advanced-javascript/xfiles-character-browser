import { FETCH_CHARACTER, FETCH_CHARACTERS, FETCH_CHARACTERS_DONE, FETCH_CHARACTER_DONE, FETCH_CHARACTERS_LOADING, FETCH_CHARACTER_LOADING } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CHARACTER_LOADING:
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTER_DONE:
    case FETCH_CHARACTERS_DONE:
      return { ...state, loading: false };
    case FETCH_CHARACTER:
      return { ...state, characters: [...state.characters, ...action.payload] };
    case FETCH_CHARACTERS:
      return { ...state, characters: [...state.characters, action.payload] };
    default:
      return state;
  }
}
