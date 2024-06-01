import { Fragment, ReactNode } from "react";
import { Logo } from "~/components/logo";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { ForgotPassword } from "./components/forgot-form";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

type Props = {
  status?: string | undefined;
};

function Page(props: Props) {
  return (
    <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <Card className="mx-auto lg:w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Lupa Password</CardTitle>
            <CardDescription>
              Masukkan email Anda yang terdaftar dan kami akan mengirimkan tautan untuk mengatur
              ulang kata sandi.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {props.status && (
                <Alert>
                  <RocketIcon className="h-4 w-4" />
                  <AlertTitle>Heads up!</AlertTitle>
                  <AlertDescription>{props.status}</AlertDescription>
                </Alert>
              )}
              <ForgotPassword />
            </div>
          </CardContent>
        </Card>
        <div className="pt-2 flex items-center justify-center">
          <Logo className="w-24" />
        </div>
      </div>
    </div>
  );
}

Page.layout = (page: ReactNode) => <Fragment>{page}</Fragment>;

export default Page;
