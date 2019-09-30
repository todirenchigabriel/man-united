import React, {Component} from 'react';
import '../style/PlayerPage.css';

class PlayerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: [],
            isLoaded: false,
        }
    }
    
    playerId = window.location.pathname.slice(9);

    componentDidMount() {
        fetch(`http://localhost:5000/players/${this.playerId}`)
            .then(res => res.json())
            .then(myJson => {
                console.log(myJson);
                this.setState({
                    isLoaded: true,
                    player: myJson,
            })
        })
    }
    
    render() {

        const {isLoaded, player} = this.state;
        if(!isLoaded || player.length === 0) {
            return <div>Loading...</div>
        } else {
            return (
               <div style={pageContainer}>
                    <div style={firstSection}>
                        <div
                            className={'first-section-section'}
                        >
                            <div>{player[0].number}</div>
                            <div>{player[0].name}</div>
                            <div>{player[0].favouriteQuote}</div>
                        
                        </div>
                        <div
                            className={'first-section-section'}
                        >
                                <img 
                                    src={player[0].images[1]}
                                    style={playerImage}
                                    alt={player[0].name}
                                />
                        </div>
                        <div
                            className={'first-section-section'}
                        >
                            <div>HEIGHT: {player[0].height} cm</div>
                            <div>COUNTRY: {player[0].nationality}</div>
                            <div>AGE: {player[0].dateOfBirth}</div>
                            <div>DATE OF BIRTH: {player[0].dateOfBirth}</div>
                        </div>
                    </div>
                    <div>
                        <h1>Biography</h1>
                        <p>{player[0].about}</p>
                    </div>

               </div>
            );
        }

    }
}

const pageContainer = {
    color: '#fff',
    width: '100%',
    
}

const firstSection = {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'center',
    width: '100%'
}

const playerImage = {
    height: '700px',
}

export default PlayerPage;