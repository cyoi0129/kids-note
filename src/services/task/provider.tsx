"use client";
import { createContext } from "react";
import {
  GetTask,
  GetTaskType,
  GetTaskList,
  GetTaskTypeList,
  GetTaskListByDate,
} from "./api";
import LoadingComponent from "@/components/common/Loading";
import ErrorComponent from "@/components/common/Error";
import type { Task, TaskType } from "./types";

type TaskContext = {
  task: Task | undefined;
};

export const TaskContext = createContext<TaskContext>({
  task: undefined,
});

export const TaskProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { task, error, isLoading } = GetTask(props.id);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (task)
    return (
      <TaskContext.Provider value={{ task }}>
        {props.children}
      </TaskContext.Provider>
    );
};

type TaskTypeContext = {
  task_type: TaskType | undefined;
};

export const TaskTypeContext = createContext<TaskTypeContext>({
  task_type: undefined,
});

export const TaskTypeProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { task_type, error, isLoading } = GetTaskType(props.id);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (task_type)
    return (
      <TaskTypeContext.Provider value={{ task_type }}>
        {props.children}
      </TaskTypeContext.Provider>
    );
};

type TaskListContext = {
  tasks: Task[];
};

export const TaskListContext = createContext<TaskListContext>({
  tasks: [],
});

export const TaskListProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { tasks, error, isLoading } = GetTaskList(props.id);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (tasks)
    return (
      <TaskListContext.Provider value={{ tasks }}>
        {props.children}
      </TaskListContext.Provider>
    );
};

type TaskTypeListContext = {
  task_types: TaskType[];
};

export const TaskTypeListContext = createContext<TaskTypeListContext>({
  task_types: [],
});

export const TaskTypeListProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { task_types, error, isLoading } = GetTaskTypeList(props.id);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (task_types)
    return (
      <TaskTypeListContext.Provider value={{ task_types }}>
        {props.children}
      </TaskTypeListContext.Provider>
    );
};

export const TaskListByDateContext = createContext<TaskListContext>({
  tasks: [],
});

type DateProps = ProviderPropsType & { date: string };

export const TaskListByDateProvider = (props: DateProps) => {
  if (!props.id) return;
  const { tasks, error, isLoading } = GetTaskListByDate(props.id, props.date);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (tasks)
    return (
      <TaskListByDateContext.Provider value={{ tasks }}>
        {props.children}
      </TaskListByDateContext.Provider>
    );
};
