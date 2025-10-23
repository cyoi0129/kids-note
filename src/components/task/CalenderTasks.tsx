"use client";
import { type FC } from "react";
import { TaskListByDateProvider } from "@/services/task/provider";
import CalendarTaskListComponent from "./CalenderTaskList";

type Props = {
  family_id: number;
  date: string;
};

const CalendarTasksComponent: FC<Props> = (props) => {
  return (
    <TaskListByDateProvider id={props.family_id} date={props.date}>
      <CalendarTaskListComponent date={props.date} />
    </TaskListByDateProvider>
  );
};

export default CalendarTasksComponent;
