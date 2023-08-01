import React from 'react';

const UserAddress = ({item}) => {
    return (
        <div>
            <h3>Address</h3>
            <p>{item.address.street}</p>
            <p>{item.address.suite}</p>
            <p>{item.address.city}</p>
            <p>{item.address.zipcode}</p>
            <p>{item.address.geo.lat} - {item.address.geo.lng}</p>
        </div>
    );
};

export default UserAddress;