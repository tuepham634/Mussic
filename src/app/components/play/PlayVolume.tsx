"use client"
import { FaVolumeHigh } from "react-icons/fa6";

export default function PlayVolume() {
  const handleChange = (event:any) => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    if(elementPlayAudio){
      const volume = parseFloat(event.target.value);
      const elementAudio = elementPlayAudio.querySelector(".inner-audio");
      const elementVolumeCurrent = elementPlayAudio.querySelector(".inner-volume .inner-current");
      elementAudio.volume = volume/100;
      elementVolumeCurrent.style.width = `${volume}%`;
    }
    
  }
  return (
    <>
      <div className="w-[184px] flex items-center gap-[6px] inner-volume ">
        <button className="text-[16px] text-white">
          <FaVolumeHigh />
        </button>
        <div className="flex-1 relative">
          <div className="absolute h-[3px] w-[100%] bg-[#00ADEF] rounded-[50px] left-0 top-[14px] inner-current"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={100}
            className="w-full h-[3px] bg-[#FFFFFF0A] appearance-none  rounded-[50px]  cursor-pointer range-sm inner-total"
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
