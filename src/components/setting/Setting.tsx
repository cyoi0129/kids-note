"use client";
import { type FC } from "react";
import { FamilyProvider } from "@/services/family/provider";
import { UserProvider } from "@/services/user/provider";
import { KidListProvider } from "@/services/kid/provider";
import { TaskTypeListProvider } from "@/services/task/provider";
import Link from "next/link";
import styles from "./Setting.module.scss";
import FamilyNameComponent from "../user/FamilyName";
import KidListComponent from "../kid/KidList";
import TaskTypeListComponent from "../task/TaskTypeList";
import UserViewComponent from "../user/UserView";
import { IoPerson, IoHome, IoPersonAdd } from "react-icons/io5";
import { FaChildren } from "react-icons/fa6";
import { MdCategory, MdEdit } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { useCookieStore } from "@/services/common/useCookieValue";

const SettingComponent: FC = () => {
  const user_id = useCookieStore("user_id").getValue();
  const family_id = useCookieStore("family_id").getValue();
  if (!user_id || !family_id) return null;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <IoPerson />
        アカウント
        <Link href="/user/update">
          <MdEdit />
        </Link>
      </h2>
      <UserProvider id={Number(user_id)}>
        <UserViewComponent />
      </UserProvider>
      <div className={styles.invite}>
        <Link href="/user/invite">
          <IoPersonAdd />
          家族に招待する
        </Link>
      </div>
      <h2 className={styles.title}>
        <IoHome />
        家族
        <Link href="/user/family">
          <MdEdit />
        </Link>
      </h2>
      <FamilyProvider id={Number(family_id)}>
        <FamilyNameComponent />
      </FamilyProvider>
      <h2 className={styles.title}>
        <FaChildren />
        子ども
        <Link href="/kid/new">
          <IoMdAddCircle />
        </Link>
      </h2>
      <KidListProvider id={Number(family_id)}>
        <KidListComponent />
      </KidListProvider>
      <h2 className={styles.title}>
        <MdCategory />
        タスク種類
        <Link href="/task/type/new">
          <IoMdAddCircle />
        </Link>
      </h2>
      <TaskTypeListProvider id={Number(family_id)}>
        <TaskTypeListComponent />
      </TaskTypeListProvider>
    </div>
  );
};

export default SettingComponent;
