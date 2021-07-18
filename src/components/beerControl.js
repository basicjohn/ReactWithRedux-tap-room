import React, { Component } from 'react';
import { connect } from 'react-redux';
// Pages
import Admin from './../pages/Admin';
import Home from './../pages/Home';
import YearRound from './../pages/YearRound';
import Seasonal from './../pages/Seasonal';
import SmallBatch from './../pages/SmallBatch';
import Reserve from './../pages/Reserve';
import BeerDetail from './../pages/BeerDetail';
import { v4 } from 'uuid';

// Helpers/data

class BeerControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.getCurrentLocation(),
    }
  }

  getCurrentLocation = () => {
    return window.location.pathname.slice(1)
  }

  navigateTo = (event, location) => {
    event.preventDefault();
    this.setState({ currentPage: location });
    window.history.replaceState({}, 'Double Fountain Brewery', location);
  }

  createBeer = (newBeer) => {
    const {dispatch} = this.props;
    const { id, department, name, pricePerUnit, unitsLeftInKeg, unitsPerKeg, numberOfKegs, abv, ibu, description} = newBeer;
    const action = {
      type: 'ADD_BEER',
      id: id,
      department: department,
      name: name,
      pricePerUnit: pricePerUnit,
      unitsLeftInKeg: unitsLeftInKeg,
      unitsPerKeg: unitsPerKeg,
      numberOfKegs: numberOfKegs,
      abv: abv,
      ibu: ibu,
      description
    }
    dispatch(action);
    // const newBeersState = this.state.beers[department].concat(newBeer);
    // this.setState(prevState => { prevState.beers[department] = newBeersState })
  }


 handleSellingBeer = (id, department) => {
    console.log(id, department)
    const soldBeer = this.state.beers[department].filter(beer => beer.id === id)[0]
    if (soldBeer.UnitsLeftInKeg > 0) {
      soldBeer.UnitsLeftInKeg -= 1
    }
    else if ( soldBeer.UnitsLeftInKeg === 0 ) {
      if (soldBeer.numberOfKegs > 0) {
        soldBeer.numberOfKegs -= 1
        soldBeer.UnitsLeftInKeg = soldBeer.unitsPerKeg
      }
    }
    const beerListCopy = this.state.beers[department]
    .filter((beer) => beer.id !== id)
    beerListCopy.push(soldBeer)
    this.setState({ beers: beerListCopy })
  };


  render() {
    let currentlyVisibleState = null;

    if (this.state.currentPage === 'beerDetail') {
      currentlyVisibleState = <BeerDetail />
    } else if (this.state.currentPage === 'yearRound') {
      currentlyVisibleState = <YearRound department='yearRound' sellBeer={(id,department) => this.handleSellingBeer(id, department)}/>
    } else if (this.state.currentPage === 'seasonal') {
      currentlyVisibleState = <Seasonal department='seasonal' sellBeer={(id,department) => this.handleSellingBeer(id, department)}/>
    } else if (this.state.currentPage === 'smallBatch') {
      currentlyVisibleState = <SmallBatch department='smallBatch' sellBeer={(id,department) => this.handleSellingBeer(id, department)}/>
    } else if (this.state.currentPage === 'reserve') {
      currentlyVisibleState = <Reserve department='reserve' sellBeer={(id,department) => this.handleSellingBeer(id, department)}/>
    } else if (this.state.currentPage === 'admin') {
      // normally check for admin privileges
      currentlyVisibleState = <Admin createBeer={this.createBeer} />
    } else {
      currentlyVisibleState = <Home navigateTo={this.navigateTo} />
    }

    return (
      <main>
        {currentlyVisibleState}
      </main>
    );
  }
}

BeerControl = connect()(BeerControl);

export default BeerControl;