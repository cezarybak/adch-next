import { useState } from "react";
import { sendNewsletter } from "../../services";
import Button from "../Button";

type SubmitType = {
  status: number;
  message: string;
};

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitType | undefined>();
  const [pending, setPending] = useState(false);

  const submitEmail = () => {
    setPending(true);

    sendNewsletter({ email })
      .then((e) => {
        setStatus({ message: e.data.message, status: e.status });
        setPending(false);
        setEmail("");
      })
      .catch((e) => {
        setStatus({
          message: e.response.data.message,
          status: e.response.status,
        });
        setPending(false);
      });
  };

  return (
    <section className="flex flex-col justify-center py-32">
      <div className="flex flex-col mx-auto gap-y-16 ">
        <h1 className="text-center text-BLACK leading-[56px] text-[28px] font-medium md:text-[40px]">
          Sign up for Newsletter
        </h1>
        <div className="flex flex-col gap-y-[16px] text-center md:flex-row md:gap-x-[16px]">
          <input
            value={email}
            placeholder="Type your email"
            className="bg-GRAY rounded-3xl text-[12px] placeholder-BLACK w-[360px] px-[32px] py-[14px] md:w-[416px] md:text-[16px]"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            disabled={email.length === 0 || pending}
            content={pending ? "Sending.." : "Submit"}
            type="submit"
            onClick={() => submitEmail()}
          />
        </div>
      </div>
      {status && (
        <span
          className={`${
            status.status === 200 ? "text-GREEN" : "text-red-800"
          } text-xl font-normal mt-12 leading-[22px] text-[12px] text-center md:text-[14px]`}
        >
          {status.message}
        </span>
      )}
    </section>
  );
};
