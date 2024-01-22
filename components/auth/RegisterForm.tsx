"use client";

import { register } from "@/actions/register";
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
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormState } from "../reusable/FormState";
import { BiSolidError } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { Card } from "../ui/card";
import Image from "next/image";
import Link from "next/link";
import Loading from "../reusable/Loading";

export function RegisterForm() {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    startTransition(() => {
      register(values).then((data) => {
        setError(data?.error);
        setSuccess(data?.success);

        form.reset();
      });
    });
  }

  return (
    <div className="lg:mt-20 flex-center relative">
      <Card className="grid lg:grid-cols-2 max-lg:px-5 lg:w-2/4 lg:h-3/4 w-full">
        <Card className="relative w-full h-full">
          <Image
            src="/register.webp"
            alt="login"
            fill
            className="object-cover"
          />
        </Card>

        <Card className="bg-white text-background">
          <FormWrapper
            href="/auth/login"
            textHref="Already a member? Log in"
            sso
            title="Join Readder"
            style="lg:p-5 max-lg:bg-background max-lg:text-white"
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FormLabel>Add your name</FormLabel>
                      </FormControl>
                      <Input
                        {...field}
                        placeholder="Jonh doe"
                        className="form-1"
                        disabled={isPending}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FormLabel>Add your email</FormLabel>
                      </FormControl>
                      <Input
                        {...field}
                        placeholder="jonhdoe@gmail.com"
                        className="form-1"
                        type="email"
                        disabled={isPending}
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
                        <FormLabel>Chose a password</FormLabel>
                      </FormControl>
                      <Input
                        {...field}
                        placeholder="********"
                        className="form-1"
                        type="password"
                        disabled={isPending}
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
                  className="border p-3 w-full hover:border-blue-500 transition-colors"
                  type="submit"
                  disabled={isPending}
                >
                  {form.formState.isSubmitting ? (
                    <Loading size="sm" />
                  ) : (
                    "Submit"
                  )}
                </Button>
              </form>
            </Form>
          </FormWrapper>
        </Card>
      </Card>
    </div>
  );
}
