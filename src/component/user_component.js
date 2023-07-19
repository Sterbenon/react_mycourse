import React from 'react';

export const UserComponent = (props) => {
    let {id, name, status, species, gender, photo} = props;
    return (
        <div>
            <h2>{name}</h2>
            <ul>
                <li>{id}</li>
                <li>{status}</li>
                <li>{species}</li>
                <li>{gender}</li>
            </ul>
            <img src={photo} alt={name}/>
        </div>
    );
};
