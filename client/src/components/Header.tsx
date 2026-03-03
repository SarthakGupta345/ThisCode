"use client";

import React, { useState } from "react";
import { IoNotifications } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";

const navItems = ["Problems", "Company", "Discuss", "Progress"];

const Header = () => {
  const [selected, setSelected] = useState<string>("Company");

  return (
    <header className="bg-neutral-800 text-white">
      <div className="h-14 w-full flex items-center justify-between px-6">

        {/* LEFT SECTION */}
        <div className="flex  items-center gap-10">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <SiLeetcode className="text-yellow-500 text-2xl" />
            <span className="text-xl font-semibold tracking-wide">
              ThisCode
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8">
            {navItems.map((item) => {
              const isActive = selected === item;

              return (
                <button
                  key={item}
                  onClick={() => setSelected(item)}
                  className="relative pb-2 text-lg transition-colors duration-200"
                >
                  <span
                    className={
                      isActive
                        ? "text-white"
                        : "text-neutral-400 hover:text-neutral-200"
                    }
                  >
                    {item}
                  </span>

                  {/* Underline */}
                  {isActive && (
                    <span className="absolute left-0 bottom-0 h-[2px] w-full bg-white rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="bg-neutral-700 rounded-full px-4 py-2 w-56 text-neutral-400 text-sm">
            Search
          </div>

          {/* Notification */}
          <IoNotifications className="text-xl cursor-pointer hover:text-neutral-300 transition-colors" />

          {/* Profile */}
          <div className="bg-red-500 rounded-full h-9 w-9 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;