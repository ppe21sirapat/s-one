import BannerSlide from "@/components/BannerSlide/BannerSlide";
import Category from "@/components/Category/Category";
import Navbar from "@/components/Navbar/Navbar";
import News from "@/components/News/News";
import SearchBranch from "@/components/SearchBranch/SearchBranch";
import SearchProduct from "@/components/SearchProduct/SearchProduct";

export default function Home() {
  return (
    <div className="max-w-[1280px] h-dvh p-2 m-auto">
      <Navbar />
      <div className="grid grid-cols-[280px_1fr_1fr] gap-x-4 py-3">
        <SearchProduct />
        <BannerSlide />
      </div>
      <Category />
      <div className="grid grid-cols-[280px_1fr_280px] gap-x-4 py-3">
        <SearchBranch />
        <News />
      </div>
    </div>
  );
}
