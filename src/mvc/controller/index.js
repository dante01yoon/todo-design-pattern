import List from "../view/List";
import listModel from "../model/listModel";
import inputModel from "../model/inputModel";
import Input from "../view/Input";

const events = {
  addItem: (index) => {
    listModel.addList(index);
    inputModel.resetInputValue();
    List.render({ state: listModel.getState() });
    Input.render({ state: inputModel.getState() });
  },
  removeItem: (index) => {
    listModel.removeList(index)
    List.render({ state: listModel.getState() })
  },
  completeAll: () => {
    listModel.completeListAll();
    List.render({ state: listModel.getState() })
  },
  toggleItem: (idx) => {
    listModel.toggleList(idx);
    List.render({ state: listModel.getState() })
  },
  resetAll: () => {
    listModel.unCompleteListAll();
    List.render({ state: listModel.getState() })
  },
  resetInput: () => {
    resetInputValue()
    Input.render({ state: inputModel.getState() })
  },
  setInput: () => {
    setInputValue();
    Input.render({ state: inputModel.getState() });
  },
}

const renderRoot = () => {
  List.init({
    state: listModel.getState(),
    events,
  });
  Input.init({
    state: inputModel.getState(),
    events,
  });
}

export default renderRoot;