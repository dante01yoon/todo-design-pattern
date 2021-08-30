const getInputView = () => {
  return document.querySelector("#inputContainer");
}

const addEvent = ({
  addItem,
  setInput,
  resetInput
}) => {
  const inputContainer = getInputView();
  inputContainer
    .querySelector("#inputField")
    .addEventListener("keydown", e => {
      switch (e.key) {
        case "Enter":
          addItem(e.target.value);
          resetInput();
          break;
        case "Down": // IE/Edge specific value
        case "ArrowDown":
        case "Up": // IE/Edge specific value
        case "ArrowUp":
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
        case "Right": // IE/Edge specific value
        case "ArrowRight":
        case "Esc": // IE/Edge specific value
        case "Escape":
          break;
        default:
          console.log("default")
          setInput(e.target.value);
      }
    });
}
// value=${state.inputValue}
const paintView = ({ state }) => {
  document.getElementById("inputField").value = state.inputValue;
}

const render = ({ state }) => {
  paintView({ state })
}

const init = ({ state, events }) => {
  const app = document.getElementById("root");
  let inputContainer = getInputView();

  if (!inputContainer) {
    inputContainer = document.createElement("div");
    inputContainer.setAttribute("id", "inputContainer");
  }

  app.appendChild(inputContainer);
  inputContainer.innerHTML = `
    <input id="inputField" >
  `
  console.log("state: ", state);
  render({ state });
  addEvent(events);
}

export default {
  init,
  render,
}