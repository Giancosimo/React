import { useState } from "react"
const Counter = ({ startingValue = 0 }) => {
    const [count, setCount] = useState(startingValue)
    const incrementCounter = () => {
        setCount((count) => count + 1)
    }
    const decreasesCounter = () => {
        setCount((count) => count - 1)
    }
    const resetCounter = () => {
        setCount(0)
    }

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={incrementCounter}>Incrementa</button>
            <button onClick={decreasesCounter}>Decrementa</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
}
export default Counter

