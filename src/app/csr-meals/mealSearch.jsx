"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const MealSearch = () => {
  const [search, setSearch] = useState("");
  const Router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    if (!search) return;
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQueryParam}`;
    Router.push(url);
  }, [search]);
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="search food"
      required
    />
  );
};
export default MealSearch;
