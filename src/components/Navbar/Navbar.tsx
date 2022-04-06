import Link from "next/link";
import { GetPagesType } from "../../types";
import Logo from "./../../assets/Logo.svg";

type Props = {
  navData?: GetPagesType;
};

export const Navbar = ({ navData }: Props) => {
  return (
    <footer className="py-6 px-16 border-b-[1px] border-GRAY">
      <div className="flex justify-between">
        <div className="flex gap-x-[97px] items-center">
          <Logo className="fill-BLACK  w-[89px] h-[32px]" />
          <div className="flex gap-x-12">
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        </div>
        <button className="bg-PINK py-3 px-[54px] rounded-3xl">
          Contact us
        </button>
      </div>
    </footer>
  );
};
