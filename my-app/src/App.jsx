import Hello from "./components/HelloWorld/HelloWorld"
import Welcome from "./components/Welcome/Welcome"
import Alert from "./components/Alert/Alert";
import State from "./components/State/State";

const App = () => {
    return (
        <div>
            <Hello />
            <Welcome name={"John"} age={20} />
            <Alert />
            <State />
        </div>
    )
}

export default App