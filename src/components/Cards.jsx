import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map(c => <Card
          id={c.id}
          key={c.id}
          humidity={c.humidity}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          wind={c.wind}
        /> )}
    </div>
  );
}
