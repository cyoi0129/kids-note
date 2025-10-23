"use client";
import { type FC, useState, useEffect } from "react";
import Calendar from "react-calendar";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";
import CalendarTasksComponent from "./CalenderTasks";
import { useCookieStore } from "@/services/common/useCookieValue";
import { convertDateToString } from "@/utils/date";

const CalendarViewComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();
  const [current, setCurrent] = useState("");
  const changeCurrent = (date: Date) => {
    date.setDate(date.getDate() + 1); //ライブラリーのバグ？1日不足のために足している
    setCurrent(convertDateToString(date));
  };

  useEffect(() => {
    setCurrent(convertDateToString(new Date()));
  }, []);
  if (!family_id || !current) return null;
  return (
    <div className={styles.container}>
      <div className={styles.calendar}>
        <Calendar
          calendarType="gregory"
          value={current}
          onClickDay={(e) => changeCurrent(e)}
        />
      </div>
      <CalendarTasksComponent date={current} family_id={Number(family_id)} />
    </div>
  );
};

export default CalendarViewComponent;
