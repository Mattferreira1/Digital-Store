import { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Control = (props: Props) => {
  return <input {...props} />;
};

export default Control;
