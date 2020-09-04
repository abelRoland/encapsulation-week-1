'use strict';

const addTodo = () => {
  const input = document.getElementById('text-to-add').value;
  initialState.setTodo(input);
  console.log(initialState.todos)

  // update UI from state

  // re-render the average
  const listContainer = document.getElementById('root');
      while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
      }
      const renderList = renderTodos(initialState.todos);
      document.getElementById('root').appendChild(renderList);
      //listContainer.appendChild(renderList);
      // log new view rendered from state
      //logEntry.viewList = renderList;
     };

// render initial view and attach event listeners
const displayNew = () => {
  const todosView = renderTodos(app.state.todos);
  todosView.addEventListener('change', toggleCompletedHandler); // event delegation!
  document.getElementById('root').appendChild(todosView);

}
const toggleCompletedHandler = (event) => {

  // event delegation!
  const target = event.target;
  if (target.nodeName !== 'INPUT' || target.type !== 'checkbox') {
    return;
  }

  // update state using app method
  const todoIndex = Number(target.id);
  app.toggleCompleted(todoIndex);

  logger.push({
    action: 'toggle todo',
    event,
    todoIndex,
    state: app.state
  });

};
