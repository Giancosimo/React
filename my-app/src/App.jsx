import Hello from "./components/HelloWorld/HelloWorld"
import Welcome from "./components/Welcome/Welcome"
import Alert from "./components/Alert/Alert";

const App = () => {
    return (
        <div>
            <Hello />
            <Welcome name={"John"} age={20} />
            <Alert />
        </div>
    )
}

export default App