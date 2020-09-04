'use strict';

//addNewItem = (event) => {

//  }

const initialState = {
  todos: [
    { text: 'Fix Metronome Bug', completed: false },
    { text: 'Fix Tuner Bugs', completed: true },
  ],

  setTodo: function(input) {
   const newItem = this.todos.push({'text': input, 'completed': false});
  // renderTodos(newItem);
   return newItem;
  }
};
