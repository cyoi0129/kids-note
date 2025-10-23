"use client";
import { FC } from "react";
import styles from "./Loading.module.scss";

const LoadingComponent: FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loading}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
