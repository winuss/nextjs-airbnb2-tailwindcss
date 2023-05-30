"use client";
import Image from "next/image";
import {
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UsersIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker, RangeKeyDict } from "react-date-range";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setStartDate(ranges.selection.endDate);
  };

  return (
    <header
      className="sticky top-0 z-50 grid 
    grid-cols-3 bg-white shadow-md p-5 md:px-10"
    >
      {/* Left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          alt="logo"
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none
          text-sm text-gray-600 placeholder-grey-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassIcon
          className="hidden md:inline-flex
        h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-grey-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {/* Search Open */}
      {searchInput && (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
        </div>
      )}
    </header>
  );
}
