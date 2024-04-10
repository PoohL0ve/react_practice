import PropTypes from 'prop-types';
// Rendering allows you to show or hide components

function UserGreeting(props) {
    const welcome = <h2 className='welcome'>Welcome Back {props.userName}</h2>;
    const login = <h2 className='login'>Please Log In or Create an account</h2>;
    return(
        props.isLoggedIn ? welcome : login 
    );
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    userName: PropTypes.string,
}
export default UserGreeting