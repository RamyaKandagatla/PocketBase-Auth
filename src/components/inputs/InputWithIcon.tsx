import { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  imgSrc?: string;
  imgAlt?: string;
  invalid?: boolean;
};

const InputWithIcon = forwardRef<HTMLInputElement, Props>(
  ({ imgSrc, imgAlt, className = "", invalid, ...rest }, ref) => {
    return (
      <div className="relative">
        {imgSrc && (
          <img
            src={imgSrc}
            alt={imgAlt || ""}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-70"
            aria-hidden={imgAlt ? undefined : true}
          />
        )}
        <input
          ref={ref}
          className={[
            "w-full h-12 rounded-[14px] bg-[#171717] border pl-11 pr-3",
            "text-sm placeholder-white/50 outline-none",
            invalid
              ? "border-red-400 focus:border-red-500"
              : "border-white/10 focus:border-white/30",
            className,
          ].join(" ")}
          {...rest}
        />
      </div>
    );
  }
);

export default InputWithIcon;
