import NavItem from "./NavItem";

export const NavLinks = () => {
  return (
    <nav className="px-7 border-box hidden lg:block">
      <ul className="lg:flex gap-7 ">
        <NavItem href="/home" text="Home" />
        <NavItem href="/products" text="Produtos" />
        <NavItem href="/categories" text="Categorías" />
        <NavItem href="/my-products" text="Meus Produtos" />
      </ul>
    </nav>
  );
};
