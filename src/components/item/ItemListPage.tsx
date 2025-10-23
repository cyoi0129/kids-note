"use client";
import { type FC } from "react";
import { ItemListProvider } from "@/services/item/provider";
import ItemListComponent from "./ItemList";
import styles from "./ItemList.module.scss";
import { IoAdd } from "react-icons/io5";
import Link from "next/link";
import { useCookieStore } from "@/services/common/useCookieValue";

const ItemListPageComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();
  if (!family_id) return null;
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>アイテム一覧</h2>
      <ul className={styles.list}>
        <ItemListProvider id={Number(family_id)}>
          <ItemListComponent />
        </ItemListProvider>
      </ul>
      <div className="float_button">
        <Link href="/item/new">
          <IoAdd />
        </Link>
      </div>
    </div>
  );
};

export default ItemListPageComponent;
