import React from 'react';

const Company = ({item}) => {
    return (
        <div>
            <h3>Company</h3>
            <p>{item.company.name}</p>
            <p>{item.company.catchPhrase}</p>
            <p>{item.company.bs}</p>
            
        </div>
    );
};

export default Company;