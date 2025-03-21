import Link from "next/link";
import { usePathname } from "next/navigation";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function SiderMenuItem(props:any) {
    const {item,isLogin} = props;
    const pathname = usePathname();
  return (
    <>
      {(item.isLogin === isLogin || item.isLogin === undefined )&& (
        <li className=" mb-[30px] ">
          <Link
            className={`flex items-center gap-[20px] hover:text-[#00ADEF]" ${
              pathname === item.link ? "text-[#00ADEF]" : "text-white"
            }`}
            href={item.link}
          >
            <span className="text-[20px]">{item.icon}</span>
            <span className="text-[16px] font-[700] capitalize">
              {item.title}
            </span>
          </Link>
        </li>
      )}
    </>
  );
}
