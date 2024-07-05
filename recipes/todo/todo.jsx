import { append, setAttributes, empty, addEventListeners } from '@matry/dom';

const model = {
  todos: [],
};

addEventListeners(
  <div id="todo-container">
    <form
      onsubmit={onFormSubmit}
    />
    <button id="clear" onclick={onClearClick} />
  </div>
)

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
