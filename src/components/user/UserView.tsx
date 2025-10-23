"use client";
import { type FC, useContext } from "react";
import { UserContext } from "@/services/user/provider";

const UserViewComponent: FC = () => {
  const { user } = useContext(UserContext);
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user?.Name}</dd>
      <dt>メールアドレス</dt>
      <dd>{user?.Email}</dd>
      <dt>性別</dt>
      <dd>{user?.Gender === "FEMALE" ? "女性" : "男性"}</dd>
    </dl>
  );
};

export default UserViewComponent;
