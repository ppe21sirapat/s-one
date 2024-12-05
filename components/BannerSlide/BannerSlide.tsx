"use client";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
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
                <Swiper
                    onSwiper={setThumbsSwiper}
                    direction={"vertical"}
                    navigation={true}
                    spaceBetween={10}
                    slidesPerView={3}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    autoplay={true}
                    //   className="mySwiper"
                >
                    <SwiperSlide>
                        <Image
                            src="/images/SOne_index_banner.jpg"
                            width={0}
                            height={0}
                            alt="SOne_index_banner.jpg"
                            unoptimized
                            loading="lazy"
                            className="w-full p-3 border border-white"
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
            </div>
        </>
    );
};

export default BannerSlide;
