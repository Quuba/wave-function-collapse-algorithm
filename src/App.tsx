import React from 'react';
import './App.css';
import CellComponent from "./components/CellComponent";
import {Provider, useDispatch, useSelector} from "react-redux";
import store, {addCell, resetCells, selectCells} from "./store/store";


const App = () => {
    const cells = useSelector(selectCells);
    const dispatch = useDispatch();

    function GenerateCells() {
        dispatch(resetCells())
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                dispatch(addCell({posX: j, posY: i, possibleValues: [1, 2, 3, 4, 5, 6, 7, 8, 9], value: null}));
            }
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Wave function collapse algorithm <br/>
                    Demonstrated with sudoku
                </p>
            </header>
            <div className={'sudoku-container'}>
                <div className={'Sudoku'}>
                    <div id={'grid'}>
                        {cells.cells.map((cell) => <CellComponent value={cell.possibleValues[0]}
                                                                          posX={cell.posX} posY={cell.posY}
                                                                          possibleValues={cell.possibleValues}/>)}
                    </div>
                </div>
            </div>
            <button onClick={GenerateCells}>Generate</button>
        </div>
    );


};

const AppWrapper = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default AppWrapper;
