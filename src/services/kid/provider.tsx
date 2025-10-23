"use client";
import { createContext } from "react";
import { GetKid, GetKidList } from "./api";
import LoadingComponent from "@/components/common/Loading";
import ErrorComponent from "@/components/common/Error";
import type { Kid } from "./types";

type KidContext = {
  kid: Kid | undefined;
};

export const KidContext = createContext<KidContext>({
  kid: undefined,
});

export const KidProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { kid, error, isLoading } = GetKid(props.id);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (kid)
    return (
      <KidContext.Provider value={{ kid }}>
        {props.children}
      </KidContext.Provider>
    );
};

type KidListContext = {
  kids: Kid[];
};

export const KidListContext = createContext<KidListContext>({
  kids: [],
});

export const KidListProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { kids, error, isLoading } = GetKidList(props.id);

  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (kids)
    return (
      <KidListContext.Provider value={{ kids }}>
        {props.children}
      </KidListContext.Provider>
    );
};
