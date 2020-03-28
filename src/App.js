import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

import { Header } from './components/StyledWidgets';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      followers: []
    };

  }

  componentDidMount() {
    axios.get('https://api.github.com/users/AlexisPanyathong')
      .then(res => {
        this.setState({ data: res.data})
        console.log(res)
      })
      .catch(err => console.log('Error, please try again', err));

      axios.get('https://api.github.com/users/AlexisPanyathong/followers')
        .then(res => {
          this.setState({ followers: res.data})
          console.log('followers', res)
        })
        .catch(err => console.log('Error on followers', err))
  }



  render() {
    return (
      <div className="App">

        <UserCard user={this.state.data} />

        <Header><h1>Followers:</h1></Header>

        {this.state.followers.map(follower => (
          <FollowerCard follower={follower} />
        ))}

      </div>
    )
  }
}

export default App;