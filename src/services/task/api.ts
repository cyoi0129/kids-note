import useGetter from "../../hooks/useGetter";
import usePoster from "../../hooks/usePoster";
import usePutter from "../../hooks/usePutter";
import type {
  ApiTaskResponse,
  ApiTaskRequest,
  ApiTaskListResponse,
  ApiTaskTypeResponse,
  ApiTaskTypeRequest,
  ApiTaskTypeListResponse,
  ApiTaskDoneResponse,
  ApiTaskDoneRequest,
  Task,
} from "./types";
import { convertDateString } from "@/utils/date";

const convertTaskDate = (task: Task) => {
  return {
    ...task,
    Due: convertDateString(task.Due),
  };
};

const convertTaskListDate = (tasks: Task[]) => {
  return tasks.map((task) => convertTaskDate(task));
};

export const GetTaskList = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiTaskListResponse>(
    `/task_list/${id}`
  );
  const tasks = data ? data.Data : [];
  return {
    tasks: convertTaskListDate(tasks),
    error,
    isLoading,
  };
};

export const GetTaskListByDate = (id: number, date: string) => {
  const { data, error, isLoading } = useGetter<ApiTaskListResponse>(
    `/task_list/${id}`,
    new URLSearchParams({ date })
  );
  const tasks = data ? data.Data : [];
  return {
    tasks: convertTaskListDate(tasks),
    error,
    isLoading,
  };
};

export const GetTask = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiTaskResponse>(`/task/${id}`);
  const task = data?.Data;
  return {
    task: task && convertTaskDate(task),
    error,
    isLoading,
  };
};

export const CreateTask = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiTaskResponse,
    ApiTaskRequest
  >("/task");
  const task = data?.Data;
  return {
    task: task && convertTaskDate(task),
    error,
    isMutating,
    trigger,
  };
};

export const UpdateTask = (id: number) => {
  const { data, error, isMutating, trigger } = usePutter<
    ApiTaskResponse,
    ApiTaskRequest
  >(`/task/${id}`);
  const task = data?.Data;
  return {
    task: task && convertTaskDate(task),
    error,
    isMutating,
    trigger,
  };
};

export const GetTaskTypeList = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiTaskTypeListResponse>(
    `/task_type_list/${id}`
  );
  const task_types = data ? data.Data : [];
  return {
    task_types,
    error,
    isLoading,
  };
};

export const GetTaskType = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiTaskTypeResponse>(
    `/task_type/${id}`
  );
  const task_type = data?.Data;
  return {
    task_type,
    error,
    isLoading,
  };
};

export const CreateTaskType = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiTaskTypeResponse,
    ApiTaskTypeRequest
  >("/task_type");
  const task_type = data?.Data;
  return {
    task_type,
    error,
    isMutating,
    trigger,
  };
};

export const UpdateTaskType = (id: number) => {
  const { data, error, isMutating, trigger } = usePutter<
    ApiTaskTypeResponse,
    ApiTaskTypeRequest
  >(`/task_type/${id}`);
  const task_type = data?.Data;
  return {
    task_type,
    error,
    isMutating,
    trigger,
  };
};

export const SetTasksDone = (id: number) => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiTaskDoneResponse,
    ApiTaskDoneRequest
  >(`/task_done/${id}`);
  const result = data?.Data;
  return {
    result,
    error,
    isMutating,
    trigger,
  };
};
