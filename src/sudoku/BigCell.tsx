import React from 'react';
import Cell, {ICell} from "./Cell";


interface IBigCell{
    posX:number;
    posY:number;
    cells:ICell[];
}

const BigCell = () => {
    return (
        <div className={'BigCell'}>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
            <Cell/>
        </div>
    );
};

export default BigCell;