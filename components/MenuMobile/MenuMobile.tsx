"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const MenuMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative md:hidden">
        <button
          onClick={() => toggleSidebar()}
          className="p-3 bg-primary text-white rounded-md"
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        <div
          className={`fixed top-0 left-0 w-64 h-full bg-[#242424] text-white transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } z-50`}
        >
          <div className="flex flex-col gap-y-4 p-4">
            <div
              className="w-full text-right cursor-pointer"
              onClick={() => toggleSidebar()}
            >
              X
            </div>
            <Link
              href={"/"}
              className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              <Image
                src="/images/SOne_index_menu02.png"
                alt="SOne_index_menu02.png"
                width={20}
                height={20}
              />
              Product & Services
            </Link>
            <Link
              href={"/promotion"}
              className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              <Image
                src="/images/SOne_index_menu01.png"
                alt="SOne_index_menu01.png"
                width={20}
                height={20}
              />
              Promotions
            </Link>
            <Link
              href={"/news"}
              className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              <Image
                src="/images/SOne_index_menu01.png"
                alt="SOne_index_menu01.png"
                width={20}
                height={20}
                unoptimized
              />
              News & Events
            </Link>
            <Link
              href={"/tips"}
              className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              <Image
                src="/images/SOne_index_menu01.png"
                alt="SOne_index_menu01.png"
                width={20}
                height={20}
                unoptimized
              />
              Safety Tips
            </Link>
            <Link
              href={"/faqs"}
              className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              <Image
                src="/images/SOne_index_menu01.png"
                alt="SOne_index_menu01.png"
                width={20}
                height={20}
                unoptimized
              />
              FAQS
            </Link>
            <Link
              href={"/location"}
              className="flex items-center gap-x-1 text-xs text-white hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              <Image
                src="/images/SOne_index_menu01.png"
                alt="SOne_index_menu01.png"
                width={20}
                height={20}
                unoptimized
              />
              Location
            </Link>
            <Link
              href={""}
              className="text-white text-xs hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              About S-ONE
            </Link>
            <Link
              href={""}
              className="text-white text-xs hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              Job Opportunity
            </Link>
            <Link
              href={""}
              className="text-white text-xs hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              Contact Us
            </Link>
            <Link
              href={""}
              className="text-white text-xs hover:text-primary"
              onClick={() => toggleSidebar()}
            >
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMobile;
