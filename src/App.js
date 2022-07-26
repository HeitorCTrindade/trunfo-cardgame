import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

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
    cardRare: '',
    cardTrunfo: false,
    // hasTrunfo: '',hasTrunfo={ hasTrunfo }
    isSaveButtonDisabled: true,
    // onSaveButtonClick: '',
    // arrayGeneratedCards: []
  }

  handleChangesForm(event) {
    // console.log(event.target.name);
    const { name, value } = event.target;
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
            onInputChange={ this.handleChangesForm }
            isSaveButtonDisabled={ isSaveButtonDisabled }
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
          />
        </section>
      </main>
    );
  }
}

export default App;
