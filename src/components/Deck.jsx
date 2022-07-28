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
    const {
      arraySavedCards,
      arrayFilteredCards,
      handleSearchFilter,
      nameFilter,
      rareFilter,
    } = this.props;
    let arrayTest = [];
    arrayTest = arraySavedCards
      .filter((card) => card.cardName.includes(nameFilter) || nameFilter === '')
      .filter((card) => card.cardRare === rareFilter || rareFilter === 'todas');
    const cardsElements = this.generateArrayCardsElements(arrayTest);
    return (
      <section>
        <div>
          <h3>Filtros de busca:</h3>
          <input
            type="text"
            name="nameFilter"
            data-testid="name-filter"
            placeholder="nome da carta"
            onChange={ handleSearchFilter }
          />
          <select
            name="cardRare"
            id=""
            data-testid="rare-filter"
            onChange={ handleSearchFilter }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
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
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default Deck;
