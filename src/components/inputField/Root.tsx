import { ComponentProps } from "react";

type Props = ComponentProps<"label">;

const Root = (props: Props) => {
  return <label {...props} />;
};

export default Root;
