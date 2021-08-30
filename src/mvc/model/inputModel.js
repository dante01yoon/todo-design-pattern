const state = Object.seal({
  inputValue: "",
})

const getState = () => state;

const setInputValue = (text) => {
  state.inputValue = text;
}

const resetInputValue = () => {
  state.inputValue = "";
}

export default {
  getState,
  state,
  setInputValue,
  resetInputValue,
}