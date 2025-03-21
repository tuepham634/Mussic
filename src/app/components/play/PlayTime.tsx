"use client"
export default function PlayTime() {
  const handleChange = (event:any) => {
    const input = event.target.value;
    const time = parseFloat(input);
    const elementAudio:any = document.querySelector(".play-audio .inner-audio");
    elementAudio.currentTime =time;
  }
  return (
    <>
      <div className="mt-[12px] relative inner-play-time">
        <div className="absolute h-[4px] w-[0%] bg-[#00ADEF] rounded-[50px] left-0 top-[13px] inner-current"></div>
        <input
          type="range"
          min={0}
          max={0}
          defaultValue={0}
          className="w-full h-[4px]  bg-[#FFFFFF0A] appearance-none  rounded-[50px]  cursor-pointer range-sm inner-total"
          onChange={handleChange}
        />
      </div>
    </>
  );
}
