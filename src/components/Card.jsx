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
      cardTrunfo: isCardTrunfo,
      generateDeleteButton,
      handleDeleteCardButton,
    } = this.props;

    return (
      <section className="content">
        <div className="card" id={ cardRare }>
          <h2 className="container" data-testid="name-card">
            {cardName}
          </h2>
          <img
            id="image-card"
            className="container"
            src={ cardImage }
            alt={ cardName }
            data-testid="image-card"
          />
          <div className="container">
            <p data-testid="description-card">{cardDescription}</p>
            <p data-testid="attr1-card">
              atrrb01.....................................
              {cardAttr1}
            </p>
            <p data-testid="attr2-card">
              atrrb02.....................................
              {cardAttr2}
            </p>
            <p data-testid="attr3-card">
              atrrb03.....................................
              {cardAttr3}
            </p>
            <h2 data-testid="rare-card">{cardRare}</h2>
            {/* { renderTrunfo } */}
            {isCardTrunfo ? (
              <h2 data-testid="trunfo-card">Super Trunfo</h2>
            ) : (
              <> </>
            )}
          </div>
          <div>
            {/* { renderCloseButton } */}
            {generateDeleteButton ? (
              <button
                type="button"
                name={ cardName }
                data-testid="delete-button"
                onClick={ handleDeleteCardButton }
              >
                Delete Card
              </button>
            ) : (
              <> </>
            )}
          </div>
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
