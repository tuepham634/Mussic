"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import CardItem from "@/app/components/card/CardItem";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section1() {
  const [dataFinal, setDataFinal] = useState<any>();

  useEffect(() => {
    const categoriesRef = ref(dbFirebase, "categories");

    onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        //lặp qua mảng singerId xong tìm bản ghi ca sĩ có id đó
        let categoriesArray = Object.keys(data).map((key) => ({
          key: key,
          image: data[key].image,
          title: data[key].title,
          description: data[key].description,
          link: `/categories/${key}`,
        }));
        setDataFinal(categoriesArray);
      }
    });
  }, []);
  return (
    <>
      <div className=" mt-[30px] capitalize">
        <Title text="Danh mục bài hát" />
      </div>
      <div className="grid grid-cols-5 gap-[20px]">
        {dataFinal && (
            dataFinal.map((item : any,index:number) => (
                <CardItem key={index} {...item} />
            ))
        )}
      </div>
    </>
  );
}
