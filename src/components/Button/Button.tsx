type Props = {
  content: string;
  type: "submit" | "button";
  disabled?: boolean;
  onClick?: any;
};

export const Button = ({ content, type, disabled, onClick }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`${disabled && "bg-gray-200 cursor-not-allowed"} bg-PINK
      } py-3 px-[54px] cursor-pointer rounded-3xl`}
    >
      {content}
    </button>
  );
};
