"use client";
import { type FC } from "react";
import { useCookieStore } from "@/services/common/useCookieValue";
import { FamilyProvider } from "@/services/family/provider";
import FamilyEditorComponent from "./FamilyEditor";

const FamilyComponent: FC = () => {
  const family_id = useCookieStore("family_id").getValue();
  if (!family_id) return null;
  return (
    <FamilyProvider id={Number(family_id)}>
      <FamilyEditorComponent />
    </FamilyProvider>
  );
};

export default FamilyComponent;
