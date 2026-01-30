"use client";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import { Gmail } from "@/assets/icons/Gmail";
import { FormInput } from "@/components/formInput/Index";
import { SubmitHandler, useForm } from "react-hook-form";
import shoeFrontSide from "@/assets/images/pexels-melvin-buezo-2529148 1.png";
import shoeBackSide from "@/assets/images/pexels-melvin-buezo-2529148 2.png";
import Image from "next/image";
import { useEffect } from "react";
import { LoginInputs } from "@/modules/types/types";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log(data);
  };

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <main className="w-full h-dvh bg-linear-to-b from-linearGradient1 from-30% to-linearGradient2 grid grid-col-1 px-5 items-center justify-center md:h-[90dvh] md:px-14 lg:grid-cols-2 lg:pt-12 lg:items-start">
      <section className="w-95 h-110 bg-white flex flex-col px-8 justify-center space-y-2 lg:w-8/10">
        <div>
          <h1 className="text-2xl font-inter font-bold leading-10 text-dark-gray text-center tracking-wider lg:text-start lg:text-3xl">
            Crie sua conta
          </h1>
          <p className="text-sm font-inter font-medium text-dark-gray-2 text-center lg:text-start lg:text-base">
            Já possui uma conta? Entre <span className="underline">aqui.</span>
          </p>
        </div>
        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <FormInput.Root>
            <FormInput.Label
              className="text-xs font-inter font-bold text-dark-gray-2"
              htmlFor="email"
            >
              Email *
            </FormInput.Label>
            <FormInput.Control
              id="email"
              type="text"
              className="w-full px-3 py-5 bg-light-gray-3 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider"
              placeholder="Insira seu email"
              {...register("email", { required: true })}
            />
          </FormInput.Root>
          <FormInput.Root>
            <FormInput.Label
              className="text-xs font-inter font-bold text-dark-gray-2 "
              htmlFor="password"
            >
              Senha *
            </FormInput.Label>
            <FormInput.Control
              id="password"
              type="password"
              className="w-full px-3 py-5 bg-light-gray-3 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider"
              placeholder="Insira sua senha"
              {...register("password", { required: true })}
            />
          </FormInput.Root>
          <button
            type="submit"
            className="bg-primary font-inter font-bold text-base text-light-gray-3 rounded-lg w-full h-12 hover:bg-primary-shadow cursor-pointer"
          >
            Entrar
          </button>
        </form>
        <div className="flex flex-col items-center py-3 lg:flex-row lg:justify-center lg:gap-5">
          <p className="text-sm font-inter font-medium text-dark-gray-2 text-center lg:text-base">
            Ou faça login com
          </p>
          <div className="flex justify-center pt-2 gap-5 lg:items-center lg:pt-0">
            <Gmail className="w-6 h-6 " />

            <FacebookIcon className="w-6 h-6 " />
          </div>
        </div>
      </section>
      <section className="hidden relative w-full h-125 lg:block">
        {/* <Image
          src={shoeFrontSide}
          alt=""
          className="hidden absolute max-w-70 max-h-110 translate-x-1/2 -left-40 -top-10 lg:inline"
        />

        <Image
          src={shoeBackSide}
          alt=""
          className="hidden absolute max-w-80 max-h-110 translate-x-1/2 right-35 -bottom-5 lg:inline"
        /> */}
        <Image
          src={shoeFrontSide}
          alt=""
          className="hidden absolute  md:max-w-9/12 md:max-h-10/10 left-1/2 -translate-x-9/10 -top-10 lg:block xl:max-w-9/10 xl:max-h-250 xl:-translate-x-full"
        />

        <Image
          src={shoeBackSide}
          alt=""
          className="hidden absolute md:max-w-8/10 md:max-h-10/10 right-1/2 translate-x-9/12 -bottom-30 lg:block xl:max-w-full xl:max-h-250 xl:-bottom-50 xl:translate-x-9/12"
        />
      </section>

      {/* <section className="w-full h-120 rounded-sm justify-self-center bg-white p-8 lg:w-9/10">
        <form action="" className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <FormInput.Root>
            <FormInput.Label
              className="text-xs font-inter font-bold text-dark-gray-2 bg-light-gray-2"
              htmlFor="email"
            >
              Email *
            </FormInput.Label>
            <FormInput.Control
              id="email"
              type="text"
              className="w-full px-3 py-5 bg-light-gray-3 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider"
              placeholder="Insira seu email"
              {...register("email", { required: true })}
            />
          </FormInput.Root>
          <FormInput.Root>
            <FormInput.Label
              className="text-xs font-inter font-bold text-dark-gray-2 bg-light-gray-2"
              htmlFor="password"
            >
              Senha *
            </FormInput.Label>
            <FormInput.Control
              id="password"
              type="password"
              className="w-full px-3 py-5 bg-light-gray-3 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider"
              placeholder="Insira sua senha"
              {...register("password", { required: true })}
            />
          </FormInput.Root>
          <button
            type="submit"
            className="bg-primary font-inter font-bold text-base text-light-gray-3 rounded-lg w-full h-12 hover:bg-primary-shadow cursor-pointer"
          >
            Entrar
          </button>
        </form>
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-5">
          <p className="text-sm font-inter font-medium text-dark-gray-2 text-center lg:text-base">
            Ou faça login com
          </p>
          <div className="flex justify-center pt-5 gap-6 lg:items-center lg:pt-0">
            <Gmail className="w-6 h-6 " />

            <FacebookIcon className="w-6 h-6 " />
          </div>
        </div>
      </section> */}
      {/* <section className="hidden relative w-5/10 h-150 lg:block ">
        <Image
          src={shoeFrontSide}
          alt=""
          className="hidden absolute max-w-80 max-h-110 object-contain left-5 -top-5 lg:block"
        />
        <Image
          src={shoeBackSide}
          alt=""
          className="hidden absolute max-w-100 max-h-120 object-contain -right-35 -bottom-5  lg:block"
        />
      </section> */}
    </main>
  );
};

export default page;
