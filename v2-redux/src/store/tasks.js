const tasks = {
  state: [],
  reducers: {
    addTask(state, payload, columnId) {
      const text = payload;
      // const columnStatus = "doing";
      const newState = [
        ...state,
        { id: Math.random().toString(36).substr(2, 9), text, columnId },
      ];

      return newState;
    },
    remove(state, id) {
      const newRemoveState = [...state.filter((task) => task.id !== id)];
      return newRemoveState;
    },
    changeStatus(tasks, text, targetStatus) {
      const result = tasks.findIndex((task) => task.text === text);
      tasks[result].columnId = targetStatus;
      const newStateStatus = [...tasks];
      return newStateStatus;
    },
    setUpdate(tasks, id, text) {
      console.log(id);
      console.log(text);
      const update = tasks.map((task) => {
        if (task.id === id) {
          task.text = text;
        }
        return task;
      });
      return [...update];
    },
  },
};

export default tasks;
