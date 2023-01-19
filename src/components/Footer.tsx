import { useAppDispatch, useAppSelector } from "../app/hooks"
import { changeColor, changeStatus } from "../features/filters/filterSlice"
const numberOfTasks = (taskRemained: number) => {
  switch (taskRemained) {
    case 0:
      return "No tasks"
    case 1:
      return "1 task"
    default:
      return `${taskRemained} tasks`
  }
}
function Footer() {
  const todos = useAppSelector((state) => state?.todos)
  const { status, colors } = useAppSelector((state) => state?.filters)
  const dispatch = useAppDispatch()
  const todosRemaining = todos.filter((todo) => !todo.completed).length

  const handleFilterColors = (color: string) => {
    if (colors.includes(color)) {
      dispatch(changeColor({ color, changeType: "removed" }))
    } else {
      dispatch(changeColor({ color, changeType: "added" }))
    }
  }
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTasks(todosRemaining)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => dispatch(changeStatus("All"))}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            status === "Incompleted" && "font-bold"
          }`}
          onClick={() => dispatch(changeStatus("Incomplete"))}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Completed" && "font-bold"}`}
          onClick={() => dispatch(changeStatus("Complete"))}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes("green") && "bg-green-500"
          }`}
          onClick={() => {
            handleFilterColors("green")
          }}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => {
            handleFilterColors("red")
          }}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => {
            handleFilterColors("yellow")
          }}
        ></li>
      </ul>
    </div>
  )
}

export default Footer
