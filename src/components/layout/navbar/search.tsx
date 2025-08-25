"use client";

import { createURL } from "@/src/lib/utils";
import {
  MagnifyingGlassCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const val = e.target as HTMLFormElement;
    const search = val.search as HTMLInputElement;
    const newParams = new URLSearchParams(searchParams.toString());

    if (search.value) {
      newParams.set("q", search.value);
    } else {
      newParams.delete("q");
    }

    router.push(createURL("/search", newParams));
  }

  return (
    <div className="relative">
      <button
        className={`${isExpanded ? "hidden" : "block"} `}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <MagnifyingGlassCircleIcon className="h-6 w-6" />
      </button>
      <form
        onSubmit={onSubmit}
        className={`absolute left-0 top-0 transition-all duration-300 ease-in-out ${
          isExpanded ? "w-80" : "w-0 overflow-hidden"
        }`}
      >
        <input
          type="text"
          key={searchParams?.get("q")}
          name="search"
          placeholder="Search Your Product..."
          autoComplete="off"
          defaultValue={searchParams?.get("q") || ""}
          className="text-md w-full rounded-lg border bg-white px-4 py-2 text-black 
          placeholder:text-neutral-500 md:text-sm 
           "
          required
        />
        <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
          <button className={`${searchParams ? "block" : "disabled"}`}>
            <MagnifyingGlassCircleIcon className="h-4" />
          </button>
          <button onClick={() => setIsExpanded(!isExpanded)}>
            <XMarkIcon className="h-4" />
          </button>
        </div>
      </form>
    </div>
  );
};

export const SearchInMobileMenu = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [query, setQuery] = useState(searchParams?.get("q") || "");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams.toString());

    if (query) {
      newParams.set("q", query);
    } else {
      newParams.delete("q");
    }

    router.push(createURL("/search", newParams));
  }

  return (
    <form onSubmit={onSubmit} className="relative w-full">
      <input
        type="text"
        name="search"
        placeholder="Search your product..."
        autoComplete="off"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="text-md w-full rounded-lg border bg-white px-4 py-2 pr-10 text-black
        placeholder:text-neutral-500 dark:border-neutral-800 dark:bg-transparent
        dark:text-white dark:placeholder:text-neutral-400"
        required
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mr-3 flex h-full items-center text-neutral-600 dark:text-neutral-300"
      >
        <MagnifyingGlassCircleIcon className="h-5 w-5" />
      </button>
    </form>
  );
};

export function SearchSkeleton() {
  return (
    <form className="w-max-[550px] relative w-full lg:80 xl:w-full">
      <input type="text" />
      <div>
        <MagnifyingGlassCircleIcon className="h-4" />
      </div>
    </form>
  );
}
