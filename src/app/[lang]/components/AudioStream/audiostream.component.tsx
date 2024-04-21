"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
interface Props {
  contentLocale: {
    title: string;
    description: string;
  };
}

function AudioStreamComponent({ contentLocale }: Props) {
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
    <main className="my-10 min-h-screen">
      <div className="flex flex-col items-center bg-white py-10">
        <h1 className="text-3xl font-bold text-black">{contentLocale.title}</h1>
        <p className="italic text-gray-600">{contentLocale.description}</p>
      </div>
      <div className="flex items-center justify-between bg-white">
        <div className="flex h-[85vh] flex-col items-center justify-between gap-10 px-10 lg:flex-row">
          <div className="h-full overflow-hidden rounded-3xl lg:flex-[2]">
            <div className="relative h-full">
              <Image
                src="/default-audio-image.jpg"
                alt="Image audio"
                width={5000}
                height={5000}
                className="h-[100vh] object-cover object-center saturate-150"
              />
              <div className="absolute bottom-0 left-0 right-0 top-0 flex items-end gap-3 px-5 transition-colors duration-300 hover:bg-black/20">
                <input
                  type="text"
                  className="my-3 w-[68vw] rounded-2xl px-5 py-1 text-black"
                  placeholder="share your thinking..."
                />
                <audio
                  ref={playerRef}
                  controls
                  className="mb-2 py-3 md:mb-0"
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
          <div className="border-gray-20 h-full w-full overflow-hidden rounded-3xl border transition-shadow duration-300 hover:shadow-lg lg:flex-1">
            <div className=""></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AudioStreamComponent;
