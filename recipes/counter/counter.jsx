import { write, empty, append } from "@matry/dom";

let count = 0;

write(
  'app',
  <div>
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

  empty(<button id="counter" />)
  append(
    <button id="counter">
      The count is {count}
    </button>
  )
}
