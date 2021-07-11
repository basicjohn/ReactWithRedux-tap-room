import React from 'react';
import BeerList from './../components/BeerList';
import { reserve } from '../kegs.json';

function Reserve(props) {
  return (
    <div className='container'>
      <BeerList beers={reserve} department={props.department} sellBeer={props.sellBeer} />
    </div>
  );
}

export default Reserve;