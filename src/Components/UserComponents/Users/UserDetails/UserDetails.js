import React from 'react';

const UserDetails = ({item}) => {
    return (
        <div>
            <h2>{item.id}{item.name}</h2>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>

        </div>
    );
};

export default UserDetails;