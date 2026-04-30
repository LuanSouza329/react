import React from "react";

interface btnProps{
    text: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>
}
const Btn = React.memo(function Btn({ text, handleClick }: btnProps) {
  console.log("render filho");
  return <button onClick={handleClick}>{text}</button>;
});

export default Btn;