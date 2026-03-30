"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Topic from "@/components/Topic";
import Image from "next/image";

const Meals = () => {
  const [search, setSearch] = useState("");
  const [mealData, setMealData] = useState([]);
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      return setMealData(data.meals);
    } catch (err) {
      console.log(err.message);
      return [];
    }
  };

  useEffect(() => {
    fetchMeals();
  }, [search]);

  return (
    <div className="py-15">
      <div className="container">
        {" "}
        <h4 className="mb-3 text-[30px] font-bold text-center">
          Mealdb Foods
        </h4>{" "}
        <Topic title="CSR Meal DB " />
        <div className="flex justify-center mb-3">
          <input
            type="text"
            className="border-2 border-gray-900 text-white p-2 rounded-[5px]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search food..."
            required
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {" "}
          {mealData?.slice(0, 8).map((data) => {
            const { idMeal, strMeal, strMealThumb, strInstructions } = data;
            return (
              <div
                key={idMeal}
                className="bg-gray-900/30 border border-gray-900/70 rounded-2xl p-5"
              >
                <div className="flex flex-col justify-center items-center text-center h-full">
                  <div className="w-full flex justify-center items-center mb-3">
                    <Image
                      className="aspect-4/3 rounded-xl"
                      src={strMealThumb}
                      alt={strMeal}
                      width={700}
                      height={700}
                    />
                  </div>
                  <h4 className="text-[20px] font-bold mb-3">{strMeal}</h4>{" "}
                  <p className=" line-clamp-2 mb-3">{strInstructions}</p>{" "}
                  <Link
                    className="border-2 flex items-center gap-1 text-[14px] border-gray-700 hover:border-transparent hover:bg-teal-600 duration-75 rounded-4xl px-4 py-2"
                    href={`/csr-meals/${idMeal}`}
                  >
                    View More <ExternalLink className="w-4.5 shrink-0" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Meals;
