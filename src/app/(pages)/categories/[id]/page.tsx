import Section2 from "./Section-2";
import Section1 from "./Section-1";

export default async function SongsByCategoryPage({params } :any) {
  const {id} = await params;
  console.log(id);
    return (
      <>
        {/* CardInfo */}
        <Section1 id ={id}/>
        {/* Section-2 */}
        <Section2 id ={id} />
      </>
    );
  }
  