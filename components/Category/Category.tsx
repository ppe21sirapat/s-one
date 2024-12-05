"use client";
import Image from "next/image";
import { useState } from "react";

const Category: React.FC = () => {
    const categoryImage = [
        "SOne_index_bt-tire.jpg",
        "SOne_index_bt-break.jpg",
        "SOne_index_bt-battery.jpg",
        "SOne_index_bt-chokeup.jpg",
        "SOne_index_bt-oil.jpg",
        "SOne_index_bt-guarantee.jpg",
    ];

    const categoryImageHover = [
        "SOne_index_bt-tire1.jpg",
        "SOne_index_bt-break1.jpg",
        "SOne_index_bt-battery1.jpg",
        "SOne_index_bt-chokeup1.jpg",
        "SOne_index_bt-oil1.jpg",
        "SOne_index_bt-guarantee1.jpg",
    ];

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
            <div className="w-full grid grid-cols-6 gap-3 mx-auto justify-items-center">
                {categoryImage.map((image: string, index: number) => {
                    const currentImage =
                        hoveredIndex === index
                            ? categoryImageHover[index]
                            : image;

                    return (
                        <Image
                            key={index}
                            src={`/images/${currentImage}`}
                            alt={currentImage}
                            width={0}
                            height={0}
                            className="w-full h-[50px] col-span-3 md:w-[90%] md:col-span-2 lg:w-[190px] lg:col-span-1"
                            unoptimized
                            loading="lazy"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Category;
