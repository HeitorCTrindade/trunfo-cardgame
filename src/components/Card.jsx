import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      generateDeleteButton,
      handleDeleteCardButton,
    } = this.props;
    let renderTrunfo;
    let renderCloseButton;
    if (cardTrunfo) {
      renderTrunfo = <h3 data-testid="trunfo-card">Super Trunfo</h3>;
    } else {
      renderTrunfo = <> </>;
    }
    if (generateDeleteButton) {
      renderCloseButton = (
        <button
          type="button"
          name={ cardName }
          data-testid="delete-button"
          onClick={ handleDeleteCardButton }
        >
          Delete Card
        </button>);
    } else {
      renderCloseButton = <> </>;
    }
    return (
      <section className="card">
        <h3 className="container" data-testid="name-card">
          { cardName }
        </h3>
        <img
          className="container"
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <div className="container">
          <p data-testid="description-card">
            { cardDescription }
          </p>
          <p data-testid="attr1-card">
            atrrb01.............
            { cardAttr1 }
          </p>
          <p data-testid="attr2-card">
            atrrb02.............
            { cardAttr2 }
          </p>
          <p data-testid="attr3-card">
            atrrb03.............
            { cardAttr3 }
          </p>
          <h3 data-testid="rare-card">
            { cardRare }
          </h3>
          { renderTrunfo }
        </div>
        <div>
          { renderCloseButton }
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  generateDeleteButton: PropTypes.bool.isRequired,
  handleDeleteCardButton: PropTypes.func.isRequired,
};

export default Card;
