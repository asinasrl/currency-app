import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Calculator from "./components/Calculator";

import axios from "axios";

function Exchanger() {
  const [result, setResult] = useState();
  const [amount, setAmount] = useState(1);
  const [fromOption, setFromOption] = useState();
  const [toOption, setToOption] = useState();
  const [loading, setLoading] = useState(false);

  async function getData() {
    const date = new Date();

    const year = date.getFullYear();
    const month =
      date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const currentDay = date.getDate() - 1;
    const day = currentDay < 10 ? `0${currentDay}` : currentDay;

    console.log(currentDay);

    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.fxratesapi.com/convert?from=${fromOption}&to=${toOption}&date=${`${year}-${month}-${day}`}&amount=${amount}&format=json`
      );
      setResult(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="grid grid-rows-[50px,1fr,50px] h-screen">
      <Header />
      <Calculator
        loading={loading}
        getData={getData}
        amount={amount}
        setAmount={setAmount}
        fromOption={fromOption}
        setFromOption={setFromOption}
        toOption={toOption}
        setToOption={setToOption}
        result={result}
      />
      <Footer />
    </div>
  );
}

export default Exchanger;
