'use strict';

/* This is the core application object, it contains:

  the state of your web page
    encapsulated in this object in the property _state

  methods that read, write, and change state
    these play the same role as Logic functions in the last module

  some basic rules:
    methods can read and write the _state property in your object
    methods can call other methods
    methods can NOT read or write the DOM

  study tips:
    copy your app object into JS Tutor
    remove extra methods when studying in JS Tutor (for cleaner visuals)

*/

const app = {
  _state: {
    todos: []
  },
  get state() {
    return this._state;
  },
  set state(newState) {
    this._state = newState
  },
   addTodo(text) {
       this._state.todos.push({
         text: text,
         completed: false
       })
      },

    deleteTodo(position) {
      this._state.todos.splice(position, 1);
    },

    toggleCompleted: function (position) {
      if (position < 0 || this._state.todos.length <= position) {
        return;
      }
      const todo = this._state.todos[position];
      todo.completed = !todo.completed;
    },
  toggleAll() {
    var totalTodos = this.state.todos.length;
    var completedTodos = 0;
    this.state.todos.forEach(function (todo) {
      if (todo.completed === true) {
        completedTodos++;
      }
    });
    if (completedTodos === totalTodos) {
      this.state.todos.forEach(function (todo) {
        todo.completed = false;
      });

    } else {
      this.state.todos.forEach(function (todo) {
        todo.completed = true;
      })
    };

  }
}
