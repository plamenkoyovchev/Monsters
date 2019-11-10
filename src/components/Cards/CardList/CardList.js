import React from 'react';
import './CardList.css';

import Card from '../Card/Card';

const CardList = props => {
    const cards = props.monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
    ));

    return (<div className='CardList'>{cards}</div>);
};

export default CardList;