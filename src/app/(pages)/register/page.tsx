"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const handleRegister = (event:any) => {
    event.preventDefault();
    const hoTen = event.target.hoTen.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(authFirebase,email,password)
      .then((userCredential)=>{
        const user = userCredential.user
        set(ref(dbFirebase,'users/' +user.uid),{
          hoTen: hoTen
        }).then(()=>{
            router.push("/");
        });
      })
      .catch((error) => {
        console.log(error);
      })
    
  }
  return (
    <>
      <div className="w-[500px] mt-[60px] mx-auto">
        <Title text="đăng ký tài khoản" className="text-center" />
        <form 
          onSubmit={handleRegister}
          action="" 
          className=""

        >
          <div className="mb-[15px]">
            <label
              htmlFor="hoTen"
              className="block text-white font-[600] text-[14px] mb-[5px]"
            >
              <span className="">Họ và tên </span>
              <span className="text-[red]">*</span>
            </label>
            <input
              type="text"
              id="hoTen"
              className="bg-white text-[14px] font-[600] text-[#8D9396] h-[50px] w-full rounded-[6px] outline none p-[14px]"
              name="hoTen"
              placeholder="Nhập họ và tên..."
              required={true}
            />
          </div>
          <div className="mb-[15px]">
            <label
              htmlFor="email"
              className="block text-white font-[600] text-[14px] mb-[5px]"
            >
              <span className="">Email </span>
              <span className="text-[red]">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="bg-white text-[14px] font-[600] text-[#8D9396] h-[50px] w-full rounded-[6px] outline none p-[14px]"
              name="email"
              placeholder="Nhập email..."
              required={true}
            />
          </div>
          <div className="mb-[15px]">
            <label
              htmlFor="password"
              className="block text-white font-[600] text-[14px] mb-[5px]"
            >
              <span className="">Mật khẩu </span>
              <span className="text-[red]">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="bg-white text-[14px] font-[600] text-[#8D9396] h-[50px] w-full rounded-[6px] outline none p-[14px]"
              name="password"
              required={true}
            />
          </div>
          <button className="bg-[#00ADEF] h-[50px] w-full rounded-[6px] text-white text-[16px] font-[700]">
           Đăng Ký
          </button>
        </form>
      </div>
    </>
  );
}
