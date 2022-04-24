import React, {FC, MouseEventHandler} from 'react';
import {ICell, selectCells, updateCell} from "../store/store";
import {useDispatch, useSelector} from "react-redux";


const CellComponent: FC<ICell> = ({value, possibleValues, posX, posY}) => {
    const cells = useSelector(selectCells);
    const dispatch = useDispatch();

    const handleClick = (event: any, x: number, y: number) => {

        const updatedCell: ICell = {
            posX: x, posY: y, possibleValues: [event.target.innerHTML], value: null

        }
        dispatch(updateCell(updatedCell))
    }

    const classNames = [
        'Cell',
        possibleValues.length <= 1 ? 'collapsed' : null
    ]
    return (
        <div className={classNames.join(' ')}>
            {
                possibleValues.map(value => <span key={(posX + posY * 9).toString() + '-' + value}
                                                  onClick={(event) => handleClick(event, posX, posY)}>{value}</span>)
            }
        </div>
    );
};
export default CellComponent;