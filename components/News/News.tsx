import Image from "next/image";

interface INews {
  id: number;
  image: string;
  content: string;
  date: string;
}

const News: React.FC = () => {
  const news = [
    {
      id: 1,
      image: `SOne_index_pic3.jpg`,
      content: `ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม`,
      date: `13 DEC 2024`,
    },
    {
      id: 2,
      image: `SOne_index_pic3.jpg`,
      content: `ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม`,
      date: `13 DEC 2024`,
    },
    {
      id: 3,
      image: `SOne_index_pic3.jpg`,
      content: `ข่าวใหม่!! ข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรมข่าวและกิจกรรม`,
      date: `13 DEC 2024`,
    },
  ];

  return (
    <>
      <div className="w-full border-t border-r border-b-4 border-l border-primary">
        <div className="flex justify-between px-2 border-b border-primary">
          <p className="font-supermarket text-xl">News & Events</p>
          <div className="flex items-center gap-x-1">
            <Image
              src="/images/SOne_index_bullet1.png"
              alt="SOne_index_bullet1.png"
              width={0}
              height={0}
              className="w-[10px] h-[10px]"
              unoptimized
            />
            <Image
              src="/images/SOne_index_bullet2.png"
              alt="SOne_index_bullet2.png"
              width={0}
              height={0}
              className="w-[10px] h-[10px]"
              unoptimized
            />
            <Image
              src="/images/SOne_index_bullet2.png"
              alt="SOne_index_bullet2.png"
              width={0}
              height={0}
              className="w-[10px] h-[10px]"
              unoptimized
            />
          </div>
        </div>
        <div className="flex justify-between p-4 gap-x-3">
          {news.map((news: INews) => (
            <div key={news.id} className="flex flex-col gap-y-2 group">
              <div className="relative">
                <Image
                  src={`/images/${news.image}`}
                  alt={`${news.image}`}
                  width={175}
                  height={90}
                  unoptimized
                  loading="lazy"
                  className="w-full group-hover:border-primary border-b-4 transition-all duration-300 ease-in-out"
                />
                <div className="absolute top-2 left-2 w-10 text-white text-[9px] bg-black opacity-85 text-center px-2 py-1">
                  {news.date}
                </div>
              </div>

              <p className="text-sm line-clamp-3 cursor-pointer group-hover:underline transition-all duration-300 ease-in-out">
                {news.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
