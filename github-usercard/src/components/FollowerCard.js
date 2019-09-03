import React from 'react';

export default class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="follower-card">
                {this.props.follower.login}
                <img src={this.props.follower.avatar_url} />
            </div>
        )
    }
}