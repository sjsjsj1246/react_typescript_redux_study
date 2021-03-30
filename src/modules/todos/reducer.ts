import { TodosState, TodosAction } from "./types";
import { createReducer } from "typesafe-actions";
import { addTodo, toggleTodo, removeTodo } from "./actions";

// 초기 상태 선언
const initialState: TodosState = [];

// 리듀서 작성
const todos = createReducer<TodosState, TodosAction>(initialState)
  .handleAction(addTodo, (state, action) => state.concat({ ...action.payload }))
  .handleAction(toggleTodo, (state, action) =>
    state.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    )
  )
  .handleAction(removeTodo, (state, action) =>
    state.filter((todo) => todo.id !== action.payload)
  );

export default todos;
