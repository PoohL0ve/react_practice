import code from './assets/code.jpg';

function Card() {
    return (
        <div className='card'>
            <img className='card-image' src={code} alt='a coded program'></img>
            <h2 className='card-title'>Coding</h2>
            <p>A great activity to understand problem-solving.</p>
        </div>
    );
}

export default Card