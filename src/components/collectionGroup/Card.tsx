import { ComponentProps, ReactNode } from "react";
type CardProps = {
  props?: ComponentProps<"div">;
  children: ReactNode;
  text: string;
  discount: number;
};

const Card = ({ children, props, text, discount }: CardProps) => {
  return (
    <div
      className="w-full h-55 p-5 z-10  justify-self-center bg-lightBlue rounded-lg overflow-hidden relative space-y-3 col-span-1 max-w-full"
      {...props}
    >
      <p className="w-22 px-3 py-2 z-10  relative rounded-3xl font-bold font-inter text-dark-gray-2 text-sm bg-lightYellow text-center">
        {discount}% OFF
      </p>
      <h2 className="font-bold  z-10 font-inter relative text-3xl text-dark-gray w-45 tracking-wider">
        {text}
      </h2>
      <button className="cursor-pointer z-10 relative text-primary bg-white text-sm font-inter font-bold px-8 py-4 rounded-lg hover:bg-light-gray-3">
        Comprar
      </button>
      {children}
    </div>
  );
};

export default Card;
