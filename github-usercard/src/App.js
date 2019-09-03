import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard  from './components/UserCard';
import FollowerCard from './components/FollowerCard';
import { Header } from './components/StyledWidgets';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            followersData: {}
            
        }
    };


    handleUserChange = e => {
        this.setState({ userCard: e.target.value});
    };

    componentDidMount() {
      this.getUserData();
    }
    
    getUserData() {
      axios.get(`https://api.github.com/users/AlexisPanyathong`)
        //handle success
        .then(response => {
            // console.log(response.data);
            this.setState({data: response.data})
  
          })

          //handle error
          .catch(err => {
              console.log(`Error, please try again.`, err);
          });

      axios.get(`https://api.github.com/users/AlexisPanyathong/followers`)
      //handle success
      .then(response => {
        console.log(response.data);
        this.setState({followersData: response.data})
      })

      //handle error
      .catch(err => {
        console.log(`Error, please try again!`, err);
      })

  }

    render() {
        return (
            <div>
                <input onChange={this.handleUserChange} placeholder="search users" />
                
                <UserCard user={this.state.data} />
                <Header>Followers:</Header>
                {/* {this.state.followersData.map(follower => (
                  <FollowerCard follower={follower} />
                ))} */}
            </div>
        );

    }
}

export default App;