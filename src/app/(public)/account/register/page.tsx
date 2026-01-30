"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "@/components/formInput/Index";
import { User } from "@/modules/types/types";

type RegisterInputs = User;

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<RegisterInputs>();

  const handleChangeCep = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/\D/g, "");

    if (cep.length >= 8) {
      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (!data.erro) {
          setValue("address", data.logradouro || "");
          setValue("neighborhood", data.bairro || "");
          setValue("city", data.localidade || "");
        }
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };
  const onSubmit: SubmitHandler<RegisterInputs> = (data) => {
    console.log(data);
  };
  return (
    <main className="w-full min-h-screen flex items-center px-6 py-10 bg-light-gray-3 lg:justify-center lg:py-20">
      <section className="max-w-2xl w-full">
        <h1 className="font-inter font-bold text-2xl text-dark-gray text-center mb-4">
          Criar Conta
        </h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4 bg-white p-6 rounded-lg mb-3">
            <h2 className="font-inter font-bold text-sm text-dark-gray-2">
              Informações Pessoais
            </h2>
            <hr className="bg-light-gray-3 h-0.5" />
            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="name"
              >
                Nome Completo *
              </FormInput.Label>
              <FormInput.Control
                id="name"
                type="text"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira seu nome"
                {...register("name", { required: true })}
              />
            </FormInput.Root>
            {errors.name && <span>Esse campo é obrigatório.</span>}
            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="cpf"
              >
                CPF *
              </FormInput.Label>
              <FormInput.Control
                id="cpf"
                type="text"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira seu CPF"
                {...register("cpf", { required: true })}
              />
            </FormInput.Root>
            {errors.cpf && <span>Esse campo é obrigatório.</span>}
            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="email"
              >
                Email *
              </FormInput.Label>
              <FormInput.Control
                id="email"
                type="email"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira seu email"
                {...register("email", { required: true })}
              />
            </FormInput.Root>
            {errors.email && <span>Esse campo é obrigatório.</span>}
            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="phoneNumber"
              >
                Celular *
              </FormInput.Label>
              <FormInput.Control
                id="phoneNumber"
                type="tel"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira seu celular"
                {...register("phoneNumber", { required: true })}
              />
            </FormInput.Root>
            {errors.phoneNumber && <span>Esse campo é obrigatório.</span>}
          </div>
          <div className="space-y-4 bg-white p-6 rounded-lg">
            <h2 className="font-inter font-bold text-sm text-dark-gray-2">
              Informações de Entrega
            </h2>
            <hr className="bg-light-gray-3 h-0.5" />
            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="address"
              >
                Endereço *
              </FormInput.Label>
              <FormInput.Control
                id="address"
                type="text"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira seu endereço"
                {...register("address", { required: true })}
              />
            </FormInput.Root>
            {errors.address && <span>Esse campo é obrigatório.</span>}
            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="neighborhood"
              >
                Bairro *
              </FormInput.Label>
              <FormInput.Control
                id="neighborhood"
                type="text"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira seu bairro"
                {...register("neighborhood", { required: true })}
              />
            </FormInput.Root>
            {errors.neighborhood && <span>Esse campo é obrigatório.</span>}
            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="city"
              >
                Cidade *
              </FormInput.Label>
              <FormInput.Control
                id="city"
                type="text"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira sua cidade"
                {...register("city", { required: true })}
              />
            </FormInput.Root>
            {errors.city && <span>Esse campo é obrigatório.</span>}
            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="zipCode"
              >
                CEP *
              </FormInput.Label>
              <FormInput.Control
                id="zipCode"
                type="text"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira seu CEP"
                {...register("zipCode", { required: true })}
                onChange={(e) => {
                  register("zipCode").onChange(e);
                  handleChangeCep(e);
                }}
              />
            </FormInput.Root>
            {errors.zipCode && <span>Esse campo é obrigatório.</span>}

            <FormInput.Root>
              <FormInput.Label
                className="text-xs font-inter font-bold text-dark-gray-2"
                htmlFor="complement"
              >
                Complemento
              </FormInput.Label>
              <FormInput.Control
                id="complement"
                type="text"
                className="w-full px-3 py-5 rounded-lg text-base font-inter text-dark-gray-3 tracking-wider bg-light-gray-2"
                placeholder="Insira o complemento (opcional)"
                {...register("complement")}
              />
            </FormInput.Root>
            {errors.complement && <span>Esse campo é obrigatório.</span>}
          </div>
          <div className="flex w-full p-3 gap-2 items-start">
            <input type="checkbox" name="terms" id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-inter text-dark-gray-2 font-medium leading-5"
            >
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-primary rounded-lg py-4 text-white font-bold font-inter text-base"
          >
            Criar Conta
          </button>
        </form>
      </section>
    </main>
  );
};

export default page;
