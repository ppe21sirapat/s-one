"use client";
import Image from "next/image";

const Category: React.FC = () => {
  const categoryImage = [
    "SOne_index_bt-tire.jpg",
    "SOne_index_bt-break.jpg",
    "SOne_index_bt-battery.jpg",
    "SOne_index_bt-chokeup.jpg",
    "SOne_index_bt-oil.jpg",
    "SOne_index_bt-guarantee.jpg",
  ];
  return (
    <>
      <div className="w-full grid grid-cols-6 mx-auto justify-items-center">
        {categoryImage.map((categoryImage: string) => (
          <Image
            src={`/images/${categoryImage}`}
            alt="SOne_index_bt-tire.jpg"
            width={0}
            height={0}
            className="w-[190px] h-[50px]"
            unoptimized
            loading="lazy"
          />
        ))}
      </div>
    </>
  );
};

export default Category;
