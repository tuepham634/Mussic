"use client"
import { FaPlay } from "react-icons/fa";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function ButtonPlay(props: any){
    const {id,image, title, singer,audio,className=""} = props;
    const handlePlay = ()=> {
        const elementPlayAudio:any= document.querySelector(".play-audio");
        // phát nhạc
        if(elementPlayAudio){
            // chèn thêm song-id
            elementPlayAudio.setAttribute("song-id",id);
            
            const elementAudio=elementPlayAudio.querySelector(".inner-audio");
            const elementSource=elementPlayAudio.querySelector(".inner-source");
            elementSource.src=audio;
            elementAudio.load();
            elementAudio.play();
            // hiển thị khối play
            if(elementPlayAudio.classList.contains("hidden")){
                elementPlayAudio.classList.remove("hidden")
            }
            // hiện thị ảnh
            const elementImage = elementPlayAudio.querySelector(".inner-image");
            elementImage.src = image
            elementImage.alt = title
            // hiện thị title
            const elementTitle = elementPlayAudio.querySelector(".inner-title");
            elementTitle.innerHTML= title
            // hiện thị ca sĩ
            const elementSinger = elementPlayAudio.querySelector(".inner-singer");
            elementSinger.innerHTML = singer

            // Thêm class play vào cái inner-button-play
            const elementButonPlay = elementAudio.querySelector(".inner-button-play");
            if(elementButonPlay){
                elementButonPlay.classList.add("play");
            }
            // Lấy tổng thời gian

            const elementPlayTimeTotal = elementPlayAudio.querySelector(".inner-play-time .inner-total")
            const elementPlayTimeCurrent = elementPlayAudio.querySelector(".inner-play-time .inner-current")
            elementAudio.onloadedmetadata = () => {
                const totalTime =  elementAudio.duration;
                elementPlayTimeTotal.max= totalTime;
                //lấy ra thời gian hiện tại 
                elementAudio.ontimeupdate = () => {
                    const currentTime = elementAudio.currentTime;
                    elementPlayTimeTotal.value = currentTime;
                    const percent= (currentTime/totalTime)*100
                    elementPlayTimeCurrent.style.width =` ${percent}%`;
                }
            }
            
        }

    }
    return(
        <>
            <button 
                onClick={handlePlay}
                className={className}>
                <FaPlay/>
            </button>
        </>
    );
}