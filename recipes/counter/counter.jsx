import { addEventListeners, setContent } from '@matry/dom';

let count = 0;

addEventListeners(
  <button
    id="counter"
    onclick={onClick}
  />
)

function onClick() {
  count++;

  setContent(
    <button id="counter">
      The count is {count}
    </button>
  );
}
