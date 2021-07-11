import Beer from './Beer';

function BeerList(props) {


  return (
    <div className="beersContainer">
      {props.beers.map((beer, index) => <Beer beers={props.beers} beer={beer} id={index} key={beer.id} department={props.department} sellBeer={props.sellBeer}/>)}
    </div>
  )
}

export default BeerList;