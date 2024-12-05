import Image from "next/image";

const SearchBranch: React.FC = () => {
    return (
        <>
            <div className=" w-full h-auto col-span-3 order-2 bg-[#242424] border border-primary md:col-span-2 lg:col-span-1 lg:order-1">
                <div className="w-full h-8 bg-primary px-2 text-xl">
                    <p className="text-white font-supermarket">
                        ค้นหาศูนย์บริการใกล้บ้านคุณ
                    </p>
                </div>
                <div className="w-full flex flex-col justify-center gap-y-1 p-5">
                    <div className="flex justify-end gap-x-1">
                        <p className="font-supermarket text-xl text-white">
                            จังหวัด
                        </p>
                        <select className="w-[150px] text-xs border border-primary">
                            <option>--เลือกจังหวัด--</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-x-1">
                        <p className="font-supermarket text-xl text-white">
                            เขต/อำเภอ
                        </p>
                        <select className="w-[150px] text-xs border border-primary">
                            <option>--เลือกเขต/อำเภอ--</option>
                        </select>
                    </div>
                    <div className="flex justify-end gap-x-1">
                        <p className="font-supermarket text-xl text-white">
                            ถนน
                        </p>
                        <select className="w-[150px] text-xs border border-primary">
                            <option>--เลือกถนน--</option>
                        </select>
                    </div>
                    <p className="w-full text-xs text-primary text-center p-2">
                        หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
                    </p>
                    <div className="w-full flex justify-end">
                        <Image
                            src="/images/SOne_index_search.png"
                            alt="SOne_index_search.png"
                            width={100}
                            height={20}
                            unoptimized
                            className="cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBranch;
