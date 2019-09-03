import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowerCard from './components/FollowerCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      followers: {}
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
        <h1>Welcome!</h1>

        <UserCard user={this.state.data} />

        {/* {this.state.followers.map(follower => {
          <FollowerCard follower={follower} />
        })} */}

      </div>
    )
  }
}

export default App;