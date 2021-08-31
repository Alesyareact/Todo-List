const tasks = {
  state: [{ id: 1, text: "agbfffhd", columnStatus: "doing" }],
  reducers: {
    addTask(state, payload, columnStatus) {
      const text = payload;
      // const columnStatus = "doing";
      const newState = [
        ...state,
        { id: Math.random().toString(36).substr(2, 9), text, columnStatus },
      ];

      return newState;
    },
    remove(state, id) {
      const newRemoveState = [...state.filter((task) => task.id !== id)];
      return newRemoveState;
    },
    changeStatus(tasks, text, targetStatus) {
      const result = tasks.findIndex((task) => task.text === text);
      tasks[result].columnStatus = targetStatus;
      const newStateStatus = [...tasks];
      return newStateStatus;
    },
  },
};

export default tasks;
