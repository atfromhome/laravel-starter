import { Fragment, ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { LoginForm } from "./components/login-form";
import { useTheme } from "~/components/theme-provider";

function Page() {
  const theme = useTheme();

  return (
    <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <Card className="mx-auto lg:w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Masukkan email Anda di bawah ini untuk login ke akun Anda.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
        </Card>
        <div className="pt-2 flex items-center justify-center">
          <img
            alt="Logo"
            src={theme.theme === "light" ? "/logo.svg" : "/logo.light.svg"}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
}

Page.layout = (page: ReactNode) => <Fragment>{page}</Fragment>;

export default Page;
