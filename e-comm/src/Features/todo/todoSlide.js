import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // isme properties and functions aate hai

    addTodo: (state, action) => {
      // isme do chizo ka access milta hai state and action

      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

// steps to export

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer; // this will give list of all reducers to store
