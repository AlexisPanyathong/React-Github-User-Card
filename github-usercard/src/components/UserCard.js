import React from 'react';
import { Card, Name, Bio, Info, Followers, Following, Location } from './StyledWidgets';

export default class UserCard extends React.Component {
   
    // Test
    render() {
        return (
            <div className="user-card">
                <Card>
                    <Name>
                        {this.props.user.name}
                    </Name>
                    <img src={this.props.user.avatar_url} alt="img of Alexis" />

                    <Bio>
                        {this.props.user.bio}
                    </Bio>

                    <Info>
                        <Followers>
                            Followers: {this.props.user.followers}
                        </Followers>

                        <Following>
                            Following: {this.props.user.following}
                        </Following>
                    
                        <Location>
                            {this.props.user.location}
                        </Location>
                    </Info>
                    
                </Card>
            </div>
        );
    }
}