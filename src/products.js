import React from 'react';

const Product = (props) => { 
    return (
    <div>
        <h1>{props.name}</h1>
        <div>
            <p>
                The {props.name} will make your nose bleed as your search for fame and fortune!
            </p>
            <div className="small-container">
                <p className="price">${props.price}</p>
                <p className="choose-color">{props.color}</p>
            </div>
        </div>
    </div>
    );
};

export default Product;