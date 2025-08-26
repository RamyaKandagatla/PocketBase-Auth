import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { pb } from "../lib/pb";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import BrandLogo from "../components/BrandLogo";
import InputWithIcon from "../components/inputs/InputWithIcon";
import PrimaryButton from "../components/buttons/PrimaryButton";
import RememberForgot from "../components/RememberForgot";
import sendIcon from '../assets/sendIcon.png';
import passwordImg from '../assets/password.png';
import Footer from "../components/Footer";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const loginMutation = useMutation({
    mutationFn: async ({ email, password }: typeof form) =>
      pb.collection("users").authWithPassword(email, password),
    onSuccess: () => {
      toast.success("Logged in!");
      navigate("/dashboard");
    },
    onError: (e: any) => toast.error(e?.message || "Login failed"),
  });

  return (
    <div className="bg-login min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-[28px] bg-black/90 text-white p-8 shadow-2xl ring-1 ring-white/10 relative overflow-hidden">
        {/* Header */}
        <div className="mb-6 relative z-10">
          <BrandLogo className="w-32 h-auto"/>
          <h1 className="mt-6 text-[24px] leading-7 font-extrabold">
            Log in to your account!
          </h1>
          <p className="mt-2 text-[13px] text-white/60">
            Enter your email and password to login
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            loginMutation.mutate(form);
          }}
          className="space-y-4 relative z-10"
        >
          <InputWithIcon
            type="email"
            placeholder="Enter email address.."
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            imgSrc={sendIcon}
            imgAlt="Email"
          />

          <InputWithIcon
            type="password"
            placeholder="Enter Password..."
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
            imgSrc={passwordImg}
            imgAlt="Password"
          />

          <RememberForgot />

          <PrimaryButton
            type="submit"
            loading={loginMutation.isPending}
            label="Signing in..."
          >
            Sign In to Account
          </PrimaryButton>
        </form>

        {/* Divider */}
        <div className="my-6 border-t border-white/10 relative z-10" />

        {/* Secondary / register */}
        <div className="text-center relative z-10">
          <p className="text-[13px] text-white/60 mb-3">
            Don’t have account?
          </p>
          <Link
            to="/register"
            className="block w-full h-12 rounded-[14px] border border-white/30
                       text-white font-semibold hover:bg-white/5 transition
                       leading-[48px] text-center"
          >
            Create New Account
          </Link>
        </div>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  );
}
