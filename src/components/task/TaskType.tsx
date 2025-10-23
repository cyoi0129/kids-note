"use client";
import { type FC, useContext } from "react";
import { TaskTypeContext } from "@/services/task/provider";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { UpdateTaskType } from "@/services/task/api";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import MessageComponent from "../common/Message";
import styles from "./TaskType.module.scss";

type Inputs = {
  Name: string;
};

const TaskTypeComponent: FC = () => {
  const { task_type } = useContext(TaskTypeContext);
  const defaultValues = { ...task_type };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange", defaultValues });
  if (!task_type?.Id) return;
  const {
    task_type: result,
    isMutating,
    error,
    trigger,
  } = UpdateTaskType(task_type?.Id);
  if (error || !task_type) return <ErrorComponent />;
  if (isMutating) return <LoadingComponent />;
  if (result)
    return (
      <MessageComponent
        message={`${result.Name}を更新しました`}
        link="/setting"
      />
    );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const taskTypeData = {
      ...task_type,
      ...data,
    };
    trigger(taskTypeData);
    reset();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>タスク種類の更新</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="名前"
          type="text"
          autoComplete="off"
          {...register("Name", {
            required: true,
            maxLength: { value: 10, message: "10文字以内" },
          })}
        />
        <p className={styles.error}>
          <ErrorMessage errors={errors} name="Name" />
        </p>
        <div className={styles.buttonBox}>
          <button className="button" disabled={!isValid} type="submit">
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskTypeComponent;
