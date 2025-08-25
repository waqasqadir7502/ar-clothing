"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { ListItem, type PathFilterItem } from ".";
import Link from "next/link";
import { createURL } from "@/src/lib/utils";
import clsx from "clsx";
import type { SortFilterItem } from "@/src/lib/shopify/types";

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const active = pathName === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? "p" : Link;

  newParams.delete("q");

  return (
    <li key={item.title} className="mt-2 flex text-black">
      <DynamicTag
        href={createURL(item.path, newParams)}
        className={clsx("w-full text-sm underline-offset-4 hover:underline", {
          "underline underline-offset-4": active,
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const active = pathName === item.slug;
  const q = searchParams.get("q");

  const href = createURL(
    pathName,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug }),
    })
  );
  const DynamicTag = active ? "p" : Link;

  return (
    <li className="mt-2 flex text-sm text-black " key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx("w-full hover:underline hover:underline-offset-4", {
          "underline underline-offset-4": active,
        })}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

export function FilterItem({ item }: { item: ListItem }) {
  return "path" in item ? (
    <PathFilterItem item={item} />
  ) : (
    <SortFilterItem item={item} />
  );
}
