import Greeting from './Greeting';
import './App.css'; // Import CSS file

function App() {
    return (
        <div className="App">
            <Greeting name="Alice" message="Welcome to the lab!" />
             <Greeting name="Bob" message="Good morning" />
            <Greeting>
                <p>This is to demonstrate the children..!</p>
            </Greeting>
        </div>
    );
}

export default App;