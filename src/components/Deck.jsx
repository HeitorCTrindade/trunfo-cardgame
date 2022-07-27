import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  render() {
    const { arraySavedCards, handleDeleteCardButton } = this.props;
    const generateDeleteButton = true;
    const cardsElements = arraySavedCards.map((card) => (<Card
      key={ card.cardName }
      cardName={ card.cardName }
      cardDescription={ card.cardDescription }
      cardAttr1={ card.cardAttr1 }
      cardAttr2={ card.cardAttr2 }
      cardAttr3={ card.cardAttr3 }
      cardImage={ card.cardImage }
      cardRare={ card.cardRare }
      cardTrunfo={ card.cardTrunfo }
      generateDeleteButton={ generateDeleteButton }
      handleDeleteCardButton={ handleDeleteCardButton }
    />));
    return <div>{cardsElements}</div>;
  }
}

Deck.propTypes = {
  arraySavedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteCardButton: PropTypes.func.isRequired,
};

export default Deck;
