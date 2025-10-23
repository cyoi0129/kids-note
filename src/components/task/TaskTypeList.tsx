"use client";
import { type FC, useContext } from "react";
import { TaskTypeListContext } from "@/services/task/provider";
import Link from "next/link";

const TaskTypeListComponent: FC = () => {
  const { task_types } = useContext(TaskTypeListContext);

  return (
    <ul>
      {task_types?.map((task_type) => (
        <li key={task_type.Id}>
          <Link href={`/task/type/${task_type.Id}`}>{task_type.Name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TaskTypeListComponent;
