import { Card } from "../models/home.model";
import Image from "next/image";

export default function MidiumCard({ img, title }: Card) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image src={img} layout="fill" alt="i" className="rounded-xl" />
      </div>
      <div className="text-2xl mt-3">{title}</div>
    </div>
  );
}
