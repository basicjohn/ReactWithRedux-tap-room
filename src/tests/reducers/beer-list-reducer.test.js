import beerListReducer from '../../reducers/beer-list-reducer';

describe('beerListReducer', () => {

  let action;

  const currentState = {
    1: {
      "id": "df3dab63-1f67-43b6-ab5c-5065cd864814",
      "name": "IRA",
      "pricePerUnit": 5,
      "unitsLeftInKeg": 124,
      "unitsPerKeg": 124,
      "numberOfKegs": 3,
      "costPerKeg": 248,
      "abv": 6.5,
      "ibu": 65,
      "description": "Our India Red Ale uses plenty of Northwest-grown, Brewer’s Gold and Simcoe hops. With a solid foundation of Pilsner and crystal malts and our inimitable house yeast, these ingredients intertwine in delicious complexity and a shining ruby hue."
    },
    2: {
      "id": "53e5bc74-26e9-4228-a4b6-6b0929695772",
      "name": "Kolsch",
      "pricePerUnit": 5,
      "unitsLeftInKeg": 124,
      "unitsPerKeg": 124,
      "numberOfKegs": 3,
      "costPerKeg": 248,
      "abv": 5.2,
      "ibu": 40,
      "description": "This unfiltered Ale features a unique yeast strain, providing restrained fruited aromas to complement the rounded malt quality; with a touch more hop character than its counterpart in Cologne. Crisp, dry, and highly refreshing."
    }
  };

const beerData = {
    "id": "df3dab63-1f67-43b6-ab5c-5065cd864814",
    "name": "IRA",
    "pricePerUnit": 5,
    "unitsLeftInKeg": 124,
    "unitsPerKeg": 124,
    "numberOfKegs": 3,
    "costPerKeg": 248,
    "abv": 6.5,
    "ibu": 65,
    "description": "Our India Red Ale uses plenty of Northwest-grown, Brewer’s Gold and Simcoe hops. With a solid foundation of Pilsner and crystal malts and our inimitable house yeast, these ingredients intertwine in delicious complexity and a shining ruby hue."
};

  test('Should return default state if no action type is recognized', () => {
    expect(beerListReducer({}, {type: null})).toEqual({});
  });
  test('Should successfully add new beer data to beersTicketList')

})