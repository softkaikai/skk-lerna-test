import logo from './logo.svg';
import './App.css';
import Main from './views/Main'
import {BigName} from "skk-react-ui";

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
                <BigName />
                <Main />
            </header>
        </div>
    );
}

export default App;
