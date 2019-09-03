import React from 'react';

export default class UserCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-card">
                {this.props.user.name}
                <img src={this.props.user.avatar_url} alt="img of Alexis" />
                {this.props.user.bio}
                {this.props.user.followers}
                {this.props.user.following}
                {this.props.user.location}
            </div>
        );
    }
}