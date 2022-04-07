import { SectionObjectType } from "../../types";
import QuotationMark from "./../../assets/QuotationMark.svg";

type Props = {
  testimonialsData: SectionObjectType;
};

export const Testimonials = ({ testimonialsData }: Props) => {
  const { text, author } = testimonialsData;

  return (
    <section className="py-32 bg-black ">
      <div className="w-3/4 m-auto ">
        <div className="flex flex-col text-[24px] font-normal justify-center text-white gap-y-12 ">
          <QuotationMark />
          <h2 className="text-GRAY leading-[40px] mr-[108px] ">{text}</h2>
          <span className="text-BLACK-DARK leading-[29px] ">{author}</span>
        </div>
      </div>
    </section>
  );
};
