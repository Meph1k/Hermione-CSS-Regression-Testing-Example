import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Status</Link></li>
      <li><hr /></li>
      <li><Link to="/skills">Skills</Link></li>
      <li><hr /></li>
      <li><Link to="/inventory">Inventory</Link></li>
      <li><hr /></li>
      <li><Link to="/general">General</Link></li>
    </ul>
  </nav>
)

export default Navbar;

Navbar.defaultProps = {

}

Navbar.propTypes = {

}
