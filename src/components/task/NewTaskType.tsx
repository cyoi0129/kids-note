"use client";
import { type FC } from "react";
import { useCookieStore } from "@/services/common/useCookieValue";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CreateTaskType } from "@/services/task/api";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import MessageComponent from "../common/Message";
import styles from "./TaskType.module.scss";

type Inputs = {
  Name: string;
};

const NewTaskTypeComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });
  const { task_type, isMutating, error, trigger } = CreateTaskType();
  if (error || !family_id) return <ErrorComponent />;
  if (isMutating) return <LoadingComponent />;
  if (task_type)
    return (
      <MessageComponent
        message={`${task_type.Name}を追加しました`}
        link="/setting"
      />
    );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!family_id) return;
    const taskTypeData = {
      ...data,
      Family: Number(family_id),
    };
    trigger(taskTypeData);
    reset();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>タスク種類の追加</h2>
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

export default NewTaskTypeComponent;
