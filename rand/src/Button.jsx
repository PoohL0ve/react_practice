
function Button() {
    const handleClick = (e) => e.target.textContent = "Play ⚽️";

    return (
        <>
            <h3>Click Twice</h3>
            <button onDoubleClick={(e) => handleClick(e)}>Click Me</button>
        </>
    );
}

export default Button