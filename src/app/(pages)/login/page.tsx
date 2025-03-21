"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import Title from "@/app/components/title/Title";
import { authFirebase } from "@/app/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const handleLogin = (event: any) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;

      signInWithEmailAndPassword(authFirebase,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            if(user) {
              router.push("/")
            }
        })
        .catch(()=> {
          alert("Tài khoản hoặc mật khẩu sai");
        })
    }
    return (
      <>
        <div className="w-[500px] mt-[60px] mx-auto">
          <Title text="đăng nhập tài khoản" className="text-center"/>
          <form 
            action="" 
            className=""
            onSubmit={handleLogin}>
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
            <button className="bg-[#00ADEF] h-[50px] w-full rounded-[6px] text-white text-[16px] font-[700]">Đăng nhập</button>
          </form>
        </div>
      </>
    );
  }
  