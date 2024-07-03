import { replace, setContent } from "@matry/dom";

let count = 0;

replace(
  <div id="app">
    <button
      id="counter"
      type="button"
      onclick={onClick}
    >
      The count is {count}
    </button>
  </div>
)

function onClick() {
  count++;

  setContent(
    <button id="counter">
      The count is {count}
    </button>
  )
}
