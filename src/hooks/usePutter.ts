import useSWRMutation from "swr/mutation";
import { getCookie } from "@/utils/useCookie";
import { API_BASE } from "@/utils/constants";

const usePutter = <Res, Req>(path: string) => {
  const putter = async (key: string, { arg }: { arg: Req }): Promise<Res> => {
    const response = await fetch(API_BASE + key, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("token") as string,
      },
      body: JSON.stringify(arg),
    });
    if (!response.ok) throw new Error("Api request failed");
    return response.json() as Promise<Res>;
  };

  return useSWRMutation<Res, unknown, string, Req>(path, putter);
};

export default usePutter;
