import useGetter from "../../hooks/useGetter";
import usePoster from "../../hooks/usePoster";
import usePutter from "../../hooks/usePutter";
import {
  ApiKidResponse,
  ApiKidRequest,
  ApiKidListResponse,
  Kid,
} from "./types";
import { convertDateString } from "@/utils/date";

const convertKidDate = (kid: Kid) => {
  return {
    ...kid,
    Birth: convertDateString(kid.Birth),
  };
};

const convertKidListDate = (kids: Kid[]) => {
  return kids.map((kid) => convertKidDate(kid));
};

export const GetKidList = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiKidListResponse>(
    `/kid_list/${id}`
  );
  const kids = data ? data.Data : [];
  return {
    kids: convertKidListDate(kids),
    error,
    isLoading,
  };
};

export const GetKid = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiKidResponse>(`/kid/${id}`);
  const kid = data?.Data;
  return {
    kid: kid && convertKidDate(kid),
    error,
    isLoading,
  };
};

export const CreateKid = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiKidResponse,
    ApiKidRequest
  >("/kid");
  const kid = data?.Data;
  return {
    kid: kid && convertKidDate(kid),
    error,
    isMutating,
    trigger,
  };
};

export const UpdateKid = (id: number) => {
  const { data, error, isMutating, trigger } = usePutter<
    ApiKidResponse,
    ApiKidRequest
  >(`/kid/${id}`);
  const kid = data?.Data;
  return {
    kid: kid && convertKidDate(kid),
    error,
    isMutating,
    trigger,
  };
};
