import type { TaskType } from "@/services/task/types";
import type { Item } from "@/services/item/types";
import type { FamilyMembers } from "@/services/family/types";
import type { Kid } from "@/services/kid/types";
import type { School } from "@/services/school/types";

export const createFormList = (
  list: TaskType[] | Item[] | FamilyMembers[] | Kid[] | School[]
): { value: number; label: string }[] => {
  return list
    .map((item) => ({
      value: item.Id,
      label: item.Name,
    }))
    .filter((item) => item.value !== undefined) as {
    value: number;
    label: string;
  }[];
};
