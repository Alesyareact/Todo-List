import { init } from "@rematch/core";
import tasks from "./tasks";
import columns from "./columns";

const store = init({
  models: {
    tasks,
    columns,
  },
});

export default store;
