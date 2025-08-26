type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  label?: string;
};

export default function PrimaryButton({
  loading,
  label,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      {...rest}
      disabled={loading || rest.disabled}
      className={[
        "w-full h-12 rounded-[14px] bg-white text-black font-semibold",
        "hover:bg-white/90 transition disabled:opacity-60",
        className,
      ].join(" ")}
    >
      {loading ? label ?? "Please wait..." : children ?? label}
    </button>
  );
}
