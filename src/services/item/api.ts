import useGetter from "../../hooks/useGetter";
import usePoster from "../../hooks/usePoster";
import usePutter from "../../hooks/usePutter";
import { ApiItemResponse, ApiItemRequest, ApiItemListResponse } from "./types";

export const GetItemList = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiItemListResponse>(
    `/item_list/${id}`
  );
  const items = data ? data.Data : [];
  return {
    items,
    error,
    isLoading,
  };
};

export const GetItem = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiItemResponse>(`/item/${id}`);
  const item = data ? data.Data : undefined;
  return {
    item,
    error,
    isLoading,
  };
};

export const CreateItem = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiItemResponse,
    ApiItemRequest
  >("/item");
  const item = data?.Data;
  return {
    item,
    error,
    isMutating,
    trigger,
  };
};

export const UpdateItem = (id: number) => {
  const { data, error, isMutating, trigger } = usePutter<
    ApiItemResponse,
    ApiItemRequest
  >(`/item/${id}`);
  const item = data?.Data;
  return {
    item,
    error,
    isMutating,
    trigger,
  };
};
