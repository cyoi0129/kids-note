"use client";
import { type FC } from "react";
import { GetTaskListByDate } from "@/services/task/api";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import TaskListItemComponent from "./TaskListItem";

type Props = {
  family_id: number;
  date: string;
  show_done: boolean;
  checkList: number[];
  changeCheckList: (id: number) => void;
};

const TaskListDateComponent: FC<Props> = (props) => {
  const { tasks, isLoading, error } = GetTaskListByDate(
    props.family_id,
    props.date
  );
  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;

  const handleCheckListChange = (id: number) => {
    props.changeCheckList(id);
  };

  return (
    <>
      {props.show_done
        ? tasks.map((task) => (
            <TaskListItemComponent
              key={task.Id}
              task={task}
              changeCheckList={handleCheckListChange}
              checked={!task.Id || props.checkList.includes(task.Id)}
            />
          ))
        : tasks
            .filter((task) => task.Status !== "DONE")
            .map((task) => (
              <TaskListItemComponent
                key={task.Id}
                task={task}
                changeCheckList={handleCheckListChange}
                checked={!task.Id || props.checkList.includes(task.Id)}
              />
            ))}
    </>
  );
};

export default TaskListDateComponent;
