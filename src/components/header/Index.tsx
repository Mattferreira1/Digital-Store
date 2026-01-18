"use client";

import { useState } from "react";
import { Logo } from "../logo/Index";
import { MenuIcon, Search, ShoppingCart } from "lucide-react";
import { InputField } from "../inputField/Index";
import { NavLinks } from "./navLinks/Index";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const Header = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);
  return (
    <header className=" w-full pt-5 bg-white">
      <section className="px-7 pb-4 bg-white grid grid-cols-4 items-center sticky z-10 lg:flex lg:justify-between lg:gap-3">
        <span className="w-13 flex gap-3 items-center lg:hidden">
          <MenuIcon className="text-dark-gray w-5 h-5 lg:w-9 lg:h-9" />
        </span>

        <Logo.Root className="self-center flex gap-2 items-center col-span-2 justify-center lg:justify-self-start lg:col-span-1">
          <Logo.Icon className="text-primary w-5 h-5 lg:w-7 lg:h-7" />
          <Logo.Text className="text-xl text-primary font-semibold font-inter block lg:text-4xl" />
        </Logo.Root>

        <InputField.Root
          htmlFor="seachInput"
          className="hidden h-9/10 p-3  lg:flex justify-between items-center bg-light-gray-3 rounded-lg lg:w-4/10 xl:w-5/10 2xl:w-6/10"
        >
          <InputField.Control
            id="seachInput"
            placeholder="Pesquisar produto..."
            className="font-normal font-inter text-dark-gray-3 focus:outline-none "
          />
          <InputField.Icon icon={Search} />
        </InputField.Root>

        <nav className="hidden lg:flex gap-3 justify-center items-center">
          <Link
            href={"/register"}
            className="text-dark-gray-2 font-inter font-normal text-base leading-7 hover:underline hover:text-dark-gray-1"
          >
            Cadastre-se
          </Link>
          <button className="cursor-pointer bg-primary text-light-gray-3 text-sm font-inter font-bold px-6 py-3 rounded-lg hover:bg-primary-shadow">
            Entrar
          </button>
        </nav>
        <span className="justify-self-end w-13 flex gap-3 items-center lg:justify-self-start">
          <Search
            className={`text-${
              openSearchBar ? "primary" : "light-gray-2"
            } w-5 h-5 cursor-pointer lg:hidden`}
            aria-label="Abrir busca"
            onClick={() => setOpenSearchBar(!openSearchBar)}
          />
          <ShoppingCart className="text-light-gray-2 w-5 h-5 lg:w-6 lg:h-6 hover:text-light-gray" />
        </span>
      </section>
      <NavLinks />
      <AnimatePresence>
        {openSearchBar && (
          <motion.div
            initial={{
              translateY: -50,
              opacity: 0,
            }}
            animate={{
              translateY: 0,
              opacity: 1,
              transition: { duration: 0.7 },
            }}
            exit={{
              translateY: -50,
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            className="z-0 py-1 px-7 box-border bg-white lg:hidden"
          >
            <InputField.Root
              htmlFor="seachInputMobile"
              className="w-full h-12 p-4 flex items-center justify-between bg-light-gray-3 rounded-lg"
            >
              <InputField.Control
                id="seachInputMobile"
                placeholder="Pesquisar produto..."
                className="font-normal font-inter text-dark-gray-3 focus:outline-none "
              />
              <InputField.Icon icon={Search} />
            </InputField.Root>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
