"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import CardItem from "@/app/components/card/CardItem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
//Ca sĩ nổi bật
export default function Section3() {
  const [dataFinal, setDataFinal] = useState<any>();

  useEffect(() => {
    const singersRef = ref(dbFirebase, "singers");

    onValue(singersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        //lặp qua mảng singerId xong tìm bản ghi ca sĩ có id đó
        let singersArray = Object.keys(data).map((key) => ({
            key:key,
          image: data[key].image,
          title: data[key].title,
          description:data[key].description,
          link: `/singers/${key}`,
        }));
        singersArray = singersArray.slice(0, 5);
        setDataFinal(singersArray);
      }
    });
  }, []);
  return (
    <>
      <div className=" mt-[30px]">
        <Title text="Ca sĩ nổi bật" />
      </div>
      <div className="grid grid-cols-5 gap-[20px]">
        {dataFinal && (
            dataFinal.map((item:any) => (
                <CardItem key={item.id} {...item} />
              ))
        )}
      </div>
    </>
  );
}
