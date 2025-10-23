"use client";
import { type FC } from "react";
import KidNameComponent from "../kid/KidName";
import { type Item } from "@/services/item/types";
import Link from "next/link";
import styles from "./ItemListItem.module.scss";
import Image from "next/image";
import { NO_IMAGE_URL } from "@/utils/constants";
import { KidProvider } from "@/services/kid/provider";

type Props = {
  item: Item;
};

const ItemListItemComponent: FC<Props> = (props) => {
  const { item } = props;
  return (
    <li className={styles.container}>
      <Link href={`/item/${item.Id}`}>
        <div className={styles.content}>
          <h3 className={styles.title}>{item.Name}</h3>
          <p className={styles.description}>{item.Detail}</p>
          <ul className={styles.meta}>
            <li>{item.Type}</li>
            <li>
              <KidProvider id={item.Kid}>
                <KidNameComponent />
              </KidProvider>
            </li>
          </ul>
        </div>
        <div className={styles.image}>
          <Image
            src={item.Image === "" ? NO_IMAGE_URL : item.Image}
            alt={item.Name}
            width={72}
            height={72}
          />
        </div>
      </Link>
    </li>
  );
};

export default ItemListItemComponent;
