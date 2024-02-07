import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center w-7/12 h-[500px] border border-black border-opacity-25 rounded shadow-2xl bg-white">
          <div className="text-center w-3/4">
            <h1 className="font-publicaplay font-medium text-4xl p-3">
              BY <span className="font-bold ">Asin ASHIRLI</span>
            </h1>
            <h2 className="font-euclid font-medium text-2xl p-2">
              Real Time CURRENCY APP
            </h2>
            <p className="font-euclid font-normal text-lg p-2">
              This application will give you the{" "}
              <a
                href="/latest"
                className="font-semibold  text-blue-800 border-b border-transparent border-blue-800"
              >
                LATEST
              </a>{" "}
              and{" "}
              <a
                href="/historical"
                className="font-semibold text-blue-800 border-b border-transparent border-blue-800"
              >
                HISTORICAL
              </a>{" "}
              exchange rate information. It will also help you{" "}
              <a
                href="/convert"
                className="font-semibold  text-blue-800 border-b border-transparent border-blue-800"
              >
                CONVERT THE CURRENCY{" "}
              </a>{" "}
              you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
