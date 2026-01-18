import { ComponentProps } from "react";

type Props = ComponentProps<"h1">;
const Text = (props: Props) => {
  return <h1 {...props}>Digital Store</h1>;
};

export default Text;
