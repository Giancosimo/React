import { useEffect, useState } from "react";
const Clock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])
    return (
        <div>
            <p>Current time: {date.toLocaleTimeString()}</p>
        </div>
    )
}
export default Clock