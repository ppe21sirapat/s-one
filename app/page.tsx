import Navbar from "@/components/Navbar/Navbar";
import SearchBox from "@/components/SearchBox/SearchBox";

export default function Home() {
    return (
        <div className="max-w-[1280px] h-dvh p-2 m-auto">
            <Navbar />
            <div className="flex py-3">
                <SearchBox />
            </div>
        </div>
    );
}
