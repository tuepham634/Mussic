import Link from "next/link";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function CardItem(props: any) {
    const {image, title,description, link} = props;
    return(
        <>
           <div className="">
            <Link href={link} className="">
                <div className="w-full aspect-square rounded-[15px] truncate mb-[10px]">
                    <img src={image} alt={title}  className="w-full h-full object-cover"/>
                </div>
                <div className="text-white font-[700] text-[14px] mb-[10px] line line-clamp-1">{title}</div>
                <div className="font-[400] text-[12px] text-[#FFFFFF80] line-clamp-1">{description}</div>
            </Link>
           </div>
        </>
    );
}