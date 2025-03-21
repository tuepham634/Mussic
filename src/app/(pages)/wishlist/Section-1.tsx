"use client";
import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/Title";
import { authFirebase, dbFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Section1() {

  const [dataFinal, setDataFinal] = useState<any>();
  useEffect(() => {
    onAuthStateChanged(authFirebase, (user) => {
      if (user) {
        const userId = user.uid;
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
              audio: data[key].audio,
              wishlist: data[key].wishlist,
            }));
            songsArray = songsArray.filter((item) => item.wishlist && item.wishlist[userId]);
            setDataFinal(songsArray);
          }
        });
      }
    });
  }, []);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh sách bài hát yêu thích" />
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
