const columns = {
  state: [
    { columnId: "1", columnName: "Doing" },
    { columnId: "2", columnName: "Completed" },
    { columnId: "3", columnName: "Rejected" },
  ],
  reducers: {
    addColumn(state, columnName) {
      // state.push(columnName);
      console.log(columnName);
      const newStateColumn = [
        ...state,
        { columnId: Math.random().toString(36).substr(2, 9), columnName },
      ];
      return newStateColumn;
    },
    removeColumn(state, columnId) {
      const newRemoveStateColumn = [
        ...state.filter((column) => column.columnId !== columnId),
      ];
      return newRemoveStateColumn;
    },
  },
};

export default columns;
