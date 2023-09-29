import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Brother = () => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Brother: 
                <p><small>{ring}</small></p>
            </h2>
        </div>
    );
};

export default Brother;