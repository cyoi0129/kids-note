"use client";
import { type FC, useContext } from "react";
import { ItemListContext } from "@/services/item/provider";
import ItemListItemComponent from "./ItemListItem";

const ItemListComponent: FC = () => {
  const { items } = useContext(ItemListContext);
  return (
    <>
      {items.map((item) => (
        <ItemListItemComponent key={item.Id} item={item} />
      ))}
    </>
  );
};

export default ItemListComponent;
