"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function AudioStreamComponent() {
  const playerRef = useRef<HTMLAudioElement | null>(null);
  const [isAudioPlayed, setIsAudioPlayed] = useState(false);

  useEffect(() => {
    void navigator.mediaDevices
      .getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
        },
      })
      .then((stream) => {
        if (playerRef.current) {
          playerRef.current.srcObject = stream;
        }
      });
  }, []);

  // const onHandleOpenMicro = () => {
  //   setIsAudioPlayed(!isAudioPlayed);
  //   isAudioPlayed ? playerRef.current?.pause() : playerRef.current?.play();
  // };

  return (
    <main className="min-h-screen bg-white flex items-center justify-between">
      <div className="flex flex-col lg:flex-row items-center justify-between px-10 h-[85vh] gap-10">
        <div className="lg:flex-[2] rounded-3xl overflow-hidden h-full">
          <div className="h-full relative">
            <Image
              src="/default-audio-image.jpg"
              alt="Image audio"
              width={5000}
              height={5000}
              className="h-[100vh] object-cover object-center saturate-150"
            />
            <div className="absolute bottom-0 right-0 left-0 gap-3 px-5 top-0 transition-colors duration-300 hover:bg-black/20 flex items-end">
              <input
                type="text"
                className="my-3 w-[68vw] rounded-2xl py-1 px-5 text-black"
                placeholder="share your thinking..."
              />
              <audio
                ref={playerRef}
                controls
                className="py-3 mb-2 md:mb-0"
              ></audio>
              {/* <div
                 onClick={onHandleOpenMicro}
                 className="p-2 m-2 rounded-full bg-white/80 hover:bg-white cursor-pointer flex justify-center items-center"
               >
                 <FontAwesomeIcon
                   icon={faMicrophoneLines}
                   className="w-5 h-5 text-lg text-black"
                 />
               </div> */}
            </div>
          </div>
        </div>
        <div className="w-full lg:flex-1 h-full rounded-3xl overflow-hidden transition-shadow duration-300 hover:shadow-lg border border-gray-20">
          <div className=""></div>
        </div>
      </div>
    </main>
  );
}

export default AudioStreamComponent;
