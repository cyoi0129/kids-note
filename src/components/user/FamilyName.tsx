"use client";
import { type FC, useContext } from "react";
import { FamilyContext } from "@/services/family/provider";

const FamilyNameComponent: FC = () => {
  const { family } = useContext(FamilyContext);
  if (family) return <>{family.Name}</>;
};

export default FamilyNameComponent;
