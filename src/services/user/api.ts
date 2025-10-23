import usePoster from "@/hooks/usePoster";
import usePutter from "@/hooks/usePutter";
import {
  ApiUserResponse,
  ApiMailRequest,
  ApiMailResponse,
  ApiUserRequest,
  ApiLoginRequest,
  ApiInviteRequest,
  ApiUserDataResponse,
} from "./types";
import useGetter from "@/hooks/useGetter";
import { setCookie } from "@/utils/useCookie";

const setUserCookie = (
  token: string | undefined,
  user: number | undefined,
  family: number | undefined
) => {
  if (token) setCookie("token", token);
  if (user) setCookie("user_id", String(user));
  if (family) setCookie("family_id", String(family));
};

export const LoginUser = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiUserResponse,
    ApiLoginRequest
  >("/login");
  const token = data?.Data.Token;
  const user = data?.Data.Info;
  setUserCookie(token, user?.Id, user?.Family);
  return {
    token,
    user,
    error,
    isMutating,
    trigger,
  };
};

export const CreateUser = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiUserResponse,
    ApiUserRequest
  >("/user");
  const token = data?.Data.Token;
  const user = data?.Data.Info;
  setUserCookie(token, user?.Id, user?.Family);
  return {
    token,
    user,
    error,
    isMutating,
    trigger,
  };
};

export const UpdateUser = (id: number) => {
  const { data, error, isMutating, trigger } = usePutter<
    ApiUserResponse,
    ApiUserRequest
  >(`/user/${id}`);
  const token = data?.Data.Token;
  const user = data?.Data.Info;
  setUserCookie(token, user?.Id, user?.Family);
  return {
    token,
    user,
    error,
    isMutating,
    trigger,
  };
};

export const GetUser = (id: number) => {
  const { data, error, isLoading } = useGetter<ApiUserDataResponse>(
    `/user/${id}`
  );
  const user = data?.Data;
  return {
    user,
    error,
    isLoading,
  };
};

export const SendMail = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiMailResponse,
    ApiMailRequest
  >("/mail");
  const message = data?.Data;
  return {
    message,
    error,
    isMutating,
    trigger,
  };
};

export const SendInviteMail = () => {
  const { data, error, isMutating, trigger } = usePoster<
    ApiMailResponse,
    ApiInviteRequest
  >("/mail");
  const message = data?.Data;
  return {
    message,
    error,
    isMutating,
    trigger,
  };
};
