import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/AlexisPanyathong')
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log('Error, please try again'));
  }

  render() {
    return (
      <h1>Welcome!</h1>
    )
  }
}

export default App;