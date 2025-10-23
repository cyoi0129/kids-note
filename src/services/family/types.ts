export type FamilyMembers = { Id: number; Name: string };

export type Family = {
  Id?: number;
  Name: string;
  Members?: FamilyMembers[];
};

export type ApiFamilyRequest = Family;

export type ApiFamilyResponse = ApiResponseType<Family>;
