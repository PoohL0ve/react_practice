import dock from './assets/dock.jpg';

function Relax() {
    return (
        <div className='card'>
            <img className='card-image' src={dock} alt="The moon and a dock"></img>
            <h2>Relaxing</h2>
            <p>A beautiful way to calm the mind.</p>
        </div>
    );
}

export default Relax