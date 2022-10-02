import { useEffect, useState } from "react";

export const Square = () => {
  const [filled, setFill] = useState(false);

  const handleOnClick = () => {
    setFill(true);
    eraseSquare();
  };

  const eraseSquare = () => setTimeout(() => setFill(false), 3000);

  useEffect(() => {
    return clearTimeout(eraseSquare);
  }, []);

  const composedClass = `square${filled ? " filled" : ""}`;

  return <div className={composedClass} onClick={handleOnClick} />;
};
