import React, {Component} from 'react';
import Coins from './components/coins';

function handleErrors(response) {
  if (!response.ok) {
      console.log(response.statusText);
      throw Error(response.statusText);
  }
  return response;
}

class App extends Component {
  state = {
    coins: [],
    errorMessage: ''
  }

  componentDidMount() {
    fetch('/coins')
    .then(handleErrors)
    .then(res => res.json())
    .then((data) => {
      this.setState({ coins: data })
    })
    .then( this.setState({ errorMessage: "" }))
    .catch(error => this.setState({ errorMessage: "Failed to retrieve data :( Sorry" }));
  }

  render () {
    return (
      <div>
        <Coins coins={this.state.coins} />
        <center>{this.state.errorMessage}</center>
      </div>
    );
  }
}

export default App;
