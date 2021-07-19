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
      formVisibleOnPage: false,
      selectedBeer: null,
      editing: false
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

  handleAddingNewBeerToList = (newBeer) => {
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
      description: description
    }
    dispatch(action);
    // const newBeersState = this.state.beers[department].concat(newBeer);
    // this.setState(prevState => { prevState.beers[department] = newBeersState })
  }

  handleEditingBeerInList = (beerToEdit) => {
    const { dispatch } = this.props;
    const { id, department, name, pricePerUnit, unitsLeftInKeg, unitsPerKeg, numberOfKegs, abv, ibu, description} = beerToEdit;
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
      description: description
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedBeer: null
    });
  }

 handleSellingBeer = (soldBeer) => {
    const { dispatch } = this.props;
    const { id, department, name, pricePerUnit, unitsLeftInKeg, unitsPerKeg, numberOfKegs, abv, ibu, description} = soldBeer;

    // const soldBeer = this.state.beers.filter(beer => beer.id === id)[0]
    const action1 = {
      type: 'DECREMENT_BEER',
      id: id,
      department: department,
      name: name,
      pricePerUnit: pricePerUnit,
      unitsLeftInKeg: unitsLeftInKeg - 1,
      unitsPerKeg: unitsPerKeg,
      numberOfKegs: numberOfKegs,
      abv: abv,
      ibu: ibu,
      description: description
    }
    const action2 = {
      type: 'DECREMENT_BEER',
      id: id,
      department: department,
      name: name,
      pricePerUnit: pricePerUnit,
      unitsLeftInKeg: unitsPerKeg,
      unitsPerKeg: unitsPerKeg,
      numberOfKegs: numberOfKegs - 1,
      abv: abv,
      ibu: ibu,
      description: description

    }
    if (soldBeer.unitsLeftInKeg > 0) {
      dispatch(action1)
    }
    else if ( soldBeer.unitsLeftInKeg === 0 ) {
        dispatch(action2)
    }
    // const beerListCopy = this.state.beers
    // .filter((beer) => beer.id !== id)
    // beerListCopy.push(soldBeer)
    // this.setState({ beers: beerListCopy })
  };

  handleDeletingBeer = (id) => {
    const {dispatch} = this.props;
    const action = {
      type: 'DELETE_BEER',
      id: id
    }
    dispatch(action);
    this.setState({selectedBeer: null});
  }

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