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
        <div className="flex items-center justify-between">
          <h1 className="text-[48px] w-1/2 mr-12 leading-[64px] font-medium text-DARK ">
            {text}
          </h1>
          <Image src={img!} alt="hero-img" width={516} height={384} />
        </div>
      </div>
    </section>
  );
};
