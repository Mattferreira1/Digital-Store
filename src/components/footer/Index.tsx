import FacebookIcon from "@/assets/icons/Facebook";
import InstagramIcon from "@/assets/icons/Instagram";
import TwitterIcon from "@/assets/icons/Twitter";
import { Logo } from "../logo/Index";

const Footer = () => {
  const footerLiTextStyle = "font-inter font-normal text-base text-white";
  return (
    <footer className="bg-dark-gray">
      <div className=" px-5 py-12 grid grid-cols-2 gap-10">
        <div className="col-span-2 w-3/4 space-y-5 lg:col-span-1">
          <Logo.Root className="flex gap-2 items-center">
            <Logo.Icon className="text-white w-6 h-6 lg:w-7 lg:h-7" />
            <Logo.Text className="text-xl text-white font-semibold font-inter block lg:text-4xl" />
          </Logo.Root>
          <p className="font-inter font-medium text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <ul className="flex mt-5 gap-9">
            <li>
              <FacebookIcon className="w-5 h-5 text-white" />
            </li>
            <li>
              <InstagramIcon className="w-5 h-5 text-white" />
            </li>
            <li>
              <TwitterIcon className="w-5 h-5 text-white" />
            </li>
          </ul>
        </div>

        <div className="col-span-2 w-4/5 flex">
          <section className="w-1/2 space-y-4">
            <h3 className="font-inter font-semibold text-lg text-white">
              Informação
            </h3>
            <ul className="flex flex-col gap-2 ">
              <li className={footerLiTextStyle}>Sobre a Drip store</li>
              <li className={footerLiTextStyle}>Segurança</li>
              <li className={footerLiTextStyle}>Wishlist</li>
              <li className={footerLiTextStyle}> Blog</li>
              <li className={footerLiTextStyle}>Trabalhe conosco</li>
              <li className={footerLiTextStyle}>Meus pedidos</li>
            </ul>
          </section>

          <section className="w-1/2 space-y-4">
            <h3 className="font-inter font-semibold text-lg text-white">
              Informação
            </h3>
            <ul className="flex flex-col gap-2 mt-3">
              <li className={footerLiTextStyle}>Camisetas</li>
              <li className={footerLiTextStyle}>Calças</li>
              <li className={footerLiTextStyle}>Bonés</li>
              <li className={footerLiTextStyle}>Headphones</li>
              <li className={footerLiTextStyle}>Tênis</li>
            </ul>
          </section>
        </div>

        <div className="col-span-2 w-3/4 space-y-4 lg:col-span-1">
          <h3 className="font-inter font-semibold text-lg text-white">
            Contato
          </h3>
          <ul className="flex flex-col gap-6">
            <li className={footerLiTextStyle}>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </li>
            <li className={footerLiTextStyle}>(85) 3051-3411</li>
          </ul>
        </div>
      </div>
      <hr className="w-9/12 h-px bg-white justify-self-center" />
      <p className="py-6 bg-dark text-center font-inter font-normal text-sm text-white">
        @ 2022 Digital College
      </p>
    </footer>
  );
};

export default Footer;
