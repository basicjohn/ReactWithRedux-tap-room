import React, { useState } from 'react';
import Header from './../components/Header';

function Admin(props) {
  const [department, setDepartment] = useState("seasonal")
  const [name, setName] = useState("")
  const [pricePerUnit, setPricePerUnit] = useState("")
  const [unitsPerKeg, setUnitsPerKeg] = useState("")
  const [numberOfKegs, setNumberOfKegs] = useState("")
  const [abv, setAbv] = useState("")
  const [ibu, setIbu] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = event => {
    event.preventDefault();
    props.createBeer(name, pricePerUnit, unitsPerKeg, numberOfKegs, abv, ibu, description, department)
  }

  return (
    <>
      <div>
        <form onSubmit={event => handleSubmit(event)}>
          Create
          <select onChange={event => setDepartment(event.target.value)} placeholder="Department" required>
            <option value='yearRound' >Year Round</option>
            <option value='seasonal' selected>Seasonal</option>
            <option value='smallBatch'>Small Batch</option>
            <option value='reserve'>Reserve</option>
          </select>
          <input onChange={event => setName(event.target.value)} placeholder="Name" required></input>
          <input onChange={event => setPricePerUnit(event.target.value)} placeholder="Price Per Pint" type='number' min='0' required></input>
          <input onChange={event => setUnitsPerKeg(event.target.value)} placeholder="Pints Per Keg" required></input>
          <input onChange={event => setNumberOfKegs(event.target.value)} placeholder="Number of Kegs" required></input>
          <input onChange={event => setAbv(event.target.value)} placeholder="Alcohol By Volume (ABV)" required></input>
          <input onChange={event => setIbu(event.target.value)} placeholder="Bittness Units (IBU)" required></input>
          <textarea onChange={event => setDescription(event.target.value)} placeholder="Describe the beer" required></textarea>
          <button type='submit'>Add Beer</button>
        </form>
      </div>

      <div>
        Read
        Delete
        Update
        {JSON.stringify(props.beers)}
        {/* add delete button */}
      </div>
    </>
  )
}

export default Admin;