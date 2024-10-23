import Hello from "./components/HelloWorld/HelloWorld"
import Welcome from "./components/Welcome/Welcome"
import Alert from "./components/Alert/Alert";
import State from "./components/State/State";
import UseEffect from "./components/useEffect/useEffect";
import Clock from "./components/useEffect/Clock";
import Handling from "./components/Handling/Handling";
import ControlledForms from "./components/ControlledForms/ControlledForms"
import UncontrolledForms from "./components/UncontrolledForms/UncontrolledForms"
import FocusableInput from "./components/Refs/FocusableInput";
import MountEffectComponent from "./components/Refs/MountEffectComponent";

const App = () => {
    const handleLogin = (data) => {
         console.log(data); 
     }
    return (
        <div>
            <Hello />
            <Welcome name={"John"} age={20} />
            <Alert />
            <State />
            <UseEffect />
            <Clock />
            <Handling />
            <ControlledForms onLogin={handleLogin} />
            <UncontrolledForms />
            <FocusableInput />
            <MountEffectComponent />
        </div>
    )
}

export default App