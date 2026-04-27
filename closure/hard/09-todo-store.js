/**
 * Problem 9: Todo Store with Private State
 * Difficulty: Hard
 *
 * Description:
 * Implement a function createTodoStore().
 *
 * It should return an object with:
 * - addTodo(text) → adds a todo and returns its id
 * - completeTodo(id) → marks a todo as completed
 * - getTodos() → returns all todos
 * - getPendingCount() → returns number of incomplete todos
 *
 * Requirements:
 * - Each todo: { id, text, completed }
 * - IDs auto-increment starting from 1
 * - Internal state must be private
 */

function createTodoStore() {
  let nextTodoId = 1;
  let todos = [];
  return {
    addTodo(text) {
      const newTodo = {
        id: nextTodoId,
        text: text,
        completed: false,
      };
      todos.push(newTodo);
      nextTodoId++;
      return newTodo.id;
    },
    completeTodo: (id) => {
      if (todos.find((todo) => todo.id === id))
        todos.find((todo) => todo.id === id).completed = true;
      else {
        console.log("Invalid Id");
      }
    },
    getTodos: () => {
      return todos.map((todo) => ({ ...todo }));
    },
    getPendingCount: () => {
      return todos.reduce((count, todo) => {
        if (!todo.completed) count++;
        return count;
      }, 0);
    },
  };
}
const store = createTodoStore();

// const id1 = store.addTodo("Task 1");
// const id2 = store.addTodo("Task 2");

// console.log(id1); // 1
// console.log(id2); // 2

// console.log(store.getPendingCount()); // 2

// store.completeTodo(id1);

// console.log(store.getTodos());
// // [
// //   { id: 1, text: "Task 1", completed: true },
// //   { id: 2, text: "Task 2", completed: false }
// // ]

// console.log(store.getPendingCount()); // 1
const id1 = store.addTodo("A");
const id2 = store.addTodo("B");
const id3 = store.addTodo("C");

store.completeTodo(2);

console.log(store.getTodos());
