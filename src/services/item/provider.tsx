"use client";
import { createContext } from "react";
import { GetItem, GetItemList } from "./api";
import LoadingComponent from "@/components/common/Loading";
import ErrorComponent from "@/components/common/Error";
import type { Item } from "./types";

type ItemContext = {
  item: Item | undefined;
};

export const ItemContext = createContext<ItemContext>({
  item: undefined,
});

export const ItemProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { item, error, isLoading } = GetItem(props.id);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (item)
    return (
      <ItemContext.Provider value={{ item }}>
        {props.children}
      </ItemContext.Provider>
    );
};

type ItemListContext = {
  items: Item[];
};

export const ItemListContext = createContext<ItemListContext>({
  items: [],
});

export const ItemListProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { items, error, isLoading } = GetItemList(props.id);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (items)
    return (
      <ItemListContext.Provider value={{ items }}>
        {props.children}
      </ItemListContext.Provider>
    );
};
