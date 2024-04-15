import {useState} from "react";

function Components() {
    const [count, setCount] = useState(0);

    // uses the pending state to update the state
    // not the current state
    
    function increment() {
        setCount(c => count + 1);
        setCount(c => count + 1);
        setCount(c => count + 1);
    }

    function decrement() {
        setCount(c => count - 1);
        setCount(c => count - 1);
        setCount(c => count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <>
            <div>
                <h2>Count: {count}</h2>
                <div className="clicks">
                    <button className="test1" onClick={increment}>Increment</button>
                    <button className="test1" onClick={reset}>Reset</button>
                    <button className="test1" onClick={decrement}>Decrement</button>
                </div>
            </div>
        </>
    );
}

export default Components

// Updater Functions: used to updates states safely
// They are passed as arguments to useState()
