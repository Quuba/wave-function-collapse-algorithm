import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Root} from "react-dom/client";
import {match} from "assert";

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

                //horizontal pass
                for (let i = 0; i < 9; i++) {
                    if (i == cell.posX) {
                        continue;
                    }
                    const t_cell = state.cells[i + cell.posY * 9]

                    state.cells[i + cell.posY * 9] = {
                        ...t_cell,
                        possibleValues: t_cell.possibleValues.filter((num) => num != cell.possibleValues[0])
                    }
                }

                //vertical pass
                for (let i = 0; i < 9; i++) {
                    if (i == cell.posY) {
                        continue;
                    }
                    const t_cell = state.cells[cell.posX + i * 9]

                    state.cells[cell.posX + i * 9] = {
                        ...t_cell,
                        possibleValues: t_cell.possibleValues.filter((num) => num != cell.possibleValues[0])
                    }
                }

                //9x9 block pass
                const startX = Math.floor(cell.posX / 3) * 3
                const startY = Math.floor(cell.posY / 3) * 3
                // console.log(startX, ' ', startY, ':', startX+3,' ', startY+3)
                for (let y = startY; y < startY + 3; y++) {
                    for (let x = startX; x < startX + 3; x++) {
                        if (x == cell.posX && y == cell.posY) {
                            continue;
                        }
                        state.cells[x + y * 9] = {
                            ...state.cells[x + y * 9],
                            possibleValues: state.cells[x + y * 9].possibleValues.filter((num) => num != cell.possibleValues[0])
                        }
                    }
                }


            },
            addCell: (state: ICellSliceState, action: PayloadAction<ICell>) => {
                state.cells.push(action.payload)
            },
            resetCells: (state: ICellSliceState) => {
                state.cells = []
            },
            generateCells: (state: ICellSliceState) => {
                state.cells = [];
                for (let i = 0; i < 9; i++) {
                    for (let j = 0; j < 9; j++) {
                        state.cells.push({posX: j, posY: i, possibleValues: [1, 2, 3, 4, 5, 6, 7, 8, 9], value: null});
                    }
                }
            }
        }

    }
)
export const {updateCell, addCell, resetCells, generateCells} = cellsSlice.actions

const store = configureStore({
    reducer: {
        cells: cellsSlice.reducer
    },
})

type RootState = ReturnType<typeof store.getState>

export const selectCells = (state: RootState) => state.cells;
export type {ICell};
export default store;