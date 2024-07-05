# @matry/dom recipes - todo

This package implements a simple counter application to demonstrate Matry.

## How to run

```
git clone git@github.com:matry/dom-recipes.git
cd dom-recipes/recipes/counter
npm install
npm run dev
```

## Overview

The code executes the following sequence:

1. On page load, the initial state of our content is rendered via `index.html`
2. When `counter.jsx` loads, we set the initial data of the counter to 0
3. We wire up our event listener using `matry.addEventListeners()`
4. When the user clicks the button, we call the `onClick` function
5. `onClick` will increment the counter by one, then use `matry.setContent` to update the text of the button
