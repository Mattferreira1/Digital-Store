import type { Metadata } from "next";
import "@/app/globals.css";
import Footer from "@/components/footer/Index";
import { Logo } from "@/components/logo/Index";


export const metadata: Metadata = {
  title: "Conta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased w-full`}>
        <header className=" w-full py-5 bg-white">
          <section className="px-7 bg-white md:px-14">
            <Logo.Root className="flex gap-2 items-center justify-center lg:justify-self-start ">
              <Logo.Icon className="text-primary w-5 h-5 lg:w-7 lg:h-7" />
              <Logo.Text className="text-xl text-primary font-semibold font-inter block lg:text-4xl" />
            </Logo.Root>
          </section>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
