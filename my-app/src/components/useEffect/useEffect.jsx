import { useEffect, useState } from "react";
const Counter = ({ initialValue = 0 }) => {
    const [counter, setCounter] = useState(initialValue)
    useEffect(() => {
        console.log(`Il valore del counter è di ${counter}`);

    }, [counter, initialValue])
    const incrementCounter = () => {
        setCounter((c) => c + 1)
    }
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={incrementCounter}>Click</button>
        </div>
    )
}
export default Counter