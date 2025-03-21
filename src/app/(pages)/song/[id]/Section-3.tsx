"use client"
import SongItem2 from "@/app/components/song/SongItem2";
import Title from "@/app/components/title/Title";
import { dbFirebase } from "@/app/firebaseConfig";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function Section3(props: 
{ id: string }) {
  const { id } = props;

  const [dataFinal, setDataFinal] = useState<any>();

  useEffect(() => {
    const songsRef = ref(dbFirebase, "songs/"+id);

    onValue(songsRef, (snapshot) => {
      const data = snapshot.val();
      if(data){
        const categoryId = data.categoryId;
        if (data) {
            const songsRef = ref(dbFirebase, "songs");
            onValue(songsRef, (snapshot) => {
                const data = snapshot.val();
            //lặp qua mảng singerId xong tìm bản ghi ca sĩ có id đó
            let songsArray = Object.keys(data).map((key) => ({
              id: key,
              image: data[key].image,
              title: data[key].title,
              singer: "Hồ Quang Hiếu",
              listen: data[key].listen,
              singerId: data[key].singerId,
              categoryId: data[key].categoryId,
              time: "4:30"
            }));
            songsArray = songsArray.filter(item => item.categoryId === categoryId && item.id !== id);
            setDataFinal(songsArray);
            })
        }
      }
    });
  }, []);
  console.log(dataFinal);
  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài hát cùng danh mục" />
        <div className="">
            {dataFinal && (
                dataFinal.map((item :any) => (
                    <SongItem2 key={item.id} {...item} />
                    )
                )
                )
            }
        </div>
      </div>
    </>
  );
}
