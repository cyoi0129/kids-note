"use client";
import { FC } from "react";
import Link from "next/link";
import styles from "./Message.module.scss";

type Props = {
  message: string;
  link?: string;
  reload?: boolean;
};

const MessageComponent: FC<Props> = (props) => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className={styles.container}>
      <p className={styles.message}>{props.message}</p>
      {props.link ? (
        <p className={styles.link}>
          <Link href={props.link}>戻る</Link>
        </p>
      ) : null}
      {props.reload ? (
        <p className={styles.link} onClick={handleReload}>
          戻る
        </p>
      ) : null}
    </div>
  );
};

export default MessageComponent;
