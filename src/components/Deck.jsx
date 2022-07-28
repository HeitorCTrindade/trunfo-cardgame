import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends Component {
  generateArrayCardsElements(arrayCards) {
    const { handleDeleteCardButton } = this.props;
    const generateDeleteButton = true;
    const ArrayCardsElements = arrayCards.map((card) => (
      <Card
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
      />
    ));
    return ArrayCardsElements;
  }

  render() {
    const { arraySavedCards, arrayFilteredCards, handleSearchFilter } = this.props;
    let cardsElements;
    if (arrayFilteredCards.length < arraySavedCards.length) {
      // meens filter has used
      cardsElements = this.generateArrayCardsElements(arrayFilteredCards);
      console.log('GEROU DO ARRAY FILTRADO');
    } else {
      cardsElements = this.generateArrayCardsElements(arraySavedCards);
      console.log('GEROU DO ARRAY GERAL');
    }
    return (
      <section>
        <div>
          <h3>Filtros de busca:</h3>
          <input
            type="text"
            name=""
            data-testid="name-filter"
            placeholder="nome da carta"
            onChange={ handleSearchFilter }
          />
        </div>
        <div>{ cardsElements }</div>
      </section>
    );
  }
}

Deck.propTypes = {
  arraySavedCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleDeleteCardButton: PropTypes.func.isRequired,
  arrayFilteredCards: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSearchFilter: PropTypes.func.isRequired,
};

export default Deck;
