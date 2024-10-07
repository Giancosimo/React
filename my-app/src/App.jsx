import Hello from "./HelloWorld"
import Welcome from "./Welcome";


export default function App() {
    return (
        <div>
            <Hello />
            <Welcome name={"Giancosimo"} age={33} />
        </div>
    )
}