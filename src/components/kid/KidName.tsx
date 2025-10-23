"use client";
import { type FC, useContext } from "react";
import { KidContext } from "@/services/kid/provider";

const KidNameComponent: FC = () => {
  const { kid } = useContext(KidContext);
  if (kid) return <>{kid.Name}</>;
};

export default KidNameComponent;
