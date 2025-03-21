import ButtonPlay from "../button/ButtonPlay";
import ButtonHeart2 from "../button/ButtonHear2";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SongItem2(props: any) {
  const { image,title,singer,time} = props;
  return (
    <>
      <div className="flex items-center justify-between px-[18px] py-[10px] bg-[#212121] rounded-[15px] mb-[10px]">
        <div className="flex items-center gap-[10px] ">
          <ButtonPlay {...props} className="text-white text-[20px]"/>
          <div className="w-[42px] aspect-square truncate rounded-[8px]">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="text-white text-[14px] font-[700]">{title}</div>
        </div>
        <div className="font-[400] text-[14px] text-white">{singer}</div>
        <div className="flex gap-[18px]">
          <div className="font-[400] text-[14px] text-white">{time}</div>
          <ButtonHeart2 {...props}/>
        </div>
      </div>
    </>
  );
}
