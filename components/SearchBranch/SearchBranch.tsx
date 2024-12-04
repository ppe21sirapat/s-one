import Image from "next/image";

const SearchBranch: React.FC = () => {
  return (
    <>
      <div className="w-[280px] col-span-1 bg-[#303030] border border-primary">
        <div className="w-full h-8 bg-primary px-2 text-xl">
          <p className="text-white font-supermarket">
            ค้นหาศูนย์บริการใกล้บ้านคุณ
          </p>
        </div>
        <div className="w-full p-5">
          <div className="float-right">
            <div className="flex justify-end">
              <p className="font-supermarket text-xl text-white">จังหวัด</p>
              <select className="w-[170px] text-xs">
                <option>--เลือกจังหวัด--</option>
              </select>
            </div>
            <div className="flex justify-end">
              <p className="font-supermarket text-xl text-white">เขต/อำเภอ</p>
              <select className="w-[170px] text-xs">
                <option>--เลือกเขต/อำเภอ--</option>
              </select>
            </div>
            <div className="flex justify-end">
              <p className="font-supermarket text-xl text-white">ถนน</p>
              <select className="w-[170px] text-xs">
                <option>--เลือกถนน--</option>
              </select>
            </div>
            <p className="text-xs text-primary">
              หมายเหตุ : กรุณาเลือกอย่างใดอย่างหนึ่ง
            </p>
            <Image
              src="/images/SOne_index_search.png"
              alt="SOne_index_search.png"
              width={100}
              height={20}
              unoptimized
              className="mx-auto my-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBranch;
