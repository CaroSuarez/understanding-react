// as this component receives a function as a prop, memo HOC does not work to prevent
// re-render when props don't change, because, on every render de function is not the same.
// So, in this case, it is available the useCallback hook, that saves the function and its reference
// to be aware  if changes or not.

import { memo } from "react";

// The useCallback hook must be wrapping the function definition.

const CountButton = memo(({ incrementCount }) => {
  console.log("3. Count button");
  return (
    <>
      <button onClick={incrementCount}>Increment Count</button>
    </>
  );
});

export default CountButton;
