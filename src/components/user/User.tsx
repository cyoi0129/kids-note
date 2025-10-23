"use client";
import { type FC, useContext } from "react";
import { UserContext } from "@/services/user/provider";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { UpdateUser } from "@/services/user/api";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import MessageComponent from "../common/Message";
import { IoPersonAdd } from "react-icons/io5";
import Link from "next/link";
import styles from "./User.module.scss";
import { sha256 } from "@/utils/hash";

type Inputs = {
  Email: string;
  Name: string;
  Password: string;
  PasswordConfirm: string;
  Gender: "MALE" | "FEMALE";
};

const UserComponent: FC = () => {
  const { user } = useContext(UserContext);
  const defaultValues = { ...user };
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "onChange", defaultValues });

  const genderRadioList = [
    { value: "MALE", label: "男" },
    { value: "FEMALE", label: "女" },
  ];
  if (!user?.Id) return;
  const { user: result, error, isMutating, trigger } = UpdateUser(user?.Id);
  if (isMutating) return <LoadingComponent />;
  if (error || !user) return <ErrorComponent />;
  if (result)
    return (
      <MessageComponent
        message={`${result.Name}さんの情報を更新しました`}
        link="/setting"
      />
    );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const hashedPassword = await sha256(data.Password);
    const userData = {
      Email: user.Email,
      Family: user.Family,
      Name: data.Name,
      Gender: data.Gender,
      Password: hashedPassword,
    };
    trigger(userData);
    reset();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ユーザー情報更新</h2>
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
          placeholder="パスワード"
          type="password"
          {...register("Password", {
            required: true,
            minLength: { value: 8, message: "8文字以上" },
            maxLength: { value: 20, message: "20文字以内" },
          })}
        />
        <p className={styles.error}>
          <ErrorMessage errors={errors} name="Password" />
        </p>
        <input
          className={styles.input}
          placeholder="パスワード確認"
          type="password"
          {...register("PasswordConfirm", {
            required: true,
            minLength: { value: 8, message: "8文字以上" },
            maxLength: { value: 20, message: "20文字以内" },
            validate: (value) => {
              return (
                value === getValues("Password") || "パスワードが一致しません"
              );
            },
          })}
        />
        <p className={styles.error}>
          <ErrorMessage errors={errors} name="PasswordConfirm" />
        </p>
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
        <div className={styles.buttonBox}>
          <button className="button" disabled={!isValid} type="submit">
            送信
          </button>
        </div>
      </form>
      <div className={styles.invite}>
        <Link href="/user/invite">
          <IoPersonAdd />
          家族に招待する
        </Link>
      </div>
    </div>
  );
};

export default UserComponent;
