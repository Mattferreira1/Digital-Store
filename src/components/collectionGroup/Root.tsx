import { ReactNode } from "react";
type RootProps = {
  children: ReactNode;
};
const Root = ({ children }: RootProps) => {
  return (
    <section className="w-full  ">
      <h2 className="pb-2 text-base font-inter font-bold text-dark-gray-2">
        Coleções em destaque
      </h2>
      {children}
    </section>
  );
};

export default Root;
