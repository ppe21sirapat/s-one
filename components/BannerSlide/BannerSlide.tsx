"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSlide: React.FC = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <>
            <div className="flex w-full col-span-3 h-[295px] bg-black md:col-span-2">
                <Swiper
                    spaceBetween={10}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Thumbs]}
                    className="w-full"
                    autoplay={true}
                >
                    <SwiperSlide>
                        <Image
                            src="/images/SOne_index_banner.jpg"
                            width={0}
                            height={0}
                            alt="SOne_index_banner.jpg"
                            unoptimized
                            loading="lazy"
                            className="w-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/images/SOne_index_banner.jpg"
                            width={0}
                            height={0}
                            alt="SOne_index_banner.jpg"
                            unoptimized
                            loading="lazy"
                            className="w-full"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image
                            src="/images/SOne_index_banner.jpg"
                            width={0}
                            height={0}
                            alt="SOne_index_banner.jpg"
                            unoptimized
                            loading="lazy"
                            className="w-full"
                        />
                    </SwiperSlide>
                </Swiper>
                <div className="relative p-6">
                    <svg
                        className="absolute top-0 left-[45%] w-6 h-6 text-white cursor-pointer"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m5 15 7-7 7 7"
                        />
                    </svg>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        direction={"vertical"}
                        spaceBetween={10}
                        slidesPerView={3}
                        modules={[Thumbs]}
                        autoplay={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <Image
                                src="/images/SOne_index_banner.jpg"
                                width={0}
                                height={0}
                                alt="SOne_index_banner.jpg"
                                unoptimized
                                loading="lazy"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/images/SOne_index_banner.jpg"
                                width={0}
                                height={0}
                                alt="SOne_index_banner.jpg"
                                unoptimized
                                loading="lazy"
                                className="w-full"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image
                                src="/images/SOne_index_banner.jpg"
                                width={0}
                                height={0}
                                alt="SOne_index_banner.jpg"
                                unoptimized
                                loading="lazy"
                                className="w-full"
                            />
                        </SwiperSlide>
                    </Swiper>
                    <svg
                        className="absolute bottom-0 left-[45%] w-6 h-6 text-white cursor-pointer"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 9-7 7-7-7"
                        />
                    </svg>
                </div>
            </div>
        </>
    );
};

export default BannerSlide;
