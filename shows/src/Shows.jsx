import PropTypes from 'prop-types';
// Use props to share attributes
// Proptypes can have their data types validated
// It allows you to make one component that can be used several times
// with different attributes

function Shows(props) {
    return (
        <div className='shows'>
            <p>Name: {props.name}</p>
            <p>Began: {props.year}</p>
            <p>Running: {props.isRunning ? "Yes" : "No"}</p>
        </div>
    );
}

Shows.propTypes = {
    name: PropTypes.string,
    year: PropTypes.number,
    isRunning: PropTypes.bool
}
// Default props increase none were included


export default Shows