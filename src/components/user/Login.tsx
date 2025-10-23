"use client";
import { type FC } from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { LoginUser } from "@/services/user/api";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import MessageComponent from "../common/Message";
import { sha256 } from "@/utils/hash";
import styles from "./User.module.scss";

type Inputs = {
  Email: string;
  Password: string;
};

const LoginComponent: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange" });

  const { user, error, isMutating, trigger } = LoginUser();
  if (isMutating) return <LoadingComponent />;
  if (error) return <ErrorComponent />;
  if (user)
    return (
      <MessageComponent
        message={`ようこそ、${user.Name}さん`}
        link="/setting"
      />
    );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const hashedPassword = await sha256(data.Password);
    trigger({
      Email: data.Email,
      Password: hashedPassword,
    });
    reset();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ログイン</h2>
      <p className={styles.create}>
        <Link href="/user/mail">アカウント作成</Link>
      </p>
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
        <input
          className={styles.input}
          placeholder="パスワード"
          type="password"
          {...register("Password", {
            required: true,
          })}
        />
        <div className={styles.buttonBox}>
          <button className="button" disabled={!isValid} type="submit">
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
