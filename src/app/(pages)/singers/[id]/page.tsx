import Section2 from "./Section-2";
import Section1 from "./Section-1";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SingerDetailPage({params } :any) {
    const {id} = await params;
    return (
      <>
        {/* CardInfo */}  
        <Section1 id={id}/>
        {/* Danh sách bài hát */}
        <Section2 id={id}/>
        
      </>
    );
  }
  