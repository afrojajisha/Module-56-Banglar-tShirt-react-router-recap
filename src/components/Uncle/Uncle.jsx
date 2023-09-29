import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p><small></small>grandpa money: {money}</p>
            <button onClick ={()=>setMoney(money + 1000)}>Send 1K tk</button>
            <section className='flex'>
                <Cousin>Nabila</Cousin>
                <Cousin>Nabil</Cousin>
            </section>
        </div>
    );
};

export default Uncle;