import React, { Component } from 'react';
import Player from './Player';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/players')
      .then((res) => res.json())
      .then((myJson) => {
        this.setState({
          isLoaded: true,
          players: myJson
        });
      });
  }

  render() {
    const { isLoaded, players } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div style={playersContainer}>
          {players.map((player) => (
            <Player
              key={player._id}
              name={player.name}
              image={player.images[0]}
              about={player.about}
              height={player.height}
              dateOfBirth={player.dateOfBirth}
              number={player.number}
              slug={player.slug}
            />
          ))}
        </div>
      );
    }
  }
}

const playersContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%'
};

export default Players;
