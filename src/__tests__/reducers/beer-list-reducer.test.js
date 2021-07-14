import beerListReducer from '../../reducers/beer-list-reducer';

describe('beerListReducer', () => {

  let action;

  const currentState = {
    "df3dab63-1f67-43b6-ab5c-5065cd864814": {
      id: "df3dab63-1f67-43b6-ab5c-5065cd864814",
      department: "seasonal",
      name: "IPA",
      pricePerUnit: 5,
      unitsLeftInKeg: 124,
      unitsPerKeg: 124,
      numberOfKegs: 3,
      costPerKeg: 248,
      abv: 6.5,
      ibu: 65,
      description: "Our India Red Ale uses plenty of Northwest-grown, Brewer’s Gold and Simcoe hops. With a solid foundation of Pilsner and crystal malts and our inimitable house yeast, these ingredients intertwine in delicious complexity and a shining ruby hue."
    },
    "53e5bc74-26e9-4228-a4b6-6b0929695772": {
      id: "53e5bc74-26e9-4228-a4b6-6b0929695772",
      department: "seasonal",
      name: "Kolsch",
      pricePerUnit: 5,
      unitsLeftInKeg: 124,
      unitsPerKeg: 124,
      numberOfKegs: 3,
      costPerKeg: 248,
      abv: 5.2,
      ibu: 40,
      description: "This unfiltered Ale features a unique yeast strain, providing restrained fruited aromas to complement the rounded malt quality; with a touch more hop character than its counterpart in Cologne. Crisp, dry, and highly refreshing."}
  };

const beerData = {
    id: "df3dab63-1f67-43b6-ab5c-5065cd864814",
    department: "seasonal",
    name: "IPA",
    pricePerUnit: 5,
    unitsLeftInKeg: 124,
    unitsPerKeg: 124,
    numberOfKegs: 3,
    costPerKeg: 248,
    abv: 6.5,
    ibu: 65,
    description: "Our India Red Ale uses plenty of Northwest-grown, Brewer’s Gold and Simcoe hops. With a solid foundation of Pilsner and crystal malts and our inimitable house yeast, these ingredients intertwine in delicious complexity and a shining ruby hue."
};

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(beerListReducer({}, {type: null})).toEqual({});
  });
  test('Should successfully add new beer data to masterBeerList', () => {
    const { id, department, name, pricePerUnit, unitsLeftInKeg, unitsPerKeg, numberOfKegs, costPerKeg, abv, ibu, description} = beerData;
    action = {
      type: 'ADD_BEER',
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
    };

    expect(beerListReducer({}, action)).toEqual({
      [id] : {
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
  });

  test('Should successfully delete a beer', () => {
    action = {
      type: 'DELETE_BEER',
      id: "df3dab63-1f67-43b6-ab5c-5065cd864814"
    };
    expect(beerListReducer(currentState, action)).toEqual({
      "53e5bc74-26e9-4228-a4b6-6b0929695772": {
        id: "53e5bc74-26e9-4228-a4b6-6b0929695772",
        department: "seasonal",
        name: "Kolsch",
        pricePerUnit: 5,
        unitsLeftInKeg: 124,
        unitsPerKeg: 124,
        numberOfKegs: 3,
        costPerKeg: 248,
        abv: 5.2,
        ibu: 40,
        description: "This unfiltered Ale features a unique yeast strain, providing restrained fruited aromas to complement the rounded malt quality; with a touch more hop character than its counterpart in Cologne. Crisp, dry, and highly refreshing."}
    });
  });

});