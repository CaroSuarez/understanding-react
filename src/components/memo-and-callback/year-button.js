import { memo } from "react";

const YearButton = memo(({ incrementYear }) => {
  console.log("5. Years button");
  return (
    <>
      <button onClick={incrementYear}>Increment Year</button>
    </>
  );
});

export default YearButton;
