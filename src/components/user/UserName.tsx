"use client";
import { type FC, useContext } from "react";
import { FamilyContext } from "@/services/family/provider";

type Props = {
  user_id: number;
};

const UserNameComponent: FC<Props> = (props) => {
  const { user_id } = props;
  const { family } = useContext(FamilyContext);
  if (!family?.Members) return null;
  const user = family?.Members.find((user) => user.Id === user_id);
  if (user) return <>{user.Name}</>;
};

export default UserNameComponent;
