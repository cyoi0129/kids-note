"use client";
import { ChangeEvent, type FC, useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateItem } from "@/services/item/api";
import ErrorComponent from "../common/Error";
import LoadingComponent from "../common/Loading";
import MessageComponent from "../common/Message";
import { createFormList } from "@/utils/form";
import { ErrorMessage } from "@hookform/error-message";
import type { Item } from "@/services/item/types";
import { KidListContext } from "@/services/kid/provider";
import styles from "./ItemEditor.module.scss";
import Image from "next/image";
import { LuImageUp } from "react-icons/lu";
import { MdEdit, MdClose } from "react-icons/md";
import { useCookieStore } from "@/services/common/useCookieValue";

const NewItemDetail: FC = () => {
  const family_id = useCookieStore("family_id").getValue();

  const { kids } = useContext(KidListContext);
  const [image, setImage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Item>({ mode: "onChange" });
  if (!family_id) return null;
  const { item, error, isMutating, trigger } = CreateItem();

  if (isMutating) return <LoadingComponent />;
  if (error) return <ErrorComponent />;

  const kidRadioList = createFormList(kids);

  if (item)
    return (
      <MessageComponent message={`${item.Name}を追加しました`} link="/item" />
    );

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (!files) return;
    // TODO: ストレージへの送信実装
    setImage(URL.createObjectURL(files[0]));
  };

  const onSubmit: SubmitHandler<Item> = (data) => {
    const request = {
      ...data,
      Image: image,
      Kid: Number(data.Kid),
      Family: Number(family_id),
    };
    trigger(request);
    reset();
  };

  return (
    <div className={styles.editor}>
      <h2 className={styles.title}>アイテム追加</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <dl>
          <dt>
            アイテム名
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Name" />
            </p>
          </dt>
          <dd>
            <input
              className={styles.input}
              placeholder="アイテム名"
              type="text"
              autoComplete="off"
              {...register("Name", {
                required: true,
                maxLength: { value: 10, message: "10文字以内" },
              })}
            />
          </dd>
          <dt>
            アイテム種別
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Type" />
            </p>
          </dt>
          <dd>
            <input
              className={styles.input}
              placeholder="アイテム種別"
              type="text"
              autoComplete="off"
              {...register("Type", {
                required: true,
                maxLength: { value: 10, message: "10文字以内" },
              })}
            />
          </dd>
          <dt>
            アイテム詳細
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Detail" />
            </p>
          </dt>
          <dd>
            <textarea
              {...register("Detail", {
                required: true,
                maxLength: { value: 100, message: "100文字以内" },
              })}
              placeholder="アイテム詳細"
              className={styles.textarea}
            />
          </dd>
          <dt>
            子ども
            <p className={styles.error}>
              <ErrorMessage errors={errors} name="Kid" />
            </p>
          </dt>
          <dd>
            <div className={styles.list}>
              {kidRadioList.map((kid) => {
                const { value, label } = kid;
                return (
                  <label key={value}>
                    <input
                      type="radio"
                      {...register("Kid", { required: true })}
                      value={value}
                    />
                    {label}
                  </label>
                );
              })}
            </div>
          </dd>
        </dl>
        <div className={styles.image}>
          {image === "" ? (
            <label>
              <div className={styles.add}>
                <LuImageUp />
                画像を追加
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          ) : (
            <div className={styles.preview}>
              <Image src={image} alt="" width={100} height={100} />
              <div className={styles.remove}>
                <MdClose onClick={() => setImage("")} />
              </div>
              <label>
                <div className={styles.action}>
                  <MdEdit />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </label>
            </div>
          )}
        </div>
        <div className={styles.buttonBox}>
          <button className="button" disabled={!isValid} type="submit">
            保存
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewItemDetail;
