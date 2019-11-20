import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCharactersAction } from '../actions/characterActions';
import { getCharacters, getCharactersLoading } from '../selectors/characterSelectors';
import Characters from '../components/Characters';


const CharacterContainer = ({ characters, loading, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters(4, 1);
  }, []);

  if(loading) return <img src={'https://media2.giphy.com/media/QFNpEeQABcMEw/giphy.gif'} />;

  return (
    <Characters characters={characters}/>
  );
};

CharacterContainer.propTypes = {
  characters: PropTypes.array,
  loading: PropTypes.bool,
  fetchCharacters: PropTypes.func
};

const mapStateToProps = state => ({
  characters: getCharacters(state),
  loading: getCharactersLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchCharacters(num, page) {
    dispatch(fetchCharactersAction(num, page));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterContainer);


