import { ITodo } from "../@types/interfaces"
interface Props {
  todo: ITodo
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Todo = ({ todo }: Props) => {
  console.log(todo)

  return <div>sss</div>
}

export default Todo
