import React from "react";
import Image from "next/image";

interface StudentReviewCardProps {
  overlayImage: string;
  name: string;
  stars: number;
  bgSize?: number;
  overlaySize?: number;
  bgImage?: string;
}

const StudentReviewCard= ({
  overlayImage,
  name,
  stars,
  bgSize = 301,
  overlaySize = 200,
  bgImage = "/images/studentReviewBg.png",
}: StudentReviewCardProps) => {
  return (
    <div
      className={`max-w-[${bgSize}px] w-full h-[${bgSize}px] rounded-full relative`}
      style={{ maxWidth: `${bgSize}px`, height: `${bgSize}px` }}
    >
      <Image
        src={bgImage}
        width={bgSize}
        height={bgSize}
        alt="background"
        className="rounded-full"
      />

      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{ width: `${overlaySize}px`, height: `${overlaySize}px` }}
      >
        <Image
          src={overlayImage}
          width={overlaySize}
          height={overlaySize}
          alt="overlay"
          className="rounded-full"
        />
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[271px] bg-[#F9FAFF] h-auto review_shadow py-3 flex flex-col gap-2 items-center rounded-lg">
        <p className="tablet:text-2xl text-base font-bold">{name}</p>
        <div className="flex items-center gap-1">
          {Array.from({ length: stars }).map((_, index) => (
            <Image
              key={index}
              src="/images/starIcon.png"
              width={35}
              height={35}
              alt="star"
              className="w-6 h-6"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentReviewCard;
