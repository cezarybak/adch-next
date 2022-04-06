type Props = {
  content: string;
  type: "submit" | "button";
  disabled: boolean;
};

export const Button = ({ content, type, disabled = false }: Props) => {
  return (
    <button type={type} disabled={disabled} className="">
      {content}
    </button>
  );
};
