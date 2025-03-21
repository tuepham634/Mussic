import Link from "next/link";
import { FaHeart} from "react-icons/fa";
import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart from "../button/ButtonHeart";

export default function SongItem(props :any){
    const {id,image, title, singer, listen, link,audio} = props;
    return (
        <>
            <div className="flex items-center justify-between bg-[#212121] p-[10px] mb-[12px] rounded-[15px]" data-song={id}>
              <div className="w-[76px] aspect-square rounded-[10px] truncate mr-[10px]">
                <img src={image} alt={title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="mb-[2px]">
                  <Link className="font-[600] text-[16px] text-white" href={link}>{title}</Link>
                </div>
                <div className="font-[400]  text-[12px] text-[#FFFFFF80] mb-[5px]">{singer}</div>
                <div className="font-[400]  text-[12px] text-white">{listen.toLocaleString("vi-VN")} lượt nghe</div>
              </div>
              <div className="">
                <ButtonPlay {...props} className="w-[34px] h-[34px] rounded-full  border border-white inline-flex items-center  justify-center text-[15px] text-white inner-button-play"/>

                <ButtonHeart {...props}/>
              </div>
            </div>
        </>
    );
}