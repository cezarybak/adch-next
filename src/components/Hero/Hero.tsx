import { SectionObjectType } from "../../types";
import Image from "next/image";

type Props = {
  heroData: SectionObjectType;
};

export const Hero = ({ heroData }: Props) => {
  const { img, text } = heroData;

  return (
    <section className="py-32 ">
      <div className="w-3/4 m-auto">
        <div className="flex items-center justify-between ">
          <h1 className="text-[48px]  w-2/5   leading-[64px] font-medium text-DARK ">
            {text}
          </h1>
          <div className="relative w-1/2">
            <Image
              src={img!}
              alt="hero-img"
              layout="responsive"
              height={384}
              width={516}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
