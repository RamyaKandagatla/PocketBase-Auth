import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { pb } from "../lib/pb";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import TermsModal from "../components/TermsModal";
import { mapPocketBaseErrors } from "../helper";
import Footer from "../components/Footer";
import InputWithIcon from "../components/inputs/InputWithIcon";
import BrandLogo from "../components/BrandLogo";
import userIconEdit from "../assets/userIconEdit.jpg";
import PrimaryButton from "../components/buttons/PrimaryButton";

export interface FieldErrors {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  confirm?: string;
  accept?: string;
  general?: string;
}

export default function Register() {
  const navigate = useNavigate();

  const [showTerms, setShowTerms] = useState(false);
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
    accept: false,
  });
  const [errors, setErrors] = useState<FieldErrors>({});

  const registerMutation = useMutation({
    mutationFn: async () => {
      setErrors({}); // clear previous

      // local validations
      const local: FieldErrors = {};
      if (!form.accept) local.accept = "Please accept the Terms & Conditions.";
      if (form.password !== form.confirm) local.confirm = "Passwords do not match.";

      if (Object.keys(local).length) {
        setErrors(local);
        throw Object.assign(new Error("Fix validation errors."), { local });
      }

      // PocketBase create
      return pb.collection("users").create({
        email: form.email.trim(),
        password: form.password,
        passwordConfirm: form.confirm,
        username: form.username.trim() || undefined,
        name: form.name.trim() || undefined,
      });
    },
    onSuccess: () => {
      toast.success("Account created. Please log in.");
      navigate("/login");
    },
    onError: (e: any) => {
      if (e?.local) return; // local errors already shown
      const mapped = mapPocketBaseErrors(e);
      setErrors((prev) => ({ ...prev, ...mapped }));
      toast.error(mapped.general || "Registration failed");
    },
  });

  return (
    <div className="bg-login min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-5xl rounded-[28px] bg-black/90 text-white p-8 md:p-10 shadow-2xl ring-1 ring-white/10 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-[24px] font-extrabold leading-7">
              Create <span className="font-semibold">your account!</span>
            </h1>
            <p className="mt-2 text-[13px] text-white/60">Sign up to unlock exclusive features.</p>
          </div>
          <BrandLogo className="w-36 h-auto" />
        </div>

        {/* General error */}
        {errors.general && (
          <div className="mb-4 rounded-xl bg-red-500/10 border border-red-400/40 text-red-200 p-3 text-sm">
            {errors.general}
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            registerMutation.mutate();
          }}
        >
          {/* Avatar + Full name */}
          <div className="grid grid-cols-1 md:grid-cols-[112px_1fr] gap-4 mb-4">
            {/* Avatar tile */}
            <div className="relative h-28 md:h-24 rounded-[14px] bg-[#171717] border border-white/10 flex items-center justify-center overflow-hidden">
              {/* centered placeholder avatar */}
              <img src={userIconEdit} alt="User avatar" className="w-12 h-12 opacity-50" />
            </div>

            {/* Full name */}
            <div className="flex flex-col">
              <label htmlFor="full-name" className="text-[12px] text-white/70 mb-2">
                Full Name
              </label>
              <InputWithIcon
                id="full-name"
                type="text"
                placeholder="Enter your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                invalid={!!errors.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="placeholder-transparent sm:placeholder-white/50"
              />
              {errors.name && (
                <p id="name-error" className="mt-1 text-[12px] text-red-400">
                  {errors.name}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Username */}
            <div className="flex flex-col">
              <label htmlFor="username" className="text-[12px] text-white/70 mb-2">
                Username
              </label>
              <InputWithIcon
                id="username"
                type="text"
                placeholder="Enter your username"
                value={form.username}
                onChange={(e) => setForm({ ...form, username: e.target.value })}
                invalid={!!errors.username}
                aria-invalid={!!errors.username}
                aria-describedby={errors.username ? "username-error" : undefined}
                className="placeholder-transparent sm:placeholder-white/50"
              />
              {errors.username && (
                <p id="username-error" className="mt-1 text-[12px] text-red-400">
                  {errors.username}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-[12px] text-white/70 mb-2">
                Email Address
              </label>
              <InputWithIcon
                id="email"
                type="email"
                placeholder="Enter your full email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
                invalid={!!errors.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="placeholder-transparent sm:placeholder-white/50"
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-[12px] text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-[12px] text-white/70 mb-2">
                Password
              </label>
              <InputWithIcon
                id="password"
                type="password"
                placeholder="Enter password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                invalid={!!errors.password}
                aria-invalid={!!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
                className="placeholder-transparent sm:placeholder-white/50"
              />
              {errors.password && (
                <p id="password-error" className="mt-1 text-[12px] text-red-400">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm */}
            <div className="flex flex-col">
              <label htmlFor="confirm" className="text-[12px] text-white/70 mb-2">
                Confirm Password
              </label>
              <InputWithIcon
                id="confirm"
                type="password"
                placeholder="Confirm password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                required
                invalid={!!errors.confirm}
                aria-invalid={!!errors.confirm}
                aria-describedby={errors.confirm ? "confirm-error" : undefined}
                className="placeholder-transparent sm:placeholder-white/50"
              />
              {errors.confirm && (
                <p id="confirm-error" className="mt-1 text-[12px] text-red-400">
                  {errors.confirm}
                </p>
              )}
            </div>
          </div>

          {/* Terms + submit */}
          <div className="mt-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <label className="flex items-center gap-2 text-[13px] text-white/80">
              <input
                type="checkbox"
                className={`h-4 w-4 accent-white ${
                  errors.accept ? "outline outline-1 outline-red-400 rounded-sm" : ""
                }`}
                checked={form.accept}
                onChange={(e) => setForm({ ...form, accept: e.target.checked })}
                aria-invalid={!!errors.accept}
                aria-describedby={errors.accept ? "accept-error" : undefined}
              />
              <span>
                I accept the{" "}
                <button type="button" className="underline" onClick={() => setShowTerms(true)}>
                  Terms &amp; Conditions
                </button>
              </span>
            </label>
            {errors.accept && (
              <p id="accept-error" className="text-[12px] text-red-400 md:ml-2">
                {errors.accept}
              </p>
            )}

            <PrimaryButton
              type="submit"
              disabled={registerMutation.isPending}
              className="md:w-64 flex items-center justify-center gap-2"
            >
              {registerMutation.isPending ? "Creating..." : "Create Account"}
            </PrimaryButton>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[13px]">
          <p className="text-white/70">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Log in
            </Link>
          </p>
          <Footer />
        </div>
      </div>

      {/* Terms modal */}
      <TermsModal open={showTerms} onClose={() => setShowTerms(false)} />
    </div>
  );
}
