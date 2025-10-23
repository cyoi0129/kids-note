import { FC } from "react";
import Link from "next/link";
import { IoCalendar, IoList, IoBook, IoSettings } from "react-icons/io5";
import styles from "./Footer.module.scss";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.container}>
        <li>
          <Link href="/">
            <IoCalendar />
            カレンダー
          </Link>
        </li>
        <li>
          <Link href="/task">
            <IoList />
            タスク
          </Link>
        </li>
        <li>
          <Link href="/item">
            <IoBook />
            アイテム
          </Link>
        </li>
        <li>
          <Link href="/setting">
            <IoSettings />
            設定
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
