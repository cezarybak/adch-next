type Props = {
  content: string;
  type: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({ content, type, disabled, onClick }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${
        disabled
          ? "bg-gray-200  hover:bg-gray-400 leading-[24px] cursor-not-allowed"
          : "bg-PINK hover:bg-PINK-HOVER cursor-pointer"
      }
      } py-3 px-[14px] text-[12px] leading-[24px] rounded-3xl md:px-[54px] md:text-[16px]`}
    >
      {content}
    </button>
  );
};
