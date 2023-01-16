import { createSlice } from "@reduxjs/toolkit"
import { IFilter } from "../../@types/interfaces"

const initialState: IFilter = {
  status: "All",
  colors: [],
}
const filterSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    changeColor(state, action) {
      const { color, changeType } = action.payload
      if (changeType === "added") {
        return {
          ...state,
          colors: [...state.colors, color],
        }
      } else if (changeType === "removed") {
        return {
          ...state,
          colors: state?.colors.filter(
            (existingColor) => existingColor !== color
          ),
        }
      } else {
        return state
      }
    },
    changeStatus(state, action) {
      return {
        ...state,
        status: action.payload.stat,
      }
    },
  },
})
export default filterSlice.reducer
export const { changeColor, changeStatus } = filterSlice.actions
