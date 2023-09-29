import React from 'react';
import './Cart.css';


const Cart = ({cart, handleRemoveFromCart}) => {

    //  {/* conditional rendering if/else example */}

    let message;
    if(cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message = <div>
            <h3>Boroloxx</h3>
            <p><small>Thanx for you purchase</small></p>
        </div>
    }
    // consitional rendering if/else ends here

    return (
        <div>
          {/* conditional rendering ternary operator example */}
            <h2 className={cart.length === 1 ? 'blue' : 'red' }>Order Summary:{cart.length}</h2>
        
           

            {cart.length > 2 ? <span>Aro kino</span> : <span>Fokira</span>}

            {/* conditional rendering ternary operator example ends here */}
            
            {/* conditional rendering if/else example */}
                {message}
            {
                cart.map(tshirt =><p key={tshirt._id}>{tshirt.name}<button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
        {/* conditional rendering logical && example */}
            {
                cart.length === 2 && <p>Double bonanza!!</p>
            }
        {/* conditional rendering logical || exapmle */}
            {
                cart.length === 3 || <h3>tinta hoilo na, condition mile nai, shejonno dekhacche</h3>
            }
    {/* conditional css */}
    <p className={`bold ${cart.length === 3 ?'yellow' : 'orange'}`}>Something</p>
        </div>
    );
};

export default Cart;
/* 
COnditional Rendering
1. use if/else to set a variable that will contain an element, component, 

2. ternary operator condition ? 'true' : 'false'

3. Logical &&: (if the condition is true then the next thing will be displayed)

4. Logical || (if the condition is false then the next thing will be displayed)

*/

/*
COnditional CSS
1. use ternary
2. ternary inside template string
*/ 