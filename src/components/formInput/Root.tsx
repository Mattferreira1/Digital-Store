import React, { ComponentProps } from "react";

type Props = ComponentProps<"input">;

const Root = (props: Props) => {
  return <div className="flex flex-col gap-2" {...props} />;
};

export default Root;
