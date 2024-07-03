import { append, setAttributes, empty, replace, setContent } from '@matry/dom';

const model = {
  todos: [],
}

replace((
  <div id="app">
    <div id="todo-container">
      <h2>Your ToDos</h2>
      <form
        onsubmit={onFormSubmit}
      >
        <input
          type="text"
          id="todo-input"
          name="todo-input"
          value=""
          placeholder="What do you want to achieve today?"
          style="width: 250px;"
        />
        <button type="submit">Add</button>
      </form>

      <ul id="todo-list">
        {model.todos.map((todo) => {
          return (
            <li id={todo.id}>{todo.description}</li>
          )
        })}
      </ul>
      <button
        id="clear"
        onclick={onClearClick}
      >
        clear all
      </button>
    </div>
  </div>
));

function onFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const value = formData.get('todo-input');

  if (value !== null) {
    const newToDo = {
      id: `todo-n-${model.todos.length + 1}`,
      description: value,
      done: false,
    };

    model.todos.push(newToDo);

    didAddToDo(newToDo);
  }
}

function onClearClick() {
  model.todos = [];

  didClearToDos();
}

function didAddToDo(todo) {
  append(
    <ul id="todo-list">
      <li
        class="todo-item"
        onclick={() => {
          setAttributes(
            <div
              id={todo.id}
              class="done"
            />
          )
        }}
      >
        <div id={todo.id} />
        <span>{todo.description}</span>
      </li>
    </ul>
  )
  setAttributes(
    <input id="todo-input" value="" />
  )
}

function didClearToDos() {
  empty(
    <ul id="todo-list" />
  )
}
