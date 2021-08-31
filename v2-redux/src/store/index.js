import { init } from "@rematch/core";
import tasks from "./tasks";

const store = init({
  models: {
    tasks,
  },
});

export default store;
