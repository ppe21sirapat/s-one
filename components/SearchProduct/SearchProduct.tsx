import Image from "next/image";

const SearchProduct: React.FC = () => {
  return (
    <>
      <div className="w-[280px] col-span-1 border border-primary">
        <div className="w-full h-8 bg-primary px-2 text-xl">
          <p className="text-white font-supermarket">ค้นหายาง</p>
        </div>
        <div
          className="w-full h-[260px] p-5"
          style={{
            backgroundImage: "url('../images/SOne_index_bg_searchtype.jpg')",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="float-right">
            <div className="w-[150px] flex flex-col">
              <p className="font-supermarket text-xl text-white">หน้ายาง</p>
              <p className="text-xs text-white">ความกว้าง (มม.)</p>
              <select className="text-xs border border-primary">
                <option>--เลือกหน้ายาง--</option>
              </select>
            </div>
            <div className="w-[150px] flex flex-col">
              <p className="font-supermarket text-xl text-white">ซีรี่ย์</p>
              <p className="text-xs text-white">อัตราส่วนความสูงแก้มยาง (%)</p>
              <select className="text-xs border border-primary">
                <option>--เลือกซีรีย์--</option>
              </select>
            </div>
            <div className="w-[150px] flex flex-col">
              <p className="font-supermarket text-xl text-white">กระทะล้อ</p>
              <p className="text-xs text-white">เส้นผ่าศูนย์กลาง (นิ้ว)</p>
              <select className="text-xs border border-primary">
                <option>--เลือกกระทะล้อ--</option>
              </select>
            </div>
            <Image
              src="/images/SOne_index_search.png"
              alt="SOne_index_search.png"
              width={100}
              height={20}
              unoptimized
              className="mx-auto my-3 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchProduct;
