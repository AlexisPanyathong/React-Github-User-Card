import React from 'react';

export function UserCard({user}) {
    return (
        <div className="user-card">
            <div>
                {user.data.name}
            </div>
        </div>
    )
}