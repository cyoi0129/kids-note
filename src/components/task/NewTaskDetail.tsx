"use client";
import { type FC, useContext } from "react";
import styles from "./TaskEditor.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ErrorComponent from "../common/Error";
import LoadingComponent from "../common/Loading";
import MessageComponent from "../common/Message";
import { CreateTask } from "@/services/task/api";
import { Task } from "@/services/task/types";
import { createFormList } from "@/utils/form";
import { STATUS_LIST } from "@/utils/constants";
import { TaskTypeListContext } from "@/services/task/provider";
import { ItemListContext } from "@/services/item/provider";
import { KidListContext } from "@/services/kid/provider";
import { FamilyContext } from "@/services/family/provider";

const NewTaskDetailComponent: FC = () => {
  const { task_types } = useContext(TaskTypeListContext);
  const { items } = useContext(ItemListContext);
  const { kids } = useContext(KidListContext);
  const { family } = useContext(FamilyContext);

  let itemSelectList: { value: number; label: string }[] = [];
  let taskTypeCheckboxList: { value: number; label: string }[] = [];
  let familyRadioList: { value: number; label: string }[] = [];
  let kidRadioList: { value: number; label: string }[] = [];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Task>({ mode: "onChange" });

  const { task, error, isMutating, trigger } = CreateTask();

  if (isMutating) return <LoadingComponent />;
  if (error) return <ErrorComponent />;
  if (task)
    return (
      <MessageComponent message={`${task.Name}を追加しました`} link="/task" />
    );

  if (items) {
    itemSelectList = createFormList(items);
  }
  if (task_types) {
    taskTypeCheckboxList = createFormList(task_types);
  }

  if (family && family.Members) {
    familyRadioList = createFormList(family.Members);
  }

  if (kids) {
    kidRadioList = createFormList(kids);
  }

  const onSubmit: SubmitHandler<Task> = (data) => {
    if (!family?.Id) return;
    const types = data.Types.map((type) => Number(type));
    const items = [Number(data.Items)];
    const newTask = {
      Name: data.Name,
      Detail: data.Detail,
      Types: types,
      Status: data.Status,
      Update: new Date().toISOString().split("T")[0],
      Due: data.Due,
      Items: items,
      UserId: Number(data.UserId),
      Kid: Number(data.Kid),
      Family: family?.Id,
    };
    trigger(newTask);
    reset();
  };

  return (
    <div className={styles.editor}>
      <h2 className={styles.title}>タスク編集</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <dl>
          <dt>
            タスク名
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Name" />
            </p>
          </dt>
          <dd>
            <input
              className={styles.input}
              placeholder="タスク名"
              type="text"
              autoComplete="off"
              {...register("Name", {
                required: true,
                maxLength: { value: 10, message: "10文字以内" },
              })}
            />
          </dd>
          <dt>
            タスク詳細
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Detail" />
            </p>
          </dt>
          <dd>
            <textarea
              {...register("Detail", {
                required: true,
                maxLength: { value: 100, message: "100文字以内" },
              })}
              placeholder="タスク詳細"
              className={styles.textarea}
            />
          </dd>
          <dt>
            種別
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Type" />
            </p>
          </dt>
          <dd>
            <div className={styles.list}>
              {taskTypeCheckboxList.map((task_type) => {
                const { value, label } = task_type;
                return (
                  <label key={value}>
                    <input
                      type="checkbox"
                      {...register("Types", { required: true })}
                      value={value}
                    />
                    {label}
                  </label>
                );
              })}
            </div>
          </dd>
          <dt>
            子ども
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Kid" />
            </p>
          </dt>
          <dd>
            <div className={styles.list}>
              {kidRadioList.map((kid) => {
                const { value, label } = kid;
                return (
                  <label key={value}>
                    <input
                      type="radio"
                      {...register("Kid", { required: true })}
                      value={value}
                    />
                    {label}
                  </label>
                );
              })}
            </div>
          </dd>
          <dt>
            締切
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Due" />
            </p>
          </dt>
          <dd>
            <input
              className={styles.input}
              type="date"
              autoComplete="off"
              {...register("Due", {
                required: true,
              })}
            />
          </dd>
          <dt>
            ステータス
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Status" />
            </p>
          </dt>
          <dd>
            <div className={styles.list}>
              {STATUS_LIST.map((status) => {
                const { value, label } = status;
                return (
                  <label key={value}>
                    <input
                      type="radio"
                      {...register("Status", { required: true })}
                      value={value}
                    />
                    {label}
                  </label>
                );
              })}
            </div>
          </dd>
          <dt>
            担当者
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="UserId" />
            </p>
          </dt>
          <dd>
            <div className={styles.list}>
              {familyRadioList.map((Members) => {
                const { value, label } = Members;
                return (
                  <label key={value}>
                    <input
                      type="radio"
                      {...register("UserId", { required: true })}
                      value={value}
                    />
                    {label}
                  </label>
                );
              })}
            </div>
          </dd>
          <dt>
            関連アイテム
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Items" />
            </p>
          </dt>
          <dd>
            <select
              className={styles.select}
              {...register("Items", { required: true })}
            >
              {itemSelectList.map((item) => {
                const { value, label } = item;
                return (
                  <option key={value} value={value}>
                    {label}
                  </option>
                );
              })}
            </select>
          </dd>
        </dl>

        <div className={styles.buttonBox}>
          <button className="button" disabled={!isValid} type="submit">
            保存
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskDetailComponent;
