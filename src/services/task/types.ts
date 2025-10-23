export type Task = {
  Id?: number;
  Name: string;
  Detail: string;
  Types: number[];
  Status: "TODO" | "DOING" | "DONE";
  Due: string;
  Items: number[];
  UserId: number;
  Kid: number;
  Family: number;
};

export type TaskType = {
  Id?: number;
  Name: string;
  Family: number;
};

export type ApiTaskRequest = Task;

export type ApiTaskTypeRequest = TaskType;

export type ApiTaskDoneRequest = number[];

export type ApiTaskResponse = ApiResponseType<Task>;

export type ApiTaskListResponse = ApiResponseType<Task[]>;

export type ApiTaskTypeResponse = ApiResponseType<TaskType>;

export type ApiTaskTypeListResponse = ApiResponseType<TaskType[]>;

export type ApiTaskDoneResponse = ApiResponseType<string>;
