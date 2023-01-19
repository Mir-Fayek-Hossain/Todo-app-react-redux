import { ITodo } from "../@types/interfaces"
import { useAppSelector } from "../app/hooks"
import Todo from "./Todo"

function Todolst() {
  const todos = useAppSelector((state) => state.todos)
  const { status, colors } = useAppSelector((state) => state.filters)
  const filterByStatus = (todo: ITodo) => {
    switch (status) {
      case "Complete":
        return todo?.completed
      case "Incomplete":
        return !todo?.completed
      default:
        return true
    }
  }
  const filterByColors = (todo: ITodo) => {
    if (colors.length > 0) {
      return colors.includes(todo?.color as string)
    }
    return true
  }
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter(filterByStatus)
        .filter(filterByColors)
        .map((todo: ITodo) => {
          return <Todo key={todo?.id} todo={todo} />
        })}
    </div>
  )
}

export default Todolst
