import React from 'react';
import './Card.css';

const Card = props => {
    const { monster } = props;
    return (
        <div className='Card'>
            <img src={`https://robohash.org/${monster.id}?set=set1&size=200x200`} alt={monster.name} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    );
};

export default Card;