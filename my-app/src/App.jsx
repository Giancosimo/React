import Hello from "./components/HelloWorld/HelloWorld"
import Welcome from "./components/Welcome/Welcome"




const App = () => {
    return (
        <div>
            <Hello />
            <Welcome name={"John"} age={20} />
        </div>
    )
}
export default App