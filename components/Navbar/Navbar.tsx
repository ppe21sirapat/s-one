import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <>
            <div className="flex justify-between">
                <Image
                    src="/images/SOne_index_logo.png"
                    alt="SOne_index_logo.png"
                    width={300}
                    height={50}
                    loading="lazy"
                    unoptimized
                />
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
                    <div className="flex gap-x-1 text-sm">
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
            <div className="flex items-center justify-between w-full h-8 bg-black text-sm rounded px-2">
                <div className="flex gap-x-10">
                    <Link href={""} className="text-white hover:text-primary">
                        Product & Services
                    </Link>
                    <Link href={""} className="text-white hover:text-primary">
                        Promotions
                    </Link>
                    <Link href={""} className="text-white hover:text-primary">
                        News & Events
                    </Link>
                    <Link href={""} className="text-white hover:text-primary">
                        Safety Tips
                    </Link>
                    <Link href={""} className="text-white hover:text-primary">
                        FAQS
                    </Link>
                    <Link href={""} className="text-white hover:text-primary">
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
        </>
    );
};

export default Navbar;
