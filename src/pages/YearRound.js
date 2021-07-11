import React from 'react';
import BeerList from './../components/BeerList';
import { yearRound } from '../kegs.json';

function YearRound(props) {
  return (
    <div className='container'>
      <BeerList beers={yearRound} department={props.department} sellBeer={props.sellBeer} />
    </div>
  );
}

export default YearRound;