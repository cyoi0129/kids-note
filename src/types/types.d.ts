declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

type ProviderPropsType = {
  children: ReactNode;
  id?: number;
};

type ApiMethodType = "GET" | "POST" | "PUT" | "DELETE";

type ApiRequestType = {
  path: string | RegExp;
  method: ApiMethodType;
  response: {
    Status: number;
    Data: unknown;
  };
};

type ApiResponseType<T> = {
  Status: number;
  Data: T;
};

type MockResopnseType = {
  [key: string]: ApiRequestType;
};

type ApiRequestParamsType = {
  [key: string]: string;
};