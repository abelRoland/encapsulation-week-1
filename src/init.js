'use strict';

window.onload = () => {
  // set the initial state for your app
  app.state = deepClone(initialState);
  console.log('app:', app);

  // render initial view and attach event listeners
  const todosView = view.displayTodos();
 

  // log the initiation
  logger.push({
    app,
    view: todosView
  });

};
