import Hello from "./components/HelloWorld/HelloWorld"
import Welcome from "./components/Welcome/Welcome"
import Alert from "./components/Alert/Alert";
import State from "./components/State/State";
import UseEffect from "./components/useEffect/useEffect";
import Clock from "./components/useEffect/Clock";

const App = () => {
    return (
        <div>
            {/* <Hello />
            <Welcome name={"John"} age={20} />
            <Alert />
            <State /> */}
            <UseEffect />
            <Clock />
        </div>
    )
}

export default App