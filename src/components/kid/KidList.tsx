"use client";
import { type FC, useContext } from "react";
import { KidListContext } from "@/services/kid/provider";
import Link from "next/link";

const KidListComponent: FC = () => {
  const { kids } = useContext(KidListContext);

  return (
    <ul>
      {kids?.map((kid) => (
        <li key={kid.Id}>
          <Link href={`/kid/${kid.Id}`}>{kid.Name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default KidListComponent;
