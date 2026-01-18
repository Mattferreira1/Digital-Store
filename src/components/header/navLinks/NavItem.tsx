import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  text: string;
};
const NavItem = ({ href, text }: Props) => {
  const path = usePathname();
  // console.log(path == href);
  // console.log(path.includes(path));

  const is_Active = path == href || path.includes(path);
  return (
    <li>
      <Link
        className={`${
          is_Active ? "text-primary" : "text-dark-gray-2"
        }  font-inter font-normal text-sm leading-7 hover:underline hover:text-dark-gray`}
        href={href}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
