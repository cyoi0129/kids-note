"use client";
import { createContext } from "react";
import { GetSchoolList } from "./api";
import LoadingComponent from "@/components/common/Loading";
import ErrorComponent from "@/components/common/Error";
import type { School } from "./types";

type Context = {
  schools: School[];
};

export const SchoolContext = createContext<Context>({
  schools: [],
});

export const SchoolProvider = (props: ProviderPropsType) => {
  const { schools, error, isLoading } = GetSchoolList();
  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;

  return (
    <SchoolContext.Provider value={{ schools: schools }}>
      {props.children}
    </SchoolContext.Provider>
  );
};
