import React from "react";
import { Technologies } from "../../../public/Data";
import Link from "next/link";
import { creteSlug } from "@/utility/createSlug";
import { ExternalLink } from "lucide-react";
import Topic from "@/components/Topic";

const Technology = () => {
  return (
    <div className="py-15">
      <div className="container">
        <h4 className="mb-3 text-[30px] font-bold text-center">
          Technologies I Use
        </h4>
        <Topic title="Dynamic Routes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {Technologies?.map((data) => {
            const { id, image, title, description } = data;
            return (
              <div
                key={id}
                className="bg-gray-900/30 border border-gray-900/70 rounded-2xl p-5"
              >
                <div className="flex flex-col justify-center items-center text-center h-full">
                  <div className="w-full flex justify-center items-center mb-3">
                    <img className="w-15" src={image} alt={title} />
                  </div>
                  <h4 className="text-[20px] font-bold mb-3">{title}</h4>
                  <p className=" line-clamp-2 mb-3">{description}</p>
                  <Link
                    className="border-2 flex items-center gap-1 text-[14px] border-gray-700 hover:border-transparent hover:bg-teal-600 duration-75 rounded-4xl px-4 py-2"
                    href={`/technology/${creteSlug(title)}`}
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

export default Technology;
