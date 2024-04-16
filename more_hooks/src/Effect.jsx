import { useEffect, useState } from "react";

function Effect() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event Listener Removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} * ${height}`;
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return (
        <>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </>
    );
}

/**
 * useEffect() tells React to do something when:
 *      the component re-renders;
 *      the components mounts;
 *      the state of a value
 * useEffect(() => {}): after every render
 * useEffect(() => {}, []): runs only on mount
 * useEffect(() => {}, [value]): runs on mount plus when value changes
 * 
 * Use For:
 *  DOM Manipulation
 *  Event Listeners
 *  Subscriptions: real time updates
 *  Fetching Data from an API
 *  Clean up when a component unmounts
 * 
 * Think of it like a side code with dependencies
 * useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count])
 */

export default Effect