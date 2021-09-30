const columns = {
  state: [
    { columnId: "1", columnName: "Doing" },
    { columnId: "2", columnName: "Completed" },
    { columnId: "3", columnName: "Rejected" },
  ],
  reducers: {
    addColumn(state, columnName) {
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
      localStorage.setItem("columnList", JSON.stringify(newRemoveStateColumn));
      return newRemoveStateColumn;
    },
    // renameColumn(state, newName, columnId) {
    //   // найти индекс щбъекта в массиве
    //   // поменять нужное поле
    //   // вернуть новый массив
    //   console.log(state);

    //   const indexColumn = state.findIndex(
    //     (column) => column.columnId === columnId
    //   );
    //   state[indexColumn].columnName = newName;
    //   console.log("renameColumnState");
    //   console.log(state);

    //   return [...state];
    // },
  },
};

export default columns;
