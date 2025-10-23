import useSWRMutation from "swr/mutation";
import { getCookie } from "@/utils/useCookie";
import { API_BASE } from "@/utils/constants";

const usePoster = <Res, Req>(path: string, params?: URLSearchParams) => {
  const query = params ? new URLSearchParams(params) : undefined;
  const queryString = query ? `?${query.toString()}` : "";
  const poster = async (key: string, { arg }: { arg: Req }): Promise<Res> => {
    const response = await fetch(API_BASE + key, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token") as string,
      },
      body: JSON.stringify(arg),
    });
    if (!response.ok) throw new Error("Api request failed");
    return response.json() as Promise<Res>;
  };

  return useSWRMutation<Res, unknown, string, Req>(path + queryString, poster);
};

export default usePoster;
