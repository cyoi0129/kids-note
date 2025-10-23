"use client";
import { ChangeEvent, type FC } from "react";

type Props = {
  date: string;
  showDone: boolean;
  onDateChange: (date: string) => void;
  onShowChange: (showDone: boolean) => void;
};

const TaskFilter: FC<Props> = (props) => {
  const handleDateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value).toISOString().split("T")[0];
    props.onDateChange(date);
  };

  const handleCheckBox = () => {
    props.onShowChange(!props.showDone);
  };

  return (
    <>
      <input
        type="date"
        autoComplete="off"
        defaultValue={props.date}
        onChange={handleDateInput}
      />
      <label>
        <input
          type="checkbox"
          defaultChecked={props.showDone}
          onChange={handleCheckBox}
        />
        完了タスクを含む
      </label>
    </>
  );
};

export default TaskFilter;
