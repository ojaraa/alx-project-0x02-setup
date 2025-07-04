
import Image from "next/image";
import React from "react";
import { CardProps } from "../../interfaces";


const Card = ({title, content, tags} : CardProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="relative  w-full h-[250px]">
        <Image
          src="/assets/images/view.jpg"
          alt="Card Image"
          fill
          className="rounded-lg shadow-lg object-cover"
        />
      </div>

      {/* <div className="flex items-center gap-2 flex-wrap">
        {tags?.map((tag, index) => (
          <div className="rounded-[20px] border px-2 gap-x-3 " key={index}>
            {tag}
          </div>
        ))}
      </div> */}

      <div className="flex justify-between">
        <div className="">
            <p className="font-semibold text-base">{title}</p>
            <p className="text-sm ">{content}</p>
        </div>

        <div className="">
            <p className="">3.5</p>
            
        </div>
      </div>
    </div>
  );
};

export default Card;
 