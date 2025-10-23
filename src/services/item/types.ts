export type Item = {
  Id?: number;
  Name: string;
  Detail: string;
  Type: string;
  Image: string;
  Kid: number;
  Family: number;
};

export type ApiItemRequest = Item;

export type ApiItemResponse = ApiResponseType<Item>;

export type ApiItemListResponse = ApiResponseType<Item[]>;
