import React, {FC, useEffect, useState} from 'react';
import './sudoku.css';
import CellComponent from "../components/CellComponent";
import {ICell} from "../store/store";

interface ISudoku {
    cellValues: ICell[][]
}

const Sudoku: FC<ISudoku> = ({cellValues}) => {
    const [cells, setCells] = useState<ICell[]>([])


    useEffect(() => {
        let t_cells: ICell[] = [];
        if (cellValues[0][0] !== undefined) {
            for (let i = 0; i < 9; i++) {
                for (let j = 0; j < 9; j++) {
                    t_cells.push(cellValues[j][i])
                }
            }
        }
        setCells(t_cells)
    }, [cellValues])

    function collapse(posX: number, posY: number, value: number) {
        console.log('collapsed', posX, ' ', posY, ' to ', value)
        let t_cells: ICell[] = cells;
        t_cells[posX + 9 * posY] = {...t_cells[posX + 9 * posY],value:value};
        console.log('set cell ', posX + 9 * posY, ' to ', value)
        setCells(t_cells);
    }

    return (
        <div></div>
    );
};


export default Sudoku;