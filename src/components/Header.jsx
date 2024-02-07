import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-[50px] bg-black">
      <h1 className="ml-5">
        <a href="/" className="font-publicaplay font-bold text-white text-xl">
          Asin ASHIRLI
        </a>
      </h1>
      <ul className="flex mr-5">
        <li className="p-3">
          <a
            href="/convert"
            className="text-white font-euclid border-transparent border-b hover:border-white duration-200"
          >
            Convert
          </a>
        </li>
        <li className="p-3">
          <a
            href="/latest"
            className="text-white font-euclid border-transparent border-b hover:border-white duration-200"
          >
            Latest
          </a>
        </li>
        <li className="p-3">
          <a
            href="/historical"
            className="text-white font-euclid border-transparent border-b hover:border-white duration-200"
          >
            Historical
          </a>
        </li>
        <li className="p-3">
          <a
            href="/currencies"
            className="text-white font-euclid border-transparent border-b hover:border-white duration-200"
          >
            Currencies
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
