import React from 'react';

import { Card } from '../card/card.component'; 

import './card-list.style.css';

export const CardList = props => (
    <div className='card-items'>
        { props.techbros.map(techbro => (
           <Card key={techbro.id} techbro={techbro}/>
          ))}  
    </div>
);  