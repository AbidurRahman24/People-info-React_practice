import React from 'react';

const Card = (props) => {
    const card = props.card
    const total = card.reduce( (total, prd) => total + prd.price , 0 )
    // console.log(total);
    return (
        <div>
            {
                card.map(pd =><h1>{card}</h1> )
            }
           <p>Items ordered: {card.length}</p>
           <p>price: {total}</p>
        </div>
    );
};

export default Card;