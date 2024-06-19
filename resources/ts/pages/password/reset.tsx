import { RocketIcon } from "@radix-ui/react-icons";
import { Fragment, ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";
import { ResetPassword } from "./components/reset-form";
import { useTheme } from "~/components/theme-provider";

type Props = {
  token: string;
  email: string | undefined;
  status: string | undefined;
};

function Page(props: Props) {
  const theme = useTheme();

  return (
    <div className="container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8">
        <Card className="mx-auto lg:w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Ubah Password</CardTitle>
            <CardDescription>
              Masukan password baru Anda di bawah ini untuk mengatur ulang kata sandi.
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
              <ResetPassword />
            </div>
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
