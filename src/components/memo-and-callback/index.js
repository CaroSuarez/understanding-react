import { useState, useCallback } from "react";
import Title from "./title";
import Count from "./count";
import CountButton from "./count-button";
import Year from "./year";
import YearButton from "./year-button";

const MemoAndCallback = () => {
  const title = "memo HOC and callback hook";
  const [count, setCount] = useState(0);
  const [year, setYear] = useState(2022);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementYear = useCallback(() => {
    setYear((prevYear) => prevYear + 1);
  }, []);

  return (
    <>
      <Title title={title} />
      <Count count={count} />
      <CountButton incrementCount={incrementCount} />
      <Year year={year} />
      <YearButton incrementYear={incrementYear} />
    </>
  );
};

export default MemoAndCallback;
