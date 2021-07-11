import React from 'react';
import BeerList from './../components/BeerList';
import { seasonal } from '../kegs.json';

function Seasonal(props) {
  return (
    <div className='container'>
      <BeerList beers={seasonal} department={props.department} sellBeer={props.sellBeer} />
    </div>
  );
}

export default Seasonal;