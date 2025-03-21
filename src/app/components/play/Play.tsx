import PlayAudio from "./PlayAudio";
import PlayInfo from "./PlayInfo";
import PlayActions from "./PlayActions";
import PlayTime from "./PlayTime";
import PlayVolume from "./PlayVolume";
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Play() {
    return (
      <>
        <div className="bg-[#212121] fixed border-t border-[#494949] bottom-0 left-0 w-full py-[20px] z-[999] hidden play-audio">
          <PlayAudio/>
          <div className="container mx-[auto] flex items-center justify-between">
            <PlayInfo/>
            <div className="flex-1 mx-[67px]">
              <PlayActions/>
              <PlayTime/>
            </div>
            <PlayVolume/>
          </div>
        </div>
      </>
    );
  }
  