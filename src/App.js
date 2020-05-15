import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./commons/Components/Routes";

function App() {
    return (
        <div id="trivia-game-app">
            <Router>
                <Routes />
            </Router>
        </div>
    );
}

export default App;