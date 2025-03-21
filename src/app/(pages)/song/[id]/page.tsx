import Section3 from "./Section-3";
import Section1 from "./Section-1";
import Section2 from "./Section-2";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function SongDetailPage({params} :any) {
    const {id} = await params;
    return (
      <>
        {/* CardInfo */}
        <Section1 id={id}/> 
        {/* Lời bài hát */}
        <Section2 id={id}/>
        {/* Bài hát cùng danh mục */}
        <Section3 id={id}/>
      </>
    );
  }
  