import Image from "next/image";
import React from "react";

function StreamingUser() {
  const onRenderStreamingUsers = () => {
    const streamingUserList = [
      { id: 11, user: "Uyen Phuong", title: "Healing podcast" },
      { id: 12, user: "Uyen Phuong", title: "Healing podcast" },
      { id: 13, user: "Uyen Phuong", title: "Healing podcast" },
      { id: 14, user: "Uyen Phuong", title: "Healing podcast" },
    ];
    return streamingUserList.map((user) => {
      return (
        <div key={user.id} className="flex w-full items-center gap-2">
          <div className="flex w-full cursor-pointer gap-3">
            <Image
              src="https://s3-alpha-sig.figma.com/img/c07c/b30a/5da437ab07cd5d7b134add1803f4895f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnvrjwsDT6qdaFDYOhtiYTCxRWTVR-~Fq98cPo6XwIPAuvrT4mCMHdHklJX7Y1zCzboBLvfCvQCMbBkoXtAcvSWVxa-SII1BEM4RToUY5RyvfRFlJLEbRsDqbqLRmUDrn4IhgioT8S0RTrL2xXeFIHvsghbGVS1yJsixtsj3WCJsBoyAKUgCA2PzN0HO-fZOgaZ89J7G7IUljpovLJvtDXGgLV~s-7JUD-WmGhThDXHKzbcCT7VZFwV1UzLwW~nbnY7MaAWCV6MKnFJ6FL5s4HpUNqgNUtuvBRfUwI6KjZ8Q9N8xZTufbN6UPNgXRYEOVCbnPDq2lwafPCpH6IIbyA__"
              width={5000}
              height={5000}
              alt="Author"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div className="flex w-full flex-col items-start">
              <h3 className="text-sm font-semibold text-py-orange">
                {user.title}
              </h3>
              <div className="flex w-full flex-wrap justify-between gap-3">
                <p className="text-xs">{user.user}</p>
                <p className="text-[10px] font-semibold text-gray-500">
                  12K views
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="grid w-full grid-cols-1 gap-3">
      <h2 className="font-medium text-black">Streaming now</h2>
      {onRenderStreamingUsers()}
    </div>
  );
}

export default StreamingUser;
