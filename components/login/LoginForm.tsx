"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "يجب إدخال البريد الإلكتروني")
    .email("بريد إلكتروني غير صحيح"),
  password: z.string().min(1, "برجاء إدخال كلمة المرور"),
  remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "", remember: false },
  });

  async function onSubmit(values: LoginFormValues) {
    // setServerError(null);
    // setLoading(true);
    //
    // try {
    //   const res = await fetch("/api/auth/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(values),
    //   });
    //
    //   if (!res.ok) {
    //     const data = await res.json().catch(() => ({}));
    //     throw new Error(data?.message ?? "Login failed");
    //   }
    //
    // } catch (err: unknown) {
    //   setServerError(err instanceof Error ? err.message : "Unknown error");
    // } finally {
    //   setLoading(false);
    // }
  }

  return (
    <Card className="sm:max-w-md sm:w-full w-[calc(100vw-2rem)] mx-auto">
      <CardHeader>
        <CardTitle className="text-center">تسجيل الدخول كمعلم</CardTitle>
      </CardHeader>

      <CardContent>
        <form
          id="login-form"
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          {/* Email */}
          <div>
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              className="mt-2"
              id="email"
              type="email"
              placeholder="you@company.com"
              aria-invalid={!!errors.email}
              {...register("email")}
            />
            {errors.email && (
              <p role="alert" className="text-sm text-destructive mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label htmlFor="password">كلمة المرور</Label>
            <div className="relative mt-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="كلمة المرور الخاصة بك"
                aria-invalid={!!errors.password}
                {...register("password")}
              />
              <button
                type="button"
                className={cn(
                  "absolute left-2 top-1/2 -translate-y-1/2 text-sm opacity-70",
                  "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 rounded",
                )}
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "إخفاء" : "أظهر"}
              </button>
            </div>
            {errors.password && (
              <p role="alert" className="text-sm text-destructive mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* {/* Remember */}
          {/* <div className="flex items-center justify-between"> */}
          {/*   <div className="flex items-center space-x-2"> */}
          {/*     <Checkbox id="remember" {...register("remember")} /> */}
          {/*     <Label htmlFor="remember" className="font-normal"> */}
          {/*       Remember me */}
          {/*     </Label> */}
          {/*   </div> */}
          {/**/}
          {/*   <a href="/forgot-password" className="text-sm underline"> */}
          {/*     Forgot password? */}
          {/*   </a> */}
          {/* </div> */}

          {/* server error */}
          {serverError && (
            <p className="text-sm text-destructive">{serverError}</p>
          )}
        </form>
      </CardContent>

      <CardFooter className="flex flex-col items-center gap-2">
        <Button
          form="login-form"
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "جاري تسجيل الدخل" : "تسجيل الدخول"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
