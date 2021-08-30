const state =
  [
    {
      title: "title 1",
      completed: false,
    },
    {
      title: "title 2",
      completed: false,
    },
    {
      title: "title 3",
      completed: false,
    },
    {
      title: "title 4",
      completed: false,
    }
    ,
    {
      title: "title 5",
      completed: false,
    }
  ]

const getState = () => state;

const addList = (item) => {
  return state.concat(item);
}

const removeList = (idx) => {
  return state.splice(idx, 1);
}

const completeListAll = () => {
  return state.map(list => list.completed = true);
}

const unCompleteListAll = () => {
  return state.map(list => list.completed = false);
}

const toggleList = (idx) => {
  if (state[idx]) {
    const newItem = state[idx];
    console.log(newItem);
    newItem.completed = !newItem.completed;
    return [...state].splice(idx, 1, newItem);
  }

  return state;
}

export default {
  getState,
  addList,
  removeList,
  completeListAll,
  unCompleteListAll,
  toggleList,
}