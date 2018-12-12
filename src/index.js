import React from 'react';
import ReactDOM from 'react-dom';
import Product from './products';

const App = () => {
    return (
    <div className="global-container">
        <Product 
        name="Firebolt" 
        price="2,300" 
        color="yellow"/>
        <Product 
        name="Speesters" 
        price="8,900"
        color="black"/>
        <Product 
        name="Nimbus 4000" 
        price="1,200"
        color="blue"/>
        


    </div>




    );
};

ReactDOM.render(<App />, document.querySelector('#root'));