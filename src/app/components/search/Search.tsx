"use client"
import { useRouter, useSearchParams } from "next/navigation";
import { IoSearch } from "react-icons/io5";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Search() {
    const router = useRouter()
    const params = useSearchParams();
    const keywordDefault = params.get("keyword") || "";
    console.log(keywordDefault);
    const handleSearch = (event :any)=> {
      event.preventDefault();
      const keyword = event.target.keyword.value;
      if(keyword){
        router.push(`/search?keyword=${keyword}`)
      }
    }
    return (
      <>
        <form 
            onSubmit={handleSearch}
            className="bg-[#212121] rounded-[50px] mt-[20px] sticky top-[20px] left-[20px] z-[9999] flex items-center gap-[20px] py-[15px] px-[30px]">
          <input 
            type="text" 
            name="keyword"
            defaultValue={keywordDefault}
            placeholder="Tìm kiếm..."
            className="flex-1 outline-none text-[16px] font-[600] order-2 text-white bg-transparent"
          />
          <button
            type="submit"
            className="text-[22px] order-1 text-white"
          >
            <IoSearch />
          </button>
        </form>
      </>
    );
  }
  