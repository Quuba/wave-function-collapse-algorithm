import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Root} from "react-dom/client";

interface ICell {
    possibleValues: number[];
    value: number | null;
    posX: number;
    posY: number;
}

interface ICellSliceState {
    cells: ICell[];
}

const initalState: ICellSliceState = {
    cells: []
}

export const cellsSlice = createSlice(
    {
        name: 'cells',
        initialState: initalState,
        reducers: {
            updateCell: (state: ICellSliceState, action: PayloadAction<ICell>) => {
                const cell = action.payload;

                state.cells[cell.posX + cell.posY * 9] = {
                    ...state.cells[cell.posX + cell.posY * 9],
                    possibleValues: cell.possibleValues
                }
            },
            addCell:(state: ICellSliceState, action: PayloadAction<ICell>) => {
              state.cells.push(action.payload)
            },
            resetCells:(state:ICellSliceState)=>{
                state.cells = []
            }
        }

    }
)
export const {updateCell, addCell, resetCells} = cellsSlice.actions

const store = configureStore({
    reducer: {
        cells:cellsSlice.reducer
    },
})

type RootState = ReturnType<typeof store.getState>

export const selectCells = (state:RootState) => state.cells;
export type {ICell};
export default store;