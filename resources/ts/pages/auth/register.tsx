import { Fragment, ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { useTheme } from "~/components/theme-provider";
import { Link } from "@inertiajs/react";
import { RegisterForm } from "~/pages/auth/components/register-form";

function Page() {
  const theme = useTheme();

  return (
    <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <Card className="mx-auto lg:w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Buat akun barumu</CardTitle>
            <CardDescription>
              Masukan email dan password untuk membuat akun baru kamu, atau sudah punya akun?{" "}
              <Link href="/login" className="underline underline-offset-4 hover:text-primary">
                masuk disini
              </Link>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RegisterForm />
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
