import rem from './assets/bus.jpg';

function Rem() {
    return(
        <div className='card'>
            <img className='card-image' src={rem} alt="A dark bus"></img>
            <h2>Reminiscing</h2>
            <p>Nothing like a smooth journey back in time.</p>
        </div>
    );
}

export default Rem