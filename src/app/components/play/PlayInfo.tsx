export default function PlayInfo() {
  return (
    <>
      <div className="flex items-center w-[218px]">
        <div className="w-[49px] aspect-square rounded-[14px] truncate">
          <img
            src="#"
            alt="#"
            className="w-full h-full object-cover inner-image"
          />
        </div>
        <div className="flex-1 ml-[12px]">
          <div className="text-[15px] font-[700] text-white mb-[2px] inner-title"></div>
          <div className="text-[12px] font-[700] text-[#FFFFFF70] italic inner-singer"></div>
        </div>
      </div>
    </>
  );
}
