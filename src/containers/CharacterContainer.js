import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharactersAction } from '../actions/characterActions';
import { getCharacters, getCharactersLoading } from '../selectors/characterSelectors';
import Characters from '../components/Characters';


const CharacterContainer = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => getCharacters(state));
  const loading = useSelector(state => getCharactersLoading(state));

  useEffect(() => {
    dispatch(
      fetchCharactersAction(4, 1)
    );
  }, []);

  if(loading) return <img src={'https://media2.giphy.com/media/QFNpEeQABcMEw/giphy.gif'} />;

  return (
    <Characters characters={characters}/>
  );
};


export default CharacterContainer;
