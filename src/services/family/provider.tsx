"use client";
import { createContext } from "react";
import { GetFamily } from "./api";
import LoadingComponent from "@/components/common/Loading";
import ErrorComponent from "@/components/common/Error";
import type { Family } from "./types";

type Context = {
  family: Family | undefined;
};

export const FamilyContext = createContext<Context>({
  family: undefined,
});

export const FamilyProvider = (props: ProviderPropsType) => {
  if (!props.id) return null;
  const { family, error, isLoading } = GetFamily(props.id);
  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;

  return (
    <FamilyContext.Provider value={{ family }}>
      {props.children}
    </FamilyContext.Provider>
  );
};
