import React, {useEffect, useState} from 'react';
import {Launch} from "./Launch/Launch";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() =>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setLaunches(value))
    }, [])
    return (
        <div>
            {launches.map(launch=> <Launch key={launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export  {Launches};