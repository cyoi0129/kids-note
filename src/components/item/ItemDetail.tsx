"use client";
import { type FC, useContext, useState } from "react";
import { ItemContext } from "@/services/item/provider";
import KidNameComponent from "../kid/KidName";
import styles from "./ItemDetail.module.scss";
import { MdCategory } from "react-icons/md";
import { TbMoodKidFilled } from "react-icons/tb";
import Image from "next/image";
import { NO_IMAGE_URL } from "@/utils/constants";
import { KidProvider } from "@/services/kid/provider";
import { KidListProvider } from "@/services/kid/provider";
import ItemEditor from "./ItemEditor";

const ItemDetailComponent: FC = () => {
  const { item } = useContext(ItemContext);
  const [isEditing, setIsEditing] = useState(false);

  if (item)
    return (
      <div className={styles.container}>
        {isEditing ? (
          <KidListProvider id={item.Family}>
            <ItemEditor
              itemData={item}
              closeEditor={() => setIsEditing(false)}
            />
          </KidListProvider>
        ) : (
          <>
            <h3 className={styles.title}>{item.Name}</h3>
            <p className={styles.description}>{item.Detail}</p>
            <dl className={styles.meta}>
              <dt>
                <MdCategory />
                種別
              </dt>
              <dd>{item.Type}</dd>
              <dt>
                <TbMoodKidFilled />
                子ども
              </dt>
              <dd>
                <KidProvider id={item.Kid}>
                  <KidNameComponent />
                </KidProvider>
              </dd>
            </dl>

            <div className={styles.image}>
              <Image
                src={item.Image === "" ? NO_IMAGE_URL : item.Image}
                alt={item.Name}
                width={72}
                height={72}
              />
            </div>
            <div className={styles.buttonBox}>
              <button className="button" onClick={() => setIsEditing(true)}>
                編集
              </button>
            </div>
          </>
        )}
      </div>
    );
};

export default ItemDetailComponent;
