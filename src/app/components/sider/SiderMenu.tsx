"use client";
import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FaHeart, FaMusic, FaPodcast, FaUser } from "react-icons/fa";
import { FaRightFromBracket } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import { TiHome } from "react-icons/ti";
import SiderMenuItem from "./SiderMenuItem";

export default function SiderMenu() {

    const [isLogin ,setIsLogin] = useState<boolean>();
    useEffect(() => {
      onAuthStateChanged(authFirebase,(user) => {
        if(user){
          setIsLogin(true);
        }else {
          setIsLogin(false);
        }
      })
    },[])
    const menu = [
        {
            icon: <TiHome />,
            title: "Trang chủ",
            link:"/"
        },
        {
            icon: <FaMusic />,
            title: "Danh mục bài hát",
            link:"/categories"
        },
        {
            icon: <FaPodcast />,
            title: "Ca sĩ",
            link:"/singers"
        },
        {
            icon: <FaHeart />,
            title: "Bài hát yêu thích",
            link:"/wishlist",
            isLogin:true
        },
        {
            icon: <FaRightFromBracket />,
            title: "Đăng xuất",
            link:"/logout",
            isLogin:true
        },
        {
            icon: <FaUser />,
            title: "Đăng nhập",
            link:"/login",
            isLogin:false
        },
        {
            icon: <HiUserAdd />,
            title: "Đăng ký",
            link:"/register",
            isLogin:false
        },
    ];
  return (
    <>
      <nav className="my-[30px] mx-[20px]">
        <ul className="">
          {menu.map((item,index)=>(
            <SiderMenuItem item={item} isLogin ={isLogin} key={index}/>
          ))
          }
        </ul>
      </nav>
    </>
  );
}
