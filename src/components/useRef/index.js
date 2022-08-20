const { useRef, useEffect, useState, forwardRef } = require("react");

const InputComponent = forwardRef((props, ref) => {
  return <input onChange={() => console.log(ref.current.value)} ref={ref} />;
});

const FormComponent = () => {
  const userInput = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log(userInput.current.value);
  }, [userInput]);
  return (
    <>
      <InputComponent ref={userInput} />
      <button onClick={() => setShow((prev) => !prev)}>
        {" "}
        {show ? "hide" : "show"}{" "}
      </button>
      {show && <p> {userInput?.current?.value} </p>}
    </>
  );
};

export default FormComponent;
