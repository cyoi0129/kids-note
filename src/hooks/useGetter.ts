import useSWR from "swr";
import { getCookie } from "@/utils/useCookie";
import { API_BASE } from "@/utils/constants";

const useGetter = <Res>(path: string, params?: URLSearchParams) => {
  const query = params ? new URLSearchParams(params) : undefined;
  const queryString = query ? `?${query.toString()}` : "";
  const fetcher = async <Res>(key: string): Promise<Res> => {
    const response = await fetch(API_BASE + key, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token") as string,
      },
    });
    if (!response.ok) {
      throw new Error("Api request failed");
    }
    const data: Res = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR<Res>(path + queryString, fetcher);

  return {
    data,
    isLoading,
    error,
  };
};

export default useGetter;
