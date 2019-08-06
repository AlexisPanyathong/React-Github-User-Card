import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard  from './components/UserCard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            
        }
    };


    // handleUserChange = e => {
    //     this.setState({ userCard: e.target.value});
    // };

    componentDidMount() {
      this.getUserData();
    }
    
    getUserData() {
      axios.get(`https://api.github.com/users/AlexisPanyathong`)
        //handle success
        .then(response => {
            console.log(response.data);
            this.setState({data: response.data})
  
          })

          //handle error
          .catch(err => {
              console.log(`Error, please try again.`, err);
          });

  }

    render() {
        return (
            <div>
                {/* <input onChange={this.handleUserChange} placeholder="search users" /> */}
                <h1>Testing</h1>
                <UserCard user={this.state.data} />
            </div>
        );

    }
}

export default App;