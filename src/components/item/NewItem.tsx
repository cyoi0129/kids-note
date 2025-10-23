"use client";
import { type FC } from "react";
import { KidListProvider } from "@/services/kid/provider";
import NewItemDetailComponent from "./NewItemDetail";
import { useCookieStore } from "@/services/common/useCookieValue";

const NewItemComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();
  if (!family_id) return null;

  return (
    <KidListProvider id={Number(family_id)}>
      <NewItemDetailComponent />
    </KidListProvider>
  );
};

export default NewItemComponent;
