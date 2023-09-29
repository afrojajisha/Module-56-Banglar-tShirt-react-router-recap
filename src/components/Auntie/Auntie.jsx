import React from 'react';
import Cousin from '../Cousin/Cousin';

const Auntie = ({ring}) => {
    return (
        <div>
            <h2>Auntie</h2>
            <section className='flex'>
                <Cousin >Nibir</Cousin>
                <Cousin hasFriend={true} ring={ring}>Abir</Cousin>
            </section>
        </div>
    );
};

export default Auntie;