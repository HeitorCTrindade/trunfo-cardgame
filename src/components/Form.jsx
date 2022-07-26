import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <h2>Adicionar nova carta</h2>
        <form className="form-cards">
          <p>Nome:</p>
          <input
            type="text"
            name="cardName"
            id=""
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
          <p>Descrição:</p>
          <textarea
            name="cardDescription"
            id=""
            data-testid="description-input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          <p>attr01</p>
          <input
            type="number"
            name="cardAttr1"
            id=""
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <p>attr02</p>
          <input
            type="number"
            name="cardAttr2"
            id=""
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <p>attr03</p>
          <input
            type="number"
            name="cardAttr3"
            id=""
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
          <p>Imagem:</p>
          <input
            type="text"
            name="cardImage"
            id=""
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <p>Selecione a raridade da carta:</p>
          <select
            name="cardRare"
            id=""
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <input
            type="checkbox"
            name="cardTrunfo"
            id="trunfo"
            data-testid="trunfo-input"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          Super Trybe Trunfo
          <button
            type="submit"
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
