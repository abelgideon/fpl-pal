"use client"
import { Logo } from "@/app/_components/logo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { updateTeamID } from "../action";
import { useActionState } from "react";

export function TeamIdForm() {
    const [state, action, isPending] = useActionState(updateTeamID, null);

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-7">
            <Logo />
            <Card className="md:min-w-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl">Enter your Team ID</CardTitle>
                    <CardDescription>Enter your Team ID to get started</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-3" action={action}>
                        <Input name="teamID" type="number" required placeholder="e.g. 123456" />
                        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
                        <Button className="w-full" type="submit" disabled={isPending}>
                            {isPending ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="mx-auto">
                    <CardDescription>Don't know where to get your <Link target="_blank" className="underline" href={"/get-team-id"}>Team ID</Link>?</CardDescription>
                </CardFooter>
            </Card>
        </div>
    )
}