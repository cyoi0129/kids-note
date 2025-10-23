"use client";
import { type FC } from "react";
import { useCookieStore } from "@/services/common/useCookieValue";
import { FamilyProvider } from "@/services/family/provider";
import { TaskTypeListProvider } from "@/services/task/provider";
import { ItemListProvider } from "@/services/item/provider";
import { KidListProvider } from "@/services/kid/provider";
import NewTaskDetailComponent from "./NewTaskDetail";

const NewTaskComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();
  if (!family_id) return null;

  return (
    <FamilyProvider id={Number(family_id)}>
      <KidListProvider id={Number(family_id)}>
        <TaskTypeListProvider id={Number(family_id)}>
          <ItemListProvider id={Number(family_id)}>
            <NewTaskDetailComponent />
          </ItemListProvider>
        </TaskTypeListProvider>
      </KidListProvider>
    </FamilyProvider>
  );
};

export default NewTaskComponent;
