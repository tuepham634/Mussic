export default function CardInfo(props: any) {
    const {image, title, description} = props;
  return (
    <>
      <div className="flex items-center gap-[20px]">
        <div className="w-[180px] aspect-square rounded-[15px] truncate">
          <img
            src={image}
            alt={title}
            className=" w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-[35px] font-[700] text-[#00ADEF] mb-[10px]">
           {title}
          </h1>
          <div className="text-[14px] font-[400] text-[#EFEEE0]">
            {description}
          </div>
        </div>
      </div>
    </>
  );
}
