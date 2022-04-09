import Link from "next/link";
import { useRouter } from "next/router";
import { GetPagesType } from "../../types";
import Button from "../Button";
import Logo from "./../../assets/Logo.svg";

type Props = {
  pagesData: GetPagesType;
};

export const Navbar = ({ pagesData }: Props) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <footer className="py-6 px-16 border-b-[1px] border-GRAY">
      <div className="flex justify-between">
        <div className="flex gap-x-[97px] items-center">
          <Link href={"/"} passHref>
            <a className="cursor-pointer ">
              <Logo className="fill-BLACK  w-[89px] h-[32px]" />
            </a>
          </Link>
          <div className="flex gap-x-12">
            {pagesData.map(({ id, url }) => (
              <Link key={id} href={url}>
                <a
                  className={`capitalize text-[16px] hover:font-medium ${
                    asPath == url &&
                    "underline underline-offset-8 decoration-2 decoration-DARK"
                  } `}
                >
                  {console.log("assaas", url)}
                  {url.replace("/", "")}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <Button content="Contact us" type="button" />
      </div>
    </footer>
  );
};
