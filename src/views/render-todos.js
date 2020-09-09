const renderTodos = (todosArr) => {
 // debugger
  const ulEl = document.createElement('ul');

  for (const todo of todosArr) {
    const liEl = document.createElement('li');
    liEl.innerHTML += todo.text;
    ulEl.appendChild(liEl);
  }
  return ulEl;
};


describe('renderTodos: renders a list of todos', () => {
  const expect = chai.expect;


  describe('renders no todos', () => {
    const singleTodo = renderTodos([]);
    it('has tagName: "UL"', () => {
      expect(singleTodo).to.have.tagName('UL');
    });
    it('has childElementCount: 0', () => {
      expect(singleTodo).to.have.property('childElementCount', 0);
    });
  });

  describe('renders a single todo', () => {
    const singleTodo = renderTodos([
      { text: 'hello', completed: false }
    ]);
    it('has tagName: "UL"', () => {
      expect(singleTodo).to.have.tagName('UL');
    });
    it('has childElementCount: 1', () => {
      expect(singleTodo).to.have.property('childElementCount', 1);
    });
    describe('.children[0]', () => {
      const childElement = singleTodo.children[0];
      it('has tagName: "LI"', () => {
        expect(childElement).to.have.tagName('LI');
      });
      it('has text: "hello"', () => {
        expect(childElement).to.have.text('hello');
      });
      it('has childElementCount: 1', () => {
        expect(childElement).to.have.property('childElementCount', 1);
      });
      describe('.children[0]', () => {
        const childChildElement = childElement.children[0];
        it('has tagName: "INPUT"', () => {
          expect(childChildElement).to.have.tagName('INPUT');
        });
        it('is not checked', () => {
          expect(childChildElement).to.have.property('checked', false);
        });
      });
    });
  });


  describe('renders 2 todos', () => {
    const doubleTodo = renderTodos([
      { text: 'hello', completed: false },
      { text: 'bye', completed: true }
    ]);
    it('has tagName: "UL"', () => {
      expect(doubleTodo).to.have.tagName('UL');
    });
    it('has childElementCount: 2', () => {
      expect(doubleTodo).to.have.property('childElementCount', 2);
    });
    describe('.children[0]', () => {
      const childElement = doubleTodo.children[0];
      it('has tagName: "LI"', () => {
        expect(childElement).to.have.tagName('LI');
      });
      it('has text: "hello"', () => {
        expect(childElement).to.have.text('hello');
      });
      it('has childElementCount: 1', () => {
        expect(childElement).to.have.property('childElementCount', 1);
      });
      describe('.children[0]', () => {
        const childChildElement = childElement.children[0];
        it('has tagName: "INPUT"', () => {
          expect(childChildElement).to.have.tagName('INPUT');
        });
        it('is not checked', () => {
          expect(childChildElement).to.have.property('checked', false);
        });
      });
    });
    describe('.children[1]', () => {
      const childElement = doubleTodo.children[1];
      it('has tagName: "LI"', () => {
        expect(childElement).to.have.tagName('LI');
      });
      it('has text: "hello"', () => {
        expect(childElement).to.have.text('bye');
      });
      it('has childElementCount: 1', () => {
        expect(childElement).to.have.property('childElementCount', 1);
      });
      describe('.children[0]', () => {
        const childChildElement = childElement.children[0];
        it('has tagName: "INPUT"', () => {
          expect(childChildElement).to.have.tagName('INPUT');
        });
        it('is checked', () => {
          expect(childChildElement).to.have.property('checked', true);
        });
      });
    });
  });
}, true);

var view = {
  displayTodos: function () {
    //debugger;

    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    app.state.todos.forEach(function (todo, position) {
      var todoLi = document.createElement('li');
    
      todoLi.id = position;
      todoLi.innerHTML = `<input class= 'checkbox' type = 'checkbox' onclick = 'handlers.toggleCompleted()'>${todo.text}</input>`;

      todoLi.appendChild(this.createDeleteButton());

      if (todo.completed) {
        let checkBoxEl = todoLi.children[0];
        checkBoxEl.setAttribute('checked', true);
        if (todo.completed === true) {
          todoLi.className = 'checkbox';

        }
      }

      todosUl.appendChild(todoLi);
    }, this);

  },
  createDeleteButton: function () {
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    deleteButton.className = 'destroy';
    return deleteButton;


  },
  setUpEventListeners: function () {
   // debugger;
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function (event) {
      var clicked = event.target;
      if (clicked.className === 'destroy') {
        handlers.deleteTodo(parseInt(clicked.parentNode.id));

      }

    });
  }

};

view.setUpEventListeners();


