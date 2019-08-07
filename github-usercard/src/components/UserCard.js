import React from 'react';
import { Card, Name, Image, Location, Bio } from "./StyledWidgets";


export default class UserCard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            
            <div className="user-card">
                <Card>
                    <Name>{this.props.user.name}</Name>
                    <Image><img src={this.props.user.avatar_url} alt="img of Alexis" width="200" height="200" border="1px solid red"/></Image>
                    <Location>Location: {this.props.user.location}</Location>
                    <Bio>Bio: {this.props.user.bio}</Bio>
                </Card>
            </div>

        ); 
    }

    
}

