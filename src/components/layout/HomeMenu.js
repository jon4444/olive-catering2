import React from "react";
import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute -left-16 -top-[40px] text-left -z-10">
          <Image
            src={"/tomato.png"}
            width={210}
            height={190}
            alt={"salad"}
          />
        </div>
        <div className="absolute -top-[60px] -right-12 -z-10">
          <Image
            src={"/tomato2.png"} 
            width={210}
            height={195}
            alt={"salad"}
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <SectionHeaders
            subHeader={'checkout'}
            mainHeader={'Menu'}
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
        <MenuItem/>
      </div>
    </section>
  );
}
