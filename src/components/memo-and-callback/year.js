import { memo } from "react";

const Year = memo(({ year }) => {
  console.log("4. Year");
  return (
    <>
      <p>The year is {year} </p>
    </>
  );
});

export default Year;
