"use client";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1() {
  const params = useSearchParams();
  const keywordDefault = params.get("keyword") || "";
  const [dataFinal, setDataFinal] = useState<any>();
  useEffect(() => {
    const songsRef = ref(dbFirebase, "songs");

    onValue(songsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        //lặp qua mảng singerId xong tìm bản ghi ca sĩ có id đó
        let songsArray = Object.keys(data).map((key) => ({
          id: key,
          image: data[key].image,
          title: data[key].title,
          singer: "",
          listen: data[key].listen,
          singerId: data[key].singerId,
          categoryId: data[key].categoryId,
          time: "4:30",
        }));
        const regux = new RegExp(keywordDefault, "i");
        songsArray = songsArray.filter((item) => regux.test(item.title));
        setDataFinal(songsArray);
      }
    });
  }, [keywordDefault]);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="kết quả tìm kiếm" />
        <div className="">
          {dataFinal && (
            <>
              {dataFinal.map((item: any) => (
                <SongItem2 key={item.id} {...item} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
