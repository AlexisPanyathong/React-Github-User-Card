import React from 'react';
import { Name, Location } from "./StyledWidgets";


export default class UserCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            
            <div className="user-card">
                <img src={this.props.user.avatar_url} alt="img of Alexis" width="200"/>
                <Name>{this.props.user.name}</Name>
                <Location>{this.props.user.location}</Location>
                <div>{this.props.user.bio}</div>

            </div>

        ); 
    }

    
}

