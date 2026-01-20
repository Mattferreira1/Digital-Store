import { ComponentProps } from "react";

type Props = ComponentProps<"label">;

const Label = (props: Props) => {
  return <label {...props} />;
};

export default Label;
