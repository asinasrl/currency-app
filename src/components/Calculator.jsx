import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import Loader from "./Loader";

const Calculator = (props) => {
  const [currencies, setCurrencies] = useState();
  const [formattedDate, setFormattedDate] = useState();

  async function getCurrencies() {
    try {
      const { data } = await axios.get("https://api.fxratesapi.com/currencies");
      setCurrencies(data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit() {
    props.getData();
  }

  function handleFromCurrency(e) {
    props.setFromOption(e.target.value);
  }

  function handleAmount(e) {
    props.setAmount(e.target.value);
  }

  function handleToCurrency(e) {
    props.setToOption(e.target.value);
  }

  useEffect(() => {
    const currentDate = new Date();
    const formatted = format(currentDate, "MMM dd, yyyy HH:mm");
    setFormattedDate(formatted);

    getCurrencies();
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col justify-between w-8/12 h-[450px] border border-black border-opacity-25 rounded shadow-2xl bg-white">
        <form
          className="mx-auto w-[100%]"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {/* INPUTS */}
          <div className="flex justify-evenly items-center my-8">
            <div className="w-[27%]">
              {" "}
              <label className="font-euclid block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Amount
              </label>
              <input
                onChange={handleAmount}
                type="number"
                id="amount-input"
                aria-describedby="helper-text-explanation"
                className="font-euclid bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter an amount"
                min={0}
                required
              />
            </div>
            <div className="w-[27%]">
              {" "}
              <label className="font-euclid block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                From{" "}
              </label>
              <select
                onChange={handleFromCurrency}
                id="from-currency"
                className="font-euclid bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {/* MAPPING */}
                <option value="default">Choose a currency</option>
                {currencies &&
                  Object.keys(currencies).map((currencyCode) => {
                    var currency = currencies[currencyCode];
                    return (
                      <option key={currencyCode} value={currencyCode}>
                        {currency.name} - {currency.symbol}
                      </option>
                    );
                  })}
                {/* MAPPING */}
              </select>
            </div>
            <div className="w-[27%]">
              {" "}
              <label className="font-euclid block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                To{" "}
              </label>
              <select
                onChange={handleToCurrency}
                id="to-currencies"
                className="font-euclid bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="default">Choose a currency</option>
                {currencies &&
                  Object.keys(currencies).map((currencyCode) => {
                    var currency = currencies[currencyCode];
                    return (
                      <option key={currencyCode} value={currencyCode}>
                        {currency.name} - {currency.symbol}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          {/* INPUTS */}
          {/* CALCULATE BUTTON */}
          <div className="flex justify-center items-center mt-8 mb-4">
            <button
              onClick={() => {
                handleSubmit();
              }}
              type="button"
              className="font-euclid px-7 py-3 text-lg font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Calculate{" "}
              <svg
                className="w-[25px] h-[25px] ml-1 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z"
                  clipRule="evenodd"
                />
                <path d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
                <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
              </svg>
            </button>
          </div>
          {/* CALCULATE BUTTON */}
          <p className="font-euclid text-center text-xl">
            Real Time Exchange Rate Informations - Last updated {formattedDate}{" "}
            LST
          </p>
        </form>
        <div className="flex w-[100%] bg-bottomcolor rounded">
          <div className="w-full text-center p-5">
            <h2 className="font-euclid text-base font-bold">Result</h2>
            {props.loading ? (
              <div className="flex justify-center items-center">
                {" "}
                <Loader />
              </div>
            ) : props.result ? (
              <>
                <h1 className="font-euclid text-4xl font-bold text-blue-700">
                  ≈ {props.result.result.toFixed(2)} {props.result.query.to}
                </h1>
                <p className="font-euclid text-sm">
                  1 {props.result.query.from} ={" "}
                  {props.result.info.rate.toFixed(5)} {props.result.query.to}
                </p>
                <p className="font-euclid text-sm">
                  1 {props.result.query.to} ={" "}
                  {(1 / props.result.info.rate).toFixed(5)}{" "}
                  {props.result.query.from}
                </p>
              </>
            ) : (
              <div>
                <h1 className="font-euclid text-2xl font-semibold ">
                  To{" "}
                  <span className="font-bold text-blue-700">
                    Convert Currency
                  </span>
                  , fill in the information above.
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
