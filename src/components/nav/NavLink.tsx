"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { NavLinkProps } from "../../../types/types";

export default function NavLink({ label, path, targetSegment }: NavLinkProps) {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Link
      className={`${
        activeSegment === targetSegment
          ? "text-green-500 font-bold"
          : "text-black dark:text-gray-200"
      }`}
      style={{
        transition: "color 0.3s ease",
      }}
      href={path}
    >
      {label}
    </Link>
  );
}
