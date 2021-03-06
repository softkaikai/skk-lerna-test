import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import {Button, Tab} from "skk-react-ui";
import "skk-react-ui/lib/esm/index.css"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React is kaikai
                </a>
                <Button>test</Button>
                <Tab />
                <Main />
            </header>
        </div>
    );
}

export default App;
