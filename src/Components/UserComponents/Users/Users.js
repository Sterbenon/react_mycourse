import React from 'react';
import UserAddress from "./UserAddress/UserAddress";
import UserDetails from "./UserDetails/UserDetails";
import Company from "./Company/Company";

const Users = ({item, chooseUser}) => {

    return (
        <div>
            <UserDetails item={item}/>

            <button onClick={()=> {chooseUser(id)}}> User Posts </button>

            <UserAddress item={item}/>
            <Company item={item}/>
        </div>
    );
};

export {Users};