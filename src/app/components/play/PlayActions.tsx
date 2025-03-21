"use client"
import { FaPause, FaPlay } from "react-icons/fa";
import { FaBackwardStep, FaForwardStep } from "react-icons/fa6";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PlayActions() {
    const handlePlay = () => {
        const elementPlayAudio: any = document.querySelector(".play-audio");
        if(elementPlayAudio){
            const elementButtonPlay = elementPlayAudio.querySelector(".inner-button-play");
            const elementAudio = elementPlayAudio.querySelector(".inner-audio")
            if(elementButtonPlay.classList.contains("play")){
                elementButtonPlay.classList.remove("play");
                elementAudio.pause();
            }else {
                elementButtonPlay.classList.add("play");
                elementAudio.play();
            }
        }
    }
    const handlePrevious = () => {
      const elementPlayAudio:any= document.querySelector(".play-audio");
      const idSongCurrent = elementPlayAudio.getAttribute("song-id");
      if(idSongCurrent){
        const songList = document.querySelector("[song-list]");
        if(songList){
          const elemmentSongCurrent:any = songList.querySelector(`[data-song="${idSongCurrent}"]`);
          const elemmentSongPre = elemmentSongCurrent.previousElementSibling;
          if(elemmentSongPre){
            const buttonPlay = elemmentSongPre.querySelector(".inner-button-play");
            buttonPlay.click();
          }
        }
      }
    }
    const handleNext = () => {
      const elementPlayAudio:any= document.querySelector(".play-audio");
      const idSongCurrent = elementPlayAudio.getAttribute("song-id");
      if(idSongCurrent){
        const songList = document.querySelector("[song-list]");
        if(songList){
          const elemmentSongCurrent:any = songList.querySelector(`[data-song="${idSongCurrent}"]`);
          const elemmentSongNext = elemmentSongCurrent.nextElementSibling;
          if(elemmentSongNext){
            const buttonPlay = elemmentSongNext.querySelector(".inner-button-play");
            buttonPlay.click();
          }
        }
      }
    }
  return (
    <>
      <div className="flex items-center justify-center ">
        <button className="text-[16px] text-white " onClick={handlePrevious}>
          <FaBackwardStep />
        </button>
        <button 
            onClick={handlePlay}
            className="text-[16px] text-white w-[32px] h-[32px] bg-[#00ADEF] rounded-[100%]  inline-flex items-center justify-center mx-[42px] inner-button-play play"
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause" />
        </button>
        <button className="text-[16px] text-white" onClick={handleNext}>
          <FaForwardStep />
        </button>
      </div>
    </>
  );
}
