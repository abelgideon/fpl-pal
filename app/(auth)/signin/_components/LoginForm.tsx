"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function LoginForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome back!</CardTitle>
        <CardDescription>
          Login with your GitHub or Google Account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Button className="w-full" variant={"outline"}>
          <ArrowRight className="size-4" />
          Sign in with GitHub
        </Button>
        <Button className="w-full" variant={"outline"}>
          <ArrowRight className="size-4" />
          Sign in with Google
        </Button>
      </CardContent>
    </Card>
  );
}
