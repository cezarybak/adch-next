import { SectionObjectType } from "../../types";
import Image from "next/image";

type Props = {
  heroData: SectionObjectType;
};

export const Hero = ({ heroData }: Props) => {
  const { img, text } = heroData;

  return (
    <section className="py-32 ">
      <div className="w-3/4 m-auto ">
        <div className="flex flex-col items-center justify-center gap-y-12 md:justify-between md:flex-row">
          <h1 className="text-[32px]  w-full leading-[52px] font-medium text-DARK md:w-2/5 md:text-[48px] md:leading-[64px]">
            {text}
          </h1>
          <div className="relative w-full md:w-1/2">
            <Image
              src={img!}
              alt="hero-img"
              layout="responsive"
              objectFit={"cover"}
              height={384}
              width={516}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
