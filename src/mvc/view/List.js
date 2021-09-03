
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
  removeItem,
  toggleItem,
  completeAll,
}) => {
  const ul = getListContainer()
    .querySelector("ul");

  document.addEventListener("click", e => {
    const targetList = e.target.closest("#listContainer > ul > li")
    if (targetList) {
      console.log(e.target);
      if (e.target.closest("button.delete-item")) {
        removeItem(targetList.dataset.idx);
        return;
      }
      toggleItem(targetList.dataset.idx);
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