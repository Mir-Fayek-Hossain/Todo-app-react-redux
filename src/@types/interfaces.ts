export interface IFilter {
  status: string
  colors: string[]
}
export interface ITodo {
  id: number
  text: string
  completed: boolean
  color?: string
}
export type ITodos = ITodo[]
