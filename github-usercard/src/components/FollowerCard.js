import React from 'react';
import { CardTwo, FollowerName } from './StyledWidgets';

export default class FollowerCard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="follower-card">
                <CardTwo>
                    <FollowerName>
                        {this.props.info.login}
                    </FollowerName>
                </CardTwo>
            </div>
        )
    }
}