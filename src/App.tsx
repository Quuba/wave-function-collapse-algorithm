import React from 'react';
import './App.css';
import CellComponent from "./components/CellComponent";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {addCell, generateCells, resetCells, selectCells} from "./store/store";


const App = () => {
    const cells = useSelector(selectCells);
    const dispatch = useDispatch();


    //TODO: highlight 'big cell' borders
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Wave function collapse algorithm <br/>
                    Demonstrated with sudoku
                </p>
            </header>
            <div className={'sudoku-container'}>
                <div id={'grid'}>
                    {cells.cells.map((cell) => <CellComponent key={cell.posX + cell.posY *9} value={cell.possibleValues[0]}
                                                              posX={cell.posX} posY={cell.posY}
                                                              possibleValues={cell.possibleValues}/>)}
                </div>
            </div>
            <button onClick={event => dispatch(generateCells())}>Generate</button>
        </div>
    );


};

const AppWrapper = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default AppWrapper;
