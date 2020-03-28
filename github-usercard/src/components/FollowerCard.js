import React from 'react';
import { Follower, FollowerName } from './StyledWidgets';

export default class FollowerCard extends React.Component {
    

    render() {
        return (
            <div className="follower-card">

                <Follower>
                    <FollowerName>
                        {this.props.follower.login}
                    </FollowerName>
                    <img src={this.props.follower.avatar_url} alt="imgs of my followers" />
                </Follower>
            </div>
        )
    }
}