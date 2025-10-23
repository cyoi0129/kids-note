import useGetter from "../../hooks/useGetter";
import usePoster from "../../hooks/usePoster";
import usePutter from "../../hooks/usePutter";
import { ApiFamilyResponse, ApiFamilyRequest } from "./types";

export const GetFamily = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiFamilyResponse>(
    `/family/${id}`
  );
  const family = data ? data.Data : undefined;
  return {
    family,
    error,
    isLoading,
  };
};

export const CreateFamily = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiFamilyResponse,
    ApiFamilyRequest
  >("/family");
  const family = data?.Data;
  return {
    family,
    error,
    isMutating,
    trigger,
  };
};

export const UpdateFamily = (id: number) => {
  const { data, error, isMutating, trigger } = usePutter<
    ApiFamilyResponse,
    ApiFamilyRequest
  >(`/family/${id}`);
  const family = data?.Data;
  return {
    family,
    error,
    isMutating,
    trigger,
  };
};
