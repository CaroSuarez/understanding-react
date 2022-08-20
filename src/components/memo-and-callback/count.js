import { memo } from "react";

const Count = memo(({ count }) => {
  console.log("2. Count");
  return (
    <>
      <p>The count is {count} </p>
    </>
  );
});

export default Count;
