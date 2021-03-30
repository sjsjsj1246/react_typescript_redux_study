import { createAction } from "typesafe-actions";
import { Todo } from "./types";

let nextId = 1; // 새로운 항목을 추가 할 때 사용 할 고유 ID 값

export const addTodo = createAction("todos/ADD_TODO", (text: string) => ({
  id: nextId++,
  text: text,
  done: false,
}))<Todo>();

export const toggleTodo = createAction("todos/TOGGLE_TODO")<number>();
export const removeTodo = createAction("todos/REMOVE_TODO")<number>();
