export type School = {
  Id: number;
  Type: string;
  Name: string;
  Prefecture: string;
  City: string;
};

export type ApiSchoolsResponse = ApiResponseType<School[]>;
export type ApiSchoolResponse = ApiResponseType<School>;
