import { Explore } from "../models/home.model";
import Image from "next/image";

export default function SmallCard({ img, location, distance }: Explore) {
  return (
    <div>
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} layout="fill" alt="d" className="rounded-lg" />
      </div>
      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}
