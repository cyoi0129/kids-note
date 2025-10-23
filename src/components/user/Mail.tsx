"use client";
import { type FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { SendMail } from "@/services/user/api";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import MessageComponent from "../common/Message";
import styles from "./User.module.scss";

type Inputs = {
  Email: string;
};

const MailComponent: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });

  const { message, error, isMutating, trigger } = SendMail();
  if (isMutating) return <LoadingComponent />;
  if (error) return <ErrorComponent />;
  if (message) return <MessageComponent message={message} />;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    trigger(data);
    reset();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>アカウント作成</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="メールアドレス"
          type="email"
          autoComplete="off"
          {...register("Email", {
            required: true,
            maxLength: { value: 60, message: "60文字以内" },
            pattern: {
              value:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: "メールアドレスの形式が不正です",
            },
          })}
        />
        <p className={styles.error}>
          <ErrorMessage errors={errors} name="Email" />
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

export default MailComponent;
