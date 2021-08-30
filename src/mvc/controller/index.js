import List from "../view/List";
import listModel from "../model/listModel";

const events = {
  addItem: (index) => {
    listModel.addList(index);
    List.render({ state: listModel.getState() })
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

  }
}

const renderRoot = () => {
  List.init({
    state: listModel.getState(),
    events,
  });
}

export default renderRoot;