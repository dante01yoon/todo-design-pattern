const getInputView = () => {
  return document.querySelector("#inputContainer");
}

const addEvent = ({
  addItem,
  setInputValue,
  resetInput
}) => {
  const inputContainer = getInputView();
  inputContainer
    .querySelector("#inputField")
    .addEventListener("keyup", e => {
      if (e.key === "Enter") {
        addItem(e.target.value);
        resetInput();
      }
      else {
        setInputValue(e.target.value);
      }
    });
}

const paintView = ({ state }) => {
  const inputContainer = getInputView();
  inputContainer.innerHTML = `
    <input id="inputField" value=${state.inputValue}>
  `
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
  render({ state });
  addEvent({ events });
}

return {
  getInputView,
  init,
  render,
}