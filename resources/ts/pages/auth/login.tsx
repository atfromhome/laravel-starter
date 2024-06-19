import { Fragment, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "~/components/ui/card";
import { LoginForm } from "./components/login-form";
import { useTheme } from "~/components/theme-provider";
import { Link } from "@inertiajs/react";
import { useFortifyFeature } from "~/hooks/use-fortify";

function Page() {
  const feature = useFortifyFeature();
  const theme = useTheme();

  return (
    <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <Card className="mx-auto lg:w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Masuk akunmu</CardTitle>
            <CardDescription>
              Masukkan email Anda di bawah ini untuk login ke akun Anda.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
            {feature.registration && (
              <CardDescription className="pt-4">
                Belum punya akun?{" "}
                <Link href="/register" className="underline underline-offset-4 hover:text-primary">
                  Kamu bisa buat satu disini
                </Link>
              </CardDescription>
            )}
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
