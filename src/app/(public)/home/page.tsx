"use client";
import "@/app/globals.css";
import starWarsShirt from "@/assets/images/ed5ce1c7142e724e412fea4471b52bbaf0ee4a67.png";
import shoe from "@/assets/images/a38ed2a090dc1fa5c7c729e7018c5282d02ddbca.png";
import headphone from "@/assets/images/fcafd5f49a48e0e33e95f4dd626d8c00b8d4d927.png";
import { CollectionGroup } from "@/components/collectionGroup";
import Image from "next/image";
import { useContext } from "react";
import { userContext } from "@/context/UserContext";

const page = () => {
  const User = useContext(userContext);
  console.log(User?.currentUser);

  return (
    <main className="bg-white w-full ">
      <section>Carousel</section>
      <section className="w-full px-5 py-8 lg:px-20">
        <CollectionGroup.Root>
          <CollectionGroup.Lister>
            <CollectionGroup.Card discount={30} text="Novo drop Supreme">
              <Image
                src={starWarsShirt}
                alt="A Star Wars shirt"
                className="-rotate-21 absolute z-0 w-70 h-70 object-contain -right-25 -bottom-30 "
              />
            </CollectionGroup.Card>
            <CollectionGroup.Card discount={30} text="Coleção Adidas">
              <Image
                src={shoe}
                alt="A simple shoe"
                className=" rotate-y-180 rotate-z-10 absolute z-0 w-60 h-60 object-contain -right-8 md:-right-20 lg:-right-8 -bottom-10 "
              />
            </CollectionGroup.Card>
            <CollectionGroup.Card discount={30} text="Novo Beats Bass">
              <Image
                src={headphone}
                alt="A simple headphone"
                className=" absolute z-0 w-50 h-50 object-contain rotate-z-22 -right-10 -bottom-2 md:-right-20 md:rotate-z-10 md:bottom-0 lg:-right-10 lg:-bottom-2 lg:rotate-z-22  "
              />
            </CollectionGroup.Card>
          </CollectionGroup.Lister>
        </CollectionGroup.Root>
      </section>
    </main>
  );
};

export default page;
