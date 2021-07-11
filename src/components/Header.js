import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {

  return (
    <header>
      {/* <h1>{props.title}</h1> */}
      <ul>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "home")} href='/home'>Home</a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "yearRound")} href='/yearRound'>Year Round</a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "seasonal")} href='/seasonal'>Seasonal</a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "smallBatch")} href='/smallBatch'>Small Batch</a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "reserve")} href='/reserve'>Reserve Select</a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "beerDetail")} href='/beerDetail'>Beer Details</a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "admin")} href='/admin'>Admin</a>
        </li>
      </ul>
    </header>
  )
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired
// }

export default Header;