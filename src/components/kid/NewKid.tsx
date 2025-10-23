"use client";
import { useContext, type FC } from "react";
import { SchoolContext } from "@/services/school/provider";
import { useCookieStore } from "@/services/common/useCookieValue";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import MessageComponent from "../common/Message";
import { CreateKid } from "@/services/kid/api";
import styles from "./Kid.module.scss";
import { createFormList } from "@/utils/form";

type Inputs = {
  Name: string;
  Birth: string;
  Gender: "MALE" | "FEMALE";
  School: number;
};

const NewKidComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();
  const { schools } = useContext(SchoolContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });

  const genderRadioList = [
    { value: "MALE", label: "男" },
    { value: "FEMALE", label: "女" },
  ];

  const schoolSelectList = createFormList(schools);

  const { kid, isMutating, error, trigger } = CreateKid();
  if (error || !family_id || !schools) return <ErrorComponent />;
  if (isMutating) return <LoadingComponent />;
  if (kid)
    return (
      <MessageComponent
        message={`${kid.Name}さんを追加しました`}
        link="/setting"
      />
    );

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!family_id) return;
    const kidData = {
      ...data,
      School: Number(data.School),
      Family: Number(family_id),
    };
    trigger(kidData);
    reset();
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>子ども追加</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="名前"
          type="text"
          autoComplete="off"
          {...register("Name", {
            required: true,
            maxLength: { value: 10, message: "10文字以内" },
          })}
        />
        <p className={styles.error}>
          <ErrorMessage errors={errors} name="Name" />
        </p>
        <input
          className={styles.input}
          type="date"
          autoComplete="off"
          {...register("Birth", {
            required: true,
          })}
        />
        <div className={styles.radio}>
          {genderRadioList.map((gender) => {
            const { value, label } = gender;
            return (
              <label key={value}>
                <input
                  type="radio"
                  {...register("Gender", { required: true })}
                  value={value}
                />
                {label}
              </label>
            );
          })}
        </div>

        <select
          className={styles.select}
          {...register("School", { required: true })}
        >
          {schoolSelectList.map((school) => {
            const { value, label } = school;
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        <p className={styles.error}>
          <ErrorMessage errors={errors} name="School" />
        </p>

        <div className={styles.buttonBox}>
          <button className="button" disabled={!isValid} type="submit">
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewKidComponent;
