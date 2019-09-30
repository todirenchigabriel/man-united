import React, { Component } from 'react';
import './style/Button.css';
import { Link } from 'react-router-dom';

class Button extends Component {
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
      <Link
        className={
          this.state.hovered ? 'buttonCheckPlayers-hover' : 'buttonCheckPlayers'
        }
        style={buttonStyle}
        onMouseEnter={this.toggleHover}
        onMouseLeave={this.toggleHover}
        to={this.props.to}>
        Checkout our players
      </Link>
    );
  }
}

const buttonStyle = {
  color: '#fff',
  display: 'inline-block',
  fontWeight: 400,
  verticalAlign: 'middle',
  border: '1px solid transparent',
  padding: '0.375rem 0.75rem',
  lineHeight: 1.5,
  borderRadius: '0.25rem',
  fontSize: '0.9rem',
  textDecoration: 'none'
};

export default Button;
