import { memo } from "react";

const Title = memo(({ title }) => {
  console.log("1. title");
  return (
    <>
      <p> {title} </p>
    </>
  );
});

export default Title;
