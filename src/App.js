import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <h1>Tryunfo</h1>
        <section id="game-section">
          <Form />
          <Card />
        </section>
      </main>
    );
  }
}

export default App;
