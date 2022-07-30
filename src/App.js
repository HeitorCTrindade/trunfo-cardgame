import React from 'react';
import Card from './components/Card';
import Deck from './components/Deck';
import Form from './components/Form';
import './index.css';
import './card.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChangesForm = this.handleChangesForm.bind(this);
  }

  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: 'normal',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    arraySavedCards: [],
    generateDeleteButton: false,
    arrayFilteredCards: [],
    nameFilter: '',
    rareFilter: 'todas',
    superTrunfoFilter: false,
  }

  handleChangesForm(event) {
    const { name, value } = event.target;
    if (name === 'cardTrunfo') {
      this.setState((prevState) => ({ [name]: !prevState.cardTrunfo }));
    } else {
      this.setState({ [name]: value }, () => {
        const limitSumAtrr = 210;
        const limitAtrr = 90;
        const {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
        } = this.state;
        const cardAttr1Int = parseInt(cardAttr1, 10);
        const cardAttr2Int = parseInt(cardAttr2, 10);
        const cardAttr3Int = parseInt(cardAttr3, 10);
        const isButtonDisabled = cardName.length === 0
        || cardDescription.length === 0
        || cardRare.length === 0
        || cardImage.length === 0
        || (cardAttr1Int + cardAttr2Int + cardAttr3Int) > limitSumAtrr
      || cardAttr1Int > limitAtrr || cardAttr2Int > limitAtrr || cardAttr3Int > limitAtrr
        || cardAttr1Int < 0 || cardAttr2Int < 0 || cardAttr3Int < 0;
        this.setState({
          isSaveButtonDisabled: isButtonDisabled,
        });
      });
    }
  }

  handleSaveButton = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
    } = this.state;

    const newCardObj = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    if (hasTrunfo && cardTrunfo) return 0;
    this.setState((prevState) => {
      if (cardTrunfo) {
        return {
          arraySavedCards: [...prevState.arraySavedCards, newCardObj],
          cardName: '',
          cardDescription: '',
          cardImage: '',
          cardRare: 'normal',
          cardAttr1: 0,
          cardAttr2: 0,
          cardAttr3: 0,
          hasTrunfo: true,
          cardTrunfo: false,
        };
      }
      return {
        arraySavedCards: [...prevState.arraySavedCards, newCardObj],
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardRare: 'normal',
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardTrunfo: false,
      };
    });
  }

  handleDeleteCardButton = (event) => {
    const { name } = event.target;
    this.setState((prevState) => {
      const newArraySavedCards = prevState.arraySavedCards
        .filter((card) => card.cardName !== name);
      const arrayOnlyDeletedCard = prevState.arraySavedCards
        .filter((card) => card.cardName === name);
      console.log(arrayOnlyDeletedCard);
      return {
        arraySavedCards: newArraySavedCards,
        hasTrunfo: !arrayOnlyDeletedCard[0].cardTrunfo, // If the deleted card is 'superTrunfo' ((cardTrunfo = true)), then there will be no such card in the deck (hasTrunfo = false (!cardTrunfo)).
      };
    });
  }

  handleSearchFilter = (event) => {
    const { name, value } = event.target;
    if (name === 'superTrunfoFilter') {
      this.setState((prevState) => ({ [name]: !prevState.superTrunfoFilter }));
    } else {
      this.setState({ [name]: value });
    }
  }

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
      hasTrunfo,
      isSaveButtonDisabled,
      arraySavedCards,
      generateDeleteButton,
      arrayFilteredCards,
      nameFilter,
      rareFilter,
      superTrunfoFilter,
    } = this.state;

    return (
      <main>
        <h1>Tryunfo</h1>
        <section id="game-section">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            onInputChange={ this.handleChangesForm }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.handleSaveButton }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            onInputChange={ this.handleChangesForm }
            generateDeleteButton={ generateDeleteButton }
            handleDeleteCardButton={ this.handleDeleteCardButton }
          />
        </section>
        <section>
          <h2>Deck de Cartas:</h2>
          <Deck
            arraySavedCards={ arraySavedCards }
            handleDeleteCardButton={ this.handleDeleteCardButton }
            handleSearchFilter={ this.handleSearchFilter }
            arrayFilteredCards={ arrayFilteredCards }
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            superTrunfoFilter={ superTrunfoFilter }
          />
        </section>
      </main>
    );
  }
}

export default App;
