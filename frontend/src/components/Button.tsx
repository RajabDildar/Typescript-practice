import type { FC } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  text,
  onClick = () => console.log("Button was clicked."),
}) => {
  return <button onClick={onClick}> {text} </button>;
};

export default Button;
