"use client";
import { type FC, useContext } from "react";
import { ItemListContext } from "@/services/item/provider";

type Props = {
  ids: number[];
};

const ItemListNameComponent: FC<Props> = (props) => {
  const { items } = useContext(ItemListContext);
  const { ids } = props;
  const taskItems = items.filter(
    (item) => item.Id !== undefined && ids.includes(item.Id)
  );

  return (
    <>
      {taskItems.map((item) => (
        <span key={item.Id}>{item.Name}</span>
      ))}
    </>
  );
};

export default ItemListNameComponent;
