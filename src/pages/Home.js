import React from 'react';

function Home(props) {

  return (
    <div>
      <a type="submit"
        onClick={event => props.navigateTo(event, "yearRound")} href='/yearRound'>Beers Available Year Round</a>

      <a type="submit"
        onClick={event => props.navigateTo(event, "seasonal")} href='/seasonal'>Seasonal Beer</a>

      <a type="submit"
        onClick={event => props.navigateTo(event, "smallBatch")} href='/smallBatch'>Small Batch Beers</a>

      <a type="submit"
        onClick={event => props.navigateTo(event, "reserve")} href='/reserve'>Our Select Reserve</a>
    </div>
  );
}

export default Home;