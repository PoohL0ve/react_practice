import game from './assets/game-pad.png';

function Game() {
    return(
        <div className='card'>
            <img className='card-image' src={game} alt="A gaming controller"></img>
            <h2>Gaming</h2>
            <p>Do something fun. Life is short.</p>
        </div>
    );
}

export default Game