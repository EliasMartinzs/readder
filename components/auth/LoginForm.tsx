"use client";

import { FormWrapper } from "@/components/reusable/FormWrapper";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormState } from "../reusable/FormState";
import { BiSolidError } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { Card } from "../ui/card";
import Image from "next/image";
import { login } from "@/actions/login";

export function LoginForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    startTransition(() => {
      login(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);

        form.reset();
      });
    });
  }

  return (
    <div className="flex-center relative lg:mt-20">
      <Card className="grid lg:grid-cols-2 max-lg:px-5 lg:w-2/4 lg:h-3/4 w-full">
        <Card className="bg-white text-background w-full">
          <FormWrapper
            href="/auth/register"
            textHref="Don`t have and account? Register"
            sso
            title="Log In"
            style="lg:p-5 max-lg:bg-background max-lg:text-white"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FormLabel>Email</FormLabel>
                      </FormControl>
                      <Input
                        {...field}
                        className="form-1"
                        type="email"
                        disabled={isPending}
                        placeholder="jonh@gmail.com"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FormLabel>password</FormLabel>
                      </FormControl>
                      <Input
                        {...field}
                        className="form-1"
                        type="password"
                        disabled={isPending}
                        placeholder="**********"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {error && (
                  <FormState
                    message={error}
                    style="text-red-500"
                    icon={<BiSolidError className="w-8 h-8" />}
                  />
                )}
                {success && (
                  <FormState
                    message={success}
                    style="text-green-500"
                    icon={<BsCheck className="w-8 h-8" />}
                  />
                )}
                <Button
                  className="border p-3 w-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                  type="submit"
                  disabled={isPending}
                >
                  Submit
                </Button>
              </form>
            </Form>
          </FormWrapper>
        </Card>
        <Card className="relative w-full h-full max-lg:hidden">
          <Image src="/login.webp" alt="login" fill className="object-cover" />
        </Card>
      </Card>
    </div>
  );
}
