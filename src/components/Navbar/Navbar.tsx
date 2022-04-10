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
    <footer className="py-6 px-4 border-b-[1px] border-GRAY md:px-16">
      <div className="flex justify-between">
        <div className="flex  gap-x-1 items-center md:gap-x-[97px]">
          <Link href={"/"} passHref>
            <a aria-label="home-navigation" className="cursor-pointer ">
              <Logo className="fill-BLACK  w-[89px] h-[32px]" />
            </a>
          </Link>
          <div className="flex gap-x-6 md:gap-x-12">
            {pagesData.map(({ id, url }) => {
              const trimURL = url.replace("/", "");

              return (
                <Link key={id} href={url}>
                  <a
                    aria-label={`${trimURL}-navigation`}
                    className={`capitalize text-[12px] hover:font-medium ${
                      asPath == url &&
                      "underline underline-offset-8 decoration-2 decoration-DARK"
                    }  md:text-[16px]`}
                  >
                    {trimURL}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
        <Button content="Contact us" type="button" />
      </div>
    </footer>
  );
};
