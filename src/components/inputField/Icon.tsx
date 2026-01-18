import React, { ComponentProps, ElementType } from "react";

type Props = {
  icon: ElementType;
};

const Icon = ({ icon: Icon }: Props) => {
  return <Icon className="text-light-gray-2 w-6 h-6 lg:w-5 lg:h-5 " />;
};

export default Icon;
