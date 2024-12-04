import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <>
      <div className="flex items-center">
        <Image
          src="/images/SOne_index_logo.png"
          alt="SOne_index_logo.png"
          width={130}
          height={35}
          loading="lazy"
          unoptimized
        />
        <div className="w-full h-[35px] bg-[#242424] rounded px-2">
          <p className="text-white text-[9px] leading-[35px] item">
            Copyright © 2014
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
