import Image from "next/image";

const RegisterNews: React.FC = () => {
  return (
    <>
      <div className="w-full col-span-3 order-3 flex flex-col gap-y-3 md:col-span-1 lg:order-3">
        <div
          className="relative flex h-[120px]"
          //   style={{
          //     backgroundImage: "url('../images/SOne_index_tips1.png')",
          //     backgroundRepeat: "no-repeat",
          //   }}
        >
          <Image
            src="/images/SOne_index_tips1.png"
            alt="SOne_index_tips1.png"
            width={140}
            height={120}
            unoptimized
            className="absoulte left-0 z-20"
          />

          <div className="flex flex-col items-center w-full h-[112.5px] bg-[#242424] px-4 text-center border-t border-r border-b border-primary md:w-[140px]">
            <p className="text-primary font-supermarket text-xl">Safety Tips</p>
            <div className="w-full">
              <Image
                src="images/SOne_index_pic66.png"
                alt="SOne_index_pic66.png"
                width={0}
                height={0}
                unoptimized
                className="w-[13px] h-[9px]"
              />
            </div>
            <p className="text-white text-xs py-1">
              ควรเติมน้ำมันตอนเช้า ขณะที่อุณหภูมิบนพื้น ดินยังเย็นอยู่
            </p>
            <div className="w-full">
              <Image
                src="images/SOne_index_pic99.png"
                alt="SOne_index_pic66.png"
                width={0}
                height={0}
                unoptimized
                className="w-[13px] h-[9px] float-right"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-xl font-supermarket">สมัครรับข่าวสาร</p>
          <div className="flex">
            <input
              type="text"
              placeholder="กรุณากรอกอีเมล"
              className="w-[140px] h-[23px] text-sm border border-primary px-1"
            />
            <Image
              src="/images/SOne_index_btgo.jpg"
              alt="SOne_index_btgo.jpg"
              width={0}
              height={0}
              unoptimized
              className="w-[23px] h-[23px]"
            />
          </div>
        </div>
        <div className="border-dashed border-t-2 border-primary pt-3">
          <Image
            src="/images/SOne_index_call.png"
            alt="SOne_index_call.png"
            width={277}
            height={33}
            unoptimized
          />
        </div>
      </div>
    </>
  );
};

export default RegisterNews;
