export const STATUS_LIST = [
  { value: "TODO", label: "未着手" },
  { value: "DOING", label: "進行中" },
  { value: "DONE", label: "完了" },
];

export const NO_IMAGE_URL = "/images/no_image.jpg";

export const API_BASE =
  process.env.NODE_ENV === "development"
    ? "/api"
    : process.env.NEXT_PUBLIC_API_BASE;
