import React from 'react';
import './sudoku.css';
import BigCell from "./BigCell";


const Sudoku = () => {
    return (
        <div className={'Sudoku'}>
            <div id={'grid'}>
                <BigCell/>
                <BigCell/>
                <BigCell/>
                <BigCell/>
                <BigCell/>
                <BigCell/>
                <BigCell/>
                <BigCell/>
                <BigCell/>
            </div>
        </div>
    );
};


export default Sudoku;