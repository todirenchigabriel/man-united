import React, { Component } from 'react';
import './style/Player.css';
import { Link } from 'react-router-dom';

const playerSection = {
  color: '#fff',
  width: '30%',
  position: 'relative',
  margin: '20px auto',
  alignSelf: 'auto',
  overflow: 'hidden'
};

const playerImage = {
  width: '100%',
  height: '100%',
  transition: 'transform 0.75s ease-in'
};

const playerName = {
  position: 'absolute',
  bottom: '30px',
  left: '16px',
  zIndex: 1,
  textTransform: 'uppercase',
  fontSize: '1.5rem'
};

const playerNumber = {
  position: 'absolute',
  bottom: '70px',
  left: '16px',
  zIndex: 1,
  fontSize: '1.5rem',
  borderBottom: '1px solid red',
  width: '30px',
  textAlign: 'left'
};

class Player extends Component {
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
      <div style={playerSection}>
        <Link
          to={`/players/${this.props.slug}`}
          style={{ zIndex: '2', color: 'white' }}>
          <img
            src={this.props.image}
            style={playerImage}
            className={this.state.hovered ? 'player-image-hovered' : null}
            alt={this.props.name}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          />
          <div style={playerName}>{this.props.name}</div>
          <div style={playerNumber}>{this.props.number}</div>
        </Link>
      </div>
    );
  }
}

export default Player;
