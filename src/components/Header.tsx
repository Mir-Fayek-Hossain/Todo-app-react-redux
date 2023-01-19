import { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import {
  added,
  allCompleted,
  clearCompleted,
} from "../features/todos/todoSlice"

function Header() {
  const [input, setInput] = useState("")
  const dispatch = useAppDispatch()
  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  const submitTodo = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(added(input))
    setInput("")
  }
  const handleAllCompleted = () => {
    dispatch(allCompleted())
  }
  const hancleClearCompleted = () => {
    dispatch(clearCompleted())
  }
  return (
    <div>
      <form
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        onSubmit={submitTodo}
      >
        <img src="./images/notes.png" className="w-6 h-6" alt="Add todo" />
        <input
          type="text"
          placeholder="Type your todo"
          className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          onChange={inputHandler}
        />
        <button
          type="submit"
          className="appearance-none w-8 h-8 bg-[url('./images/plus.png')] bg-no-repeat bg-contain"
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li
          className="flex space-x-1 cursor-pointer"
          onClick={handleAllCompleted}
        >
          <img
            className="w-4 h-4"
            src="./images/double-tick.png"
            alt="Complete"
          />
          <span>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={hancleClearCompleted}>
          Clear completed
        </li>
      </ul>
    </div>
  )
}

export default Header
