import { v4 } from "uuid";

export default {
  notStarted: {
    id: v4(),
    title: "not started",
    items: [],
  },
  inProgress: {
    id: v4(),
    title: "in progress",
    items: [],
  },
  completed: {
    id: v4(),
    title: "completed",
    items: [],
  },
};

