import { FC } from "react";
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";
import { IoPersonCircle } from "react-icons/io5";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Image src="/icon.png" alt="Logo" width={32} height={32} />
          <h1 className={styles.title}>Kids Note</h1>
        </div>
        <Link className={styles.account} href="/user/update">
          <IoPersonCircle />
        </Link>
      </div>
    </header>
  );
};

export default Header;
