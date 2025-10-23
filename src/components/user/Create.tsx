"use client";
import { type FC } from "react";
import { useSearchParams, redirect } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { CreateUser } from "@/services/user/api";
import LoadingComponent from "../common/Loading";
import ErrorComponent from "../common/Error";
import MessageComponent from "../common/Message";
import { sha256 } from "@/utils/hash";
import styles from "./User.module.scss";

type Inputs = {
  Name: string;
  Password: string;
  PasswordConfirm: string;
  Gender: "MALE" | "FEMALE";
};

const CreateUserComponent: FC = () => {
  const params = useSearchParams();
  const token = params.get("token");
  const email = params.get("email");
  const family = params.get("family");
  if (token === null || email === null) {
    redirect(`/`);
  }
  const tokenString = String(token);
  const emailString = String(email).replace("%40", "@");
  const defaultValues = {
    Gender: "MALE" as const,
  };

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

  const { user, error, isMutating, trigger } = CreateUser();
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
    const userData = {
      Token: tokenString,
      Email: emailString,
      Family: family ? Number(family) : undefined,
      Name: data.Name,
      Gender: data.Gender,
      Password: hashedPassword,
    };
    trigger(userData);
    reset();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ユーザー作成</h2>
      <p className={styles.email}>Email: {emailString}</p>
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
    </div>
  );
};

export default CreateUserComponent;
