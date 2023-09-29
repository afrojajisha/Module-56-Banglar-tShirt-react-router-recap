import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Auntie from '../Auntie/Auntie';
import './Grandpa.css';


export const RingContext = createContext ('gold');
export const MoneyContext = createContext(0);

const Grandpa = () => {
    const ring = 'diamond';
    const [money, setMoney] = useState(0)
  
    return (
        <div className='grandpa'>
            <h2 >Grandpa</h2>
            <p>Has Money : {money}

            </p>
            {/* <RingContext.Provider value='golden-ring'>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Auntie ring={ring} ></Auntie>

            </section>
            </RingContext.Provider> */}
            <MoneyContext.Provider value={[money, setMoney]}>
                <RingContext.Provider value='golden-ring'>
                <section className='flex'>
                    <Father ring={ring}></Father>
                    <Uncle></Uncle>
                    <Auntie ring={ring} ></Auntie>

                </section>
                </RingContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/*

1. Create a Context
2. Create a Provider ans pass a value
3. use useContext to receive the value
*/

