"use client";
import { type FC, useContext } from "react";
import Link from "next/link";
import styles from "./Calendar.module.scss";
import { TaskListByDateContext } from "@/services/task/provider";

type Props = {
  date: string;
};

const CalendarTaskListComponent: FC<Props> = (props) => {
  const { tasks } = useContext(TaskListByDateContext);
  return (
    <div className={styles.todo}>
      <div className={styles.tasks}>
        <h3 className={styles.title}>{props.date}締切のタスク</h3>
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li
              key={task.Id}
              className={task.Status === "DONE" ? styles.done : ""}
            >
              <Link href={`/task/${task.Id}`}>{task.Name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarTaskListComponent;
