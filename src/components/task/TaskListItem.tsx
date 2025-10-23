"use client";
import { type FC } from "react";
import UserNameComponent from "../user/UserName";
import TaskTypeListNameComponent from "./TaskTypeListName";
import ItemListNameComponent from "../item/ItemListName";
import KidNameComponent from "../kid/KidName";
import { type Task } from "@/services/task/types";
import Link from "next/link";
import styles from "./TaskListItem.module.scss";
import { IoCalendar, IoPerson, IoBook } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import { TbMoodKidFilled } from "react-icons/tb";
import { KidProvider } from "@/services/kid/provider";
import { TaskTypeListProvider } from "@/services/task/provider";
import { ItemListProvider } from "@/services/item/provider";
import { FamilyProvider } from "@/services/family/provider";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useCookieStore } from "@/services/common/useCookieValue";

type Props = {
  task: Task;
  checked?: boolean;
  changeCheckList: (id: number) => void;
};

const TaskListItemComponent: FC<Props> = (props) => {
  const family_id = useCookieStore("family_id").getValue();
  if (!family_id) return null;
  const { task, checked } = props;
  const getStatusName = (status: string) => {
    switch (status) {
      case "TODO":
        return "未着手";
      case "DOING":
        return "進行中";
      case "DONE":
        return "完了";
      default:
        return "";
    }
  };
  const changeCheckList = () => {
    if (!task.Id) return;
    props.changeCheckList(task.Id);
  };
  return (
    <li
      className={
        task.Status === "DONE"
          ? `${styles.done} ${styles.container}`
          : styles.container
      }
    >
      <div className={styles.check} onClick={changeCheckList}>
        <span className={checked ? styles.checked : ""}>
          <IoCheckmarkCircle />
        </span>
      </div>
      <Link href={`/task/${task.Id}`}>
        <h3 className={styles.title}>{task.Name}</h3>
        <p className={styles.description}>{task.Detail}</p>
        <ul className={styles.meta}>
          <li>
            <MdCategory />
            <TaskTypeListProvider id={task.Family}>
              <TaskTypeListNameComponent ids={task.Types} />
            </TaskTypeListProvider>
          </li>
          <li>
            <IoCalendar />
            {task.Due}
          </li>
          <li>
            <TbMoodKidFilled />
            <KidProvider id={task.Kid}>
              <KidNameComponent />
            </KidProvider>
          </li>
          <li>
            <IoBook />
            <ItemListProvider id={task.Family}>
              <ItemListNameComponent ids={task.Items} />
            </ItemListProvider>
          </li>
          <li>
            <IoPerson />
            <FamilyProvider id={Number(family_id)}>
              <UserNameComponent user_id={task.UserId} />
            </FamilyProvider>
          </li>
          <li>
            <FaRecycle />
            {getStatusName(task.Status)}
          </li>
        </ul>
      </Link>
    </li>
  );
};

export default TaskListItemComponent;
