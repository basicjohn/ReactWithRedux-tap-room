import React from 'react';
import BeerList from './../components/Beer';
import kegs from '../kegs.json';

function BeerDetail() {
  return (
    <div className='container'>
      <BeerList beers={kegs} />
    </div>
  );
}

export default BeerDetail;