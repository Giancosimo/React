import Message from "../Message/Message";
import Age from "../Age/Age";

const Welcome = ({ name, age }) => {
    return (
        <div>
            <p>Welcome, {name}!</p>
            {age > 18 && <Age age={age} />}
            {age && <Age age={age} />}
            {age > 18 && age < 65 && <Age age={age} />}
            {age > 18 && name === "John" && <Age age={age} />}
            {age > 18 && <Age age={age} />}
            <Message age={age} />
        </div>)
}
export default Welcome