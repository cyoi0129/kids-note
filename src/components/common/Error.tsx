"use client";
import { FC, useState } from "react";
import styles from "./Error.module.scss";

const ErrorComponent: FC = () => {
  const [display, setDisplay] = useState(true);
  if (!display) return null;
  const handleClose = () => {
    setDisplay(false);
    window.location.reload();
  };
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2 className={styles.title}>エラーが発生しました</h2>
        <div className={styles.buttonBox}>
          <button className="button" onClick={handleClose}>
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
