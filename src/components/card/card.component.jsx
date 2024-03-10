import React from 'react';

import './card.styles.css'

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.techbro.id}?set=set2&size=180x180`} alt="most" />
        <h2> {props.techbro.name} </h2>
        <p> {props.techbro.email} </p>
    </div>
);