"use client";
import { type FC, useState, useContext } from "react";
import { TaskContext } from "@/services/task/provider";
import UserNameComponent from "../user/UserName";
import TaskTypeListNameComponent from "./TaskTypeListName";
import ItemListNameComponent from "../item/ItemListName";
import KidNameComponent from "../kid/KidName";
import styles from "./TaskDetail.module.scss";
import { IoCalendar, IoPerson, IoBook } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import TaskEditorComponent from "./TaskEditer";
import { TbMoodKidFilled } from "react-icons/tb";
import { FamilyProvider } from "@/services/family/provider";
import { KidProvider } from "@/services/kid/provider";
import { TaskTypeListProvider } from "@/services/task/provider";
import { ItemListProvider } from "@/services/item/provider";
import { KidListProvider } from "@/services/kid/provider";
import { useCookieStore } from "@/services/common/useCookieValue";

const TaskDetailComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();
  const { task } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  if (!family_id) return null;
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

  if (task)
    return (
      <div className={styles.container}>
        {isEditing ? (
          <FamilyProvider id={task.Family}>
            <KidListProvider id={task.Family}>
              <TaskTypeListProvider id={task.Family}>
                <ItemListProvider id={task.Family}>
                  <TaskEditorComponent
                    taskData={task}
                    closeEditor={() => setIsEditing(false)}
                  />
                </ItemListProvider>
              </TaskTypeListProvider>
            </KidListProvider>
          </FamilyProvider>
        ) : (
          <>
            <h3 className={styles.title}>{task.Name}</h3>
            <p className={styles.description}>{task.Detail}</p>
            <dl className={styles.meta}>
              <dt>
                <MdCategory />
                種別
              </dt>
              <dd>
                <TaskTypeListProvider id={task.Family}>
                  <TaskTypeListNameComponent ids={task.Types} />
                </TaskTypeListProvider>
              </dd>
              <dt>
                <IoCalendar />
                締切
              </dt>
              <dd>{task.Due}</dd>
              <dt>
                <TbMoodKidFilled />
                子ども
              </dt>
              <dd>
                <KidProvider id={task.Kid}>
                  <KidNameComponent />
                </KidProvider>
              </dd>
              <dt>
                <FaRecycle />
                ステータス
              </dt>
              <dd>{getStatusName(task.Status)}</dd>
              <dt>
                <IoPerson />
                担当者
              </dt>
              <dd>
                <FamilyProvider id={Number(family_id)}>
                  <UserNameComponent user_id={task.UserId} />
                </FamilyProvider>
              </dd>
              <dt>
                <IoBook />
                関連アイテム
              </dt>
              <dd>
                <ItemListProvider id={task.Family}>
                  <ItemListNameComponent ids={task.Items} />
                </ItemListProvider>
              </dd>
            </dl>
            <div className={styles.buttonBox}>
              <button className="button" onClick={() => setIsEditing(true)}>
                編集
              </button>
            </div>
          </>
        )}
      </div>
    );
};

export default TaskDetailComponent;
