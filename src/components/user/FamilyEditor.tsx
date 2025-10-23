"use client";
import { type FC, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FamilyContext } from "@/services/family/provider";
import { UpdateFamily } from "@/services/family/api";
import LoadingComponent from "@/components/common/Loading";
import ErrorComponent from "@/components/common/Error";
import MessageComponent from "../common/Message";
import styles from "./User.module.scss";

type Inputs = {
  Name: string;
};

const FamilyEditorComponent: FC = () => {
  const { family } = useContext(FamilyContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: { Name: String(family?.Name) },
  });
  if (!family?.Id) return null;
  const {
    family: familyResult,
    error,
    isMutating,
    trigger,
  } = UpdateFamily(family.Id);
  if (isMutating) return <LoadingComponent />;
  if (error) return <ErrorComponent />;
  if (familyResult)
    return (
      <MessageComponent
        message={`${family.Name}に更新しました`}
        link="/setting"
      />
    );
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const request = {
      Id: family?.Id,
      Name: data.Name,
    };
    trigger(request);
    reset();
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>家族名</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={styles.input}
          placeholder="家族名"
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
        <div className={styles.buttonBox}>
          <button className="button" disabled={!isValid} type="submit">
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default FamilyEditorComponent;
