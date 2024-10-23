import React from 'react';
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
import TodoList from './TodoList';

import Colors from './Colors';

const App = () => {
    const handleLogin = (data) => {
        console.log(data);
    }
    return (
        <>
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
                <TodoList />
            </div>
            <div>
                <h1>Color List</h1>
                <Colors colors={colorArray} />
            </div>
        </>

    )
}

export default App