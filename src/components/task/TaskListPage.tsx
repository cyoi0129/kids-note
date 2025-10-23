"use client";
import { type FC, useState } from "react";
import TaskListComponent from "./TaskList";
import TaskListDateComponent from "./TaskListDate";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import MessageComponent from "../common/Message";
import TaskFilter from "./TaskFilter";
import styles from "./TaskList.module.scss";
import { IoAdd } from "react-icons/io5";
import Link from "next/link";
import { SetTasksDone } from "@/services/task/api";
import { useCookieStore } from "@/services/common/useCookieValue";

const TaskListPageComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();

  const [date, setDate] = useState("");
  const [showDone, setShowDone] = useState(true);
  const [checkList, setCheckList] = useState<number[]>([]);
  if (!family_id) return null;

  const { result, isMutating, error, trigger } = SetTasksDone(
    Number(family_id)
  );
  if (error) return <ErrorComponent />;
  if (isMutating) return <LoadingComponent />;
  if (result) return <MessageComponent message={result} reload />;

  const dateFilterProcess = (date: string) => {
    setDate(date);
    setCheckList([]);
  };

  const showFilterProcess = (showDone: boolean) => {
    setShowDone(showDone);
    setCheckList([]);
  };

  const handleCheckListChange = (id: number) => {
    if (checkList.includes(id)) {
      setCheckList(checkList.filter((id) => id !== id));
    } else {
      setCheckList([...checkList, id]);
    }
  };

  const setDoneProcess = () => {
    trigger(checkList);
    setCheckList([]);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>タスク一覧</h2>
      <div className={styles.filter}>
        <TaskFilter
          date={date}
          showDone={showDone}
          onDateChange={dateFilterProcess}
          onShowChange={showFilterProcess}
        />
      </div>
      {checkList.length > 0 ? (
        <div className={styles.done}>
          <button className="button" onClick={setDoneProcess}>
            選択したタスクを完了に変更
          </button>
        </div>
      ) : null}
      <ul className={styles.list}>
        {date === "" ? (
          <TaskListComponent
            family_id={Number(family_id)}
            show_done={showDone}
            checkList={checkList}
            changeCheckList={handleCheckListChange}
          />
        ) : (
          <TaskListDateComponent
            family_id={Number(family_id)}
            show_done={showDone}
            date={date}
            checkList={checkList}
            changeCheckList={handleCheckListChange}
          />
        )}
      </ul>
      <div className="float_button">
        <Link href="/task/new">
          <IoAdd />
        </Link>
      </div>
    </div>
  );
};

export default TaskListPageComponent;
