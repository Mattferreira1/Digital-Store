import { ComponentProps } from "react";

type Props = ComponentProps<"div">;
const Root = (props: Props) => {
  return <div {...props} />;
};

export default Root;
