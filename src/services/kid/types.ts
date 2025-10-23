export type Kid = {
  Id?: number;
  Name: string;
  Family: number;
  Birth: string;
  Gender: "MALE" | "FEMALE";
  School: number;
};

export type ApiKidRequest = Kid;

export type ApiKidResponse = ApiResponseType<Kid>;

export type ApiKidListResponse = ApiResponseType<Kid[]>;
