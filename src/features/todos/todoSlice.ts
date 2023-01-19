import { createSlice } from "@reduxjs/toolkit"
import { ITodo, ITodos } from "../../@types/interfaces"
// interface IState {
//   length: number
//   [index: number]: {
//     id: number
//     todo: string
//     completed: boolean
//     color?: string
//   }
// }

const initialState: ITodos = [
  {
    id: 1,
    text: "learn React",
    completed: true,
  },
  {
    id: 2,
    text: "learn React",
    completed: false,
    color: "red",
  },
]
function nextTodoID(todos: ITodos) {
  const maxId = todos.reduce((mId, todo) => Math.max(mId, todo?.id), -1)
  return maxId + 1
}
const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    added(state, action) {
      return [
        ...state,
        {
          id: nextTodoID(state),
          text: action.payload,
          completed: false,
        },
      ]
    },
    toggled(state, action) {
      return state.map((todo: ITodo) => {
        if (todo?.id !== action.payload) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed,
        }
      })
    },
    colorSelected(state, action) {
      return state.map((todo: ITodo) => {
        if (todo?.id !== action.payload.id) {
          return todo
        }
        return {
          ...todo,
          color: action.payload.color,
        }
      })
    },
    deleted(state, action) {
      return state.filter((todo) => todo.id !== action.payload)
    },
    allCompleted(state) {
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        }
      })
    },
    clearCompleted(state) {
      return state.filter((todo) => !todo.completed)
    },
  },
})
export default todoSlice.reducer
export const {
  added,
  allCompleted,
  clearCompleted,
  colorSelected,
  deleted,
  toggled,
} = todoSlice.actions
