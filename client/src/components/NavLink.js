import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/NavLink.css';

class NavLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  toggleHover = () => {
    this.setState({ hovered: !this.state.hovered });
  };

  render() {
    return (
      <li className=''>
        <Link
          to={this.props.url}
          style={navLink}
          className={this.state.hovered ? 'navLinkHovered' : null}
          onMouseEnter={this.toggleHover}
          onMouseLeave={this.toggleHover}>
          {this.props.page}
        </Link>
      </li>
    );
  }
}

const navLink = {
  textDecoration: 'none',
  textTransform: 'uppercase',
  color: '#fff',
  fontWeight: 'bold',
  margin: '0 10px',
  fontSize: '1.1rem'
};

export default NavLink;
