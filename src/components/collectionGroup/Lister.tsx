import { ReactNode } from "react";
type ListerProps = {
  children: ReactNode;
};
const Lister = ({ children }: ListerProps) => {
  return (
    <div className="grid grid-cols-1 space-y-3 md:space-y-0 md:grid-cols-3 md:gap-3 lg:gap-7">
      {children}
    </div>
  );
};

export default Lister;
