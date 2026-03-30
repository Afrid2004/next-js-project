import React from "react";
import { Technologies } from "../../../../public/Data";
import { creteSlug } from "@/utility/createSlug";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Calendar,
  ExternalLink,
  GraduationCap,
  Info,
} from "lucide-react";

const getDynamicData = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Afrid2004/custom-api/refs/heads/main/data.json",
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getDynamicData();
  const singleData = product.find((data) => data.id == id);
  return {
    title: singleData.title,
    description: singleData.description,
  };
}

const SSRTechpage = async ({ params }) => {
  const { id } = await params;
  const fetchData = await getDynamicData();
  const singleData = fetchData.find((data) => data.id == id);

  const {
    title,
    year,
    creator,
    designation,
    description,
    birthPlace,
    education,
    creatorImage,
    creatorStory,
    creatorLink,
    details,
    image,
  } = singleData;

  return (
    <div className="container pt-20 pb-10 lg:pt-30 lg:pb-20">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-gray-900/60 p-5 rounded-3xl h-full">
            <h1 className="mb-5 pb-3 text-[40px] font-bold border-b-2 border-b-teal-500">
              {title}
            </h1>
            <p className="mb-2 leading-8 text-[20px]">{description}</p>
            <p className="mb-5 leading-8 text-[20px]">{details}</p>
            <div>
              Invented in: Year <span className="text-teal-500">{year}</span>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-gray-900/60 p-5 rounded-3xl h-full flex justify-center items-center">
            <div>
              <img src={image} className="w-60" alt={title} />
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 order-4 lg:order-3">
          <div className="bg-gray-900/60 p-5 rounded-3xl h-full">
            <div className="border-b-2 border-gray-700 mb-5 pb-4">
              <a href={creatorLink} target="_blank">
                <h1 className=" text-[40px] font-bold">{creator}</h1>
              </a>
              <p className="font-medium text-[17px] flex gap-1 items-center">
                <BadgeCheck className="w-4.5 shrink-0" /> {designation}
              </p>
            </div>
            <div>
              <div className="mb-5 flex gap-2">
                <Info className="w-5 mt-1 shrink-0" />
                <p className="text-[20px] ">{creatorStory}</p>
              </div>
              <div className="mb-5 flex gap-2">
                <Calendar className="w-5 mt-0.5 shrink-0" />
                <p className="text-[20px] ">{birthPlace}</p>
              </div>
              <div className="mb-5 flex gap-2">
                <GraduationCap className="w-5 mt-0.5 shrink-0" />
                <p className="text-[20px] ">{education}</p>
              </div>
            </div>
            <a
              href={creatorLink}
              className="flex gap-2 items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 duration-75 w-fit rounded-4xl"
              target="_blank"
            >
              VIEW MORE
              <ExternalLink className="w-5 shrink-0" />
            </a>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5 order-3 lg:order-4">
          <div className="bg-gray-900/60 p-5 rounded-3xl">
            <div>
              <a href={creatorLink} target="_blank">
                <img
                  className="rounded-2xl aspect-4/3 object-top object-cover mb-3"
                  src={creatorImage}
                  alt={creator}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SSRTechpage;
