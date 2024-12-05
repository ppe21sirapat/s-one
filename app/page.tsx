import BannerSlide from "@/components/BannerSlide/BannerSlide";
import Category from "@/components/Category/Category";
import News from "@/components/News/News";
import RegisterNews from "@/components/RegisterNews/RegisterNew";
import SearchBranch from "@/components/SearchBranch/SearchBranch";
import SearchProduct from "@/components/SearchProduct/SearchProduct";

export default function Home() {
    return (
        <div>
            <div className="grid grid-cols-[280px_1fr_1fr] gap-x-4 py-3">
                <SearchProduct />
                <BannerSlide />
            </div>
            <Category />
            <div className="grid grid-cols-3 gap-4 py-3  md:grid-cols-[280px_1fr_280px]">
                <SearchBranch />
                <News />
                <RegisterNews />
            </div>
        </div>
    );
}
