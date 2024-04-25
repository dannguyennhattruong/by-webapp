import Image from "next/image";
import React from "react";

function Author() {
  return (
    <div className="flex cursor-pointer gap-3">
      <Image
        src="https://s3-alpha-sig.figma.com/img/c07c/b30a/5da437ab07cd5d7b134add1803f4895f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnvrjwsDT6qdaFDYOhtiYTCxRWTVR-~Fq98cPo6XwIPAuvrT4mCMHdHklJX7Y1zCzboBLvfCvQCMbBkoXtAcvSWVxa-SII1BEM4RToUY5RyvfRFlJLEbRsDqbqLRmUDrn4IhgioT8S0RTrL2xXeFIHvsghbGVS1yJsixtsj3WCJsBoyAKUgCA2PzN0HO-fZOgaZ89J7G7IUljpovLJvtDXGgLV~s-7JUD-WmGhThDXHKzbcCT7VZFwV1UzLwW~nbnY7MaAWCV6MKnFJ6FL5s4HpUNqgNUtuvBRfUwI6KjZ8Q9N8xZTufbN6UPNgXRYEOVCbnPDq2lwafPCpH6IIbyA__"
        width={5000}
        height={5000}
        alt="Author"
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col items-start">
        <h3 className="text-sm font-semibold">Lii Lii</h3>
        <p className="text-xs text-py-orange">US-UK Music list</p>
      </div>
    </div>
  );
}

export default Author;
