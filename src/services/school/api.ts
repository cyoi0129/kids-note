import useGetter from "../../hooks/useGetter";
import { ApiSchoolResponse, ApiSchoolsResponse } from "./types";

export const GetSchoolList = () => {
  const { data, error, isLoading } = useGetter<ApiSchoolsResponse>("/schools");
  const schools = data?.Data || [];
  return {
    schools,
    error,
    isLoading,
  };
};

export const GetSchool = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiSchoolResponse>(
    `/school/${id}`
  );
  const school = data?.Data;
  return {
    school,
    error,
    isLoading,
  };
};
