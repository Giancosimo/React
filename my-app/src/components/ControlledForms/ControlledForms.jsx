import { useState } from "react"

const dataForm = () => {
    return {
        welcome: "",
        username: "",
        password: "",
        session: false
    }
}

const InteractiveWelcome = () => {
    const [data, setData] = useState(dataForm())
    const welcome = ({ name }) => {
       return <p>Welcome, {name}!</p>
    }

    const handleInputChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type
        setData((data) => {
            const updated = { ...data, welcome, [name]: type === "checkbox" ? checked : value, }
            return updated
        })
    }

    const LoginForm = () => {
        setData(dataForm())
    }
    const ResetForm = () => {
        setData(dataForm())
    }
    return (
        <div>
            
            <input name="username" value={data.username} onChange={handleInputChange} />
            <input name="password" type="password" value={data.password} onChange={handleInputChange} />
            <input name="session" type="checkbox" checked={data.session} onChange={handleInputChange} />
            <button disabled={!data.username || !data.password} onClick={LoginForm}>Login</button>
            <button onClick={ResetForm}>Reset</button>
        </div>
    )
}
export default InteractiveWelcome