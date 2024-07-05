# @matry/dom recipes - todo

This package implements a simple to-do application to demonstrate Matry.

## How to run

```
git clone git@github.com:matry/dom-recipes.git
cd dom-recipes/recipes/todo
npm install
npm run dev
```

## Overview

The code executes the following sequence:

1. On page load, the initial state of our content is rendered via `index.html`
2. When `todo.jsx` loads, we wire up our event listeners using `matry.addEventListeners()`
3. When the user submits the form, we append a new todo to our data model
4. After we append a new todo to our data, we run `didAddToDo` which will update the UI
5. The `didAddToDo` function appends a new `<li />` element to the list with `matry.append()`
6. After the function appends the new list item, it clears out the text input value with `matry.setAttributes()`
7. When the user clicks the clear button, we set out data model to be an empty array, thus deleting all the todos
8. This function calls `didClearToDos` which will update the UI
9. The `didClearToDos` function uses `matry.empty()` to remove all elements from the list

In this pattern, the data model comes first, and the UI is treated as a side-effect.
