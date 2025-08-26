export default function RememberForgot() {
  return (
    <div className="flex items-center justify-between text-[12px] text-white/70">
      <label className="flex items-center gap-2">
        <input type="checkbox" className="h-4 w-4 accent-white" />
        <span>Remember me</span>
      </label>
      <a href="#" className="hover:underline">
        Forgot Password?
      </a>
    </div>
  );
}
