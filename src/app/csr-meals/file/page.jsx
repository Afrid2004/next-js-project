import { CookingPot, Flag, Info, Play, Salad, Tags } from "lucide-react";
import React from "react";
const getData = async (search) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${search}`,
  );
  const data = await res.json();
  return data.meals;
};
const Page = async ({ params }) => {
  const { id } = await params;
  const singleData = await getData(id);
  const meal = singleData?.[0];
  if (!meal) {
    return <h1>No meal found</h1>;
  }
  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strCategory,
    strArea,
    strTags,
    strYoutube,
  } = meal;
  return (
    <div>
      {" "}
      <div className="container pt-20 pb-10 lg:pt-30 lg:pb-20">
        {" "}
        <h4 className="mb-10 text-[30px] font-bold text-center">
          About Food
        </h4>{" "}
        <div className="grid grid-cols-12 gap-5 items-center">
          {" "}
          <div className="col-span-12 lg:col-span-7 bg-gray-900 rounded-2xl p-5 lg:p-10">
            {" "}
            <div className="flex flex-col h-full gap-3">
              {" "}
              <h4 className="text-[30px] pb-2 mb-2 border-b-2 border-teal-600 flex items-center gap-2">
                {" "}
                <Salad /> {strMeal}{" "}
              </h4>{" "}
              <div className="flex gap-2">
                {" "}
                <Info className="w-5 mt-1 shrink-0" />{" "}
                <p className="leading-7 line-clamp-4">{strInstructions}</p>{" "}
              </div>{" "}
              <div className="flex gap-2 items-center">
                {" "}
                <CookingPot className="w-5 shrink-0" />{" "}
                <p className="leading-none">{strCategory}</p>{" "}
              </div>{" "}
              <div className="flex gap-2 items-center">
                {" "}
                <Flag className="w-5 shrink-0" />{" "}
                <p className="leading-none">{strArea}</p>{" "}
              </div>{" "}
              <div className="flex gap-2 items-center mb-5">
                {" "}
                <Tags className="w-5 shrink-0" />{" "}
                <p className="leading-none">{strTags ? strTags : "N/A"}</p>{" "}
              </div>{" "}
              <a
                href={strYoutube}
                target="_blank"
                className="flex items-center gap-2 bg-teal-600 px-4 py-2 w-fit rounded-4xl hover:bg-teal-700"
              >
                {" "}
                <Play className="w-4 shrink-0" /> Recipe{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-span-12 lg:col-span-5 bg-gray-900 p-2 lg:p-5 rounded-3xl">
            {" "}
            <div>
              {" "}
              <img src={strMealThumb} className="rounded-2xl" alt="next" />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Page;
