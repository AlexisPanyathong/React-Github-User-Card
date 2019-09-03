import React from 'react';

export default class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="follower-card">
                {this.props.follower.login}
            </div>
        )
    }
}