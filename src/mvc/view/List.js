
const getListContainer = () => {
  return document.querySelector("#listContainer");
}

/**
 * @param { {title, completed}[]} state 
 * @returns {string}
 */
const paintView = (state) => {
  return `
    <ul>
      ${state.map(({ title, completed }, idx) => {
    return (
      `
      <li data-idx=${idx} class=${completed ? "completed" : "not-completed"}>
      <span>${title}</span>
      <button class="delete-item">X</button>
      </li >
      `
    )
  }).join()
    }
    </ul>
  `
}

const addEvent = ({
  addItem,
  deleteItem,
  toggleItem,
  completeAll,
}) => {
  const ul = getListContainer()
    .querySelector("ul");

  document.addEventListener("click", e => {
    if (!e.target.classList.contains("delete-item")) {
      toggleItem(e.target.dataset.idx)
    }

    if (e.target.classList.contains("delete-item")) {
    }
  })

};

function render({ state }) {
  const $container = getListContainer();
  $container.innerHTML = paintView(state);
}

function init({ state, events }) {
  render({ state });
  addEvent(events);
}

export default {
  getListContainer,
  paintView,
  render,
  init,
}