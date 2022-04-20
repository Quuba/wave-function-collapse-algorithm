import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sudoku from "./sudoku/Sudoku";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Wave function collapse algorithm <br/>
                    Shown by sudoku

                </p>
            </header>
            <div className={'sudoku-container'}>
                <Sudoku/>
            </div>
        </div>
    );
}

export default App;
