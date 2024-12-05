import Image from "next/image";
import Link from "next/link";
import MenuMobile from "../MenuMobile/MenuMobile";

const Navbar: React.FC = () => {
    return (
        <>
            <nav>
                <div className="flex justify-between">
                    <Link href={"/"}>
                        <Image
                            src="/images/SOne_index_logo.png"
                            alt="SOne_index_logo.png"
                            width={300}
                            height={50}
                            loading="lazy"
                            unoptimized
                        />
                    </Link>
                    <div className="flex flex-col items-end gap-y-2">
                        <div className="flex gap-x-1">
                            <Image
                                src="/images/SOne_index_iconthai.jpg"
                                alt="SOne_index_iconthai.jpg"
                                width={25}
                                height={25}
                                unoptimized
                            />
                            <Image
                                src="/images/SOne_index_iconeng2.jpg"
                                alt="SOne_index_iconeng2.jpg"
                                width={25}
                                height={25}
                                unoptimized
                            />
                        </div>
                        <div className="flex">
                            <input
                                type="text"
                                className="w-[225px] border border-primary px-1"
                                placeholder="Search..."
                            />
                            <Image
                                src="/images/SOne_index_btsearch.jpg"
                                alt="SOne_index_btsearch.jpg"
                                width={25}
                                height={25}
                                unoptimized
                                className="cursor-pointer"
                            />
                        </div>
                        <div className="hidden gap-x-1 text-sm flex-wrap md:flex">
                            <Link
                                href={""}
                                className="text-black hover:text-primary"
                            >
                                About S-ONE
                            </Link>
                            <p>|</p>
                            <Link
                                href={""}
                                className="text-black hover:text-primary"
                            >
                                Job Opportunity
                            </Link>
                            <p>|</p>
                            <Link
                                href={""}
                                className="text-black hover:text-primary"
                            >
                                Contact Us
                            </Link>
                            <p>|</p>
                            <Link
                                href={""}
                                className="text-black hover:text-primary"
                            >
                                Site Map
                            </Link>
                        </div>
                    </div>
                </div>
                <MenuMobile />
                <div className="hidden items-center justify-between w-full h-8 bg-black text-sm rounded px-2 md:flex">
                    <div className="flex gap-x-8">
                        <Link
                            href={"/"}
                            className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
                        >
                            <Image
                                src="/images/SOne_index_menu02.png"
                                alt="SOne_index_menu02.png"
                                width={20}
                                height={20}
                            />
                            Product & Services
                        </Link>
                        <Link
                            href={"/promotion"}
                            className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
                        >
                            <Image
                                src="/images/SOne_index_menu01.png"
                                alt="SOne_index_menu01.png"
                                width={20}
                                height={20}
                            />
                            Promotions
                        </Link>
                        <Link
                            href={"/news"}
                            className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
                        >
                            <Image
                                src="/images/SOne_index_menu01.png"
                                alt="SOne_index_menu01.png"
                                width={20}
                                height={20}
                                unoptimized
                            />
                            News & Events
                        </Link>
                        <Link
                            href={"/tips"}
                            className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
                        >
                            <Image
                                src="/images/SOne_index_menu01.png"
                                alt="SOne_index_menu01.png"
                                width={20}
                                height={20}
                                unoptimized
                            />
                            Safety Tips
                        </Link>
                        <Link
                            href={"/faqs"}
                            className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
                        >
                            <Image
                                src="/images/SOne_index_menu01.png"
                                alt="SOne_index_menu01.png"
                                width={20}
                                height={20}
                                unoptimized
                            />
                            FAQS
                        </Link>
                        <Link
                            href={"/location"}
                            className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
                        >
                            <Image
                                src="/images/SOne_index_menu01.png"
                                alt="SOne_index_menu01.png"
                                width={20}
                                height={20}
                                unoptimized
                            />
                            Location
                        </Link>
                    </div>
                    <div className="flex gap-x-2">
                        <Image
                            src="/images/SOne_index_btfacebook.png"
                            alt="SOne_index_btfacebook.png"
                            width={20}
                            height={20}
                            unoptimized
                        />
                        <Image
                            src="/images/SOne_index_bttwitter.png"
                            alt="SOne_index_btfacebook.png"
                            width={20}
                            height={20}
                            unoptimized
                        />
                        <Image
                            src="/images/SOne_index_btyoutube.png"
                            alt="SOne_index_btyoutube"
                            width={20}
                            height={20}
                            unoptimized
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
