"use client";
import { type FC, useContext } from "react";
import { TaskTypeListContext } from "@/services/task/provider";

type Props = {
  ids: number[];
};

const TaskTypeListNameComponent: FC<Props> = (props) => {
  const { task_types } = useContext(TaskTypeListContext);
  const { ids } = props;
  const taskTypes = task_types.filter(
    (task_type) => task_type.Id !== undefined && ids.includes(task_type.Id)
  );
  return (
    <>
      {taskTypes.map((task_type) => (
        <span key={task_type.Id}>{task_type.Name}</span>
      ))}
    </>
  );
};

export default TaskTypeListNameComponent;
