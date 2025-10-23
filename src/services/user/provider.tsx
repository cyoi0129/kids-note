"use client";
import { createContext } from "react";
import { GetUser } from "./api";
import LoadingComponent from "@/components/common/Loading";
import ErrorComponent from "@/components/common/Error";
import type { User } from "./types";

type Context = {
  user: User | undefined;
};

export const UserContext = createContext<Context>({
  user: undefined,
});

export const UserProvider = (props: ProviderPropsType) => {
  if (!props.id) return;
  const { user, error, isLoading } = GetUser(Number(props.id));
  if (error) return <ErrorComponent />;
  if (isLoading) return <LoadingComponent />;
  if (user)
    return (
      <UserContext.Provider value={{ user }}>
        {props.children}
      </UserContext.Provider>
    );
};
