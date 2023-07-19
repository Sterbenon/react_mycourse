import React from 'react';

export const UserComponent = (props) => {
    let {name, surname, age, photo}=props;
    return (
        <div>
            <h2>{name} {surname} {age}</h2>
            <img src={photo} alt={name}/>
        </div>
    );
};

