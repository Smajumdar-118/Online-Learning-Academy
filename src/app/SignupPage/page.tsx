"use client";
import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";
import { toast } from "react-hot-toast";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  IconUser,
  IconBrandGoogle,
  IconLoader,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignupFormDemo() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/signup", user);
      console.log(response.data.status);
      if (response.data.status === 200) {
        toast.success("Please verify Email");
        // Clear the form by resetting the user state
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });
        router.push('/verifyPage');
      } else if (response.data.status === 500) {
        toast.error("Email id Already Exists, Please Login");
        setUser({
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        });
      }
      console.log("Form submitted");
    } catch (error) {
      console.log("Signup Failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 3 && user.firstname.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="py-2 md:py-32 flex justify-center text-center dark:bg-black">
      <HoverBorderGradient
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black ">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to Aceternity
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Please Signup to save your progress and activity and make your profile to showcase
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="Sayan" type="text" value={user.firstname} onChange={(e) => setUser({ ...user, firstname: e.target.value })} />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Majumdar" type="text" value={user.lastname} onChange={(e) => setUser({ ...user, lastname: e.target.value })} />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={buttonDisabled || loading}
            >
              {loading ? (
                <IconLoader className="animate-spin h-5 w-5 mx-auto" />
              ) : (
                "Sign up →"
              )}
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconUser className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  <Link href="/LoginPage">Login</Link>
                </span>
                <BottomGradient />
              </button>
              <button
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </HoverBorderGradient>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
