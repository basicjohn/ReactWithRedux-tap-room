export default (state = {}, action) => {
  const {id, department, name, pricePerUnit, unitsPerKeg, numberOfKegs, costPerKeg, abv, ibu, description} = action;
  switch (action.type) {
    case 'ADD_BEER':
      return Object.assign({}, state, {
        [id]: {
          id: id,a
          department: department,
          name: name,
          pricePerUnit: pricePerUnit,
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
      default:
        return state;
  }
};