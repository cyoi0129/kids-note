export type ApiUserResponseData = {
  Token: string;
  Info: {
    Id: number;
    Name: string;
    Email: string;
    Gender: "MALE" | "FEMALE";
    Family: number;
  };
};

export type User = {
  Id?: number;
  Name: string;
  Email: string;
  Password: string;
  Gender: "MALE" | "FEMALE";
  Family?: number;
};

export type ApiUserRequest = User;

export type ApiUserResponse = ApiResponseType<ApiUserResponseData>;

export type ApiUserDataResponse = ApiResponseType<User>;

export type ApiMailRequest = {
  Email: string;
};

export type ApiInviteRequest = {
  Email: string;
  Family: number;
};

export type ApiLoginRequest = {
  Email: string;
  Password: string;
};

export type ApiMailResponse = ApiResponseType<string>;
