// import kegsJson from './../kegs.json';
// beers: kegsJson

function beerListReducer (state = {}, action) {
  const {id, department, name, pricePerUnit, unitsLeftInKeg, unitsPerKeg, numberOfKegs, costPerKeg, abv, ibu, description} = action;
  switch (action.type) {
    case 'ADD_BEER':
      return Object.assign({}, state, {
        [id]: {
          id: id,
          department: department,
          name: name,
          pricePerUnit: pricePerUnit,
          unitsLeftInKeg: unitsLeftInKeg,
          unitsPerKeg: unitsPerKeg,
          numberOfKegs: numberOfKegs,
          costPerKeg: costPerKeg,
          abv: abv,
          ibu: ibu,
          description: description
            }
      });
      case 'DECREMENT_BEER':
        return Object.assign({}, state, {
          [id]: {
            id: id,
            department: department,
            name: name,
            pricePerUnit: pricePerUnit,
            unitsLeftInKeg: unitsLeftInKeg,
            unitsPerKeg: unitsPerKeg,
            numberOfKegs: numberOfKegs,
            costPerKeg: costPerKeg,
            abv: abv,
            ibu: ibu,
            description: description
              }
        });
      case 'DELETE_BEER':
        const newState = { ...state };
        delete newState[id];
        return newState;
      default:
        return state;
  }
};

export default beerListReducer;