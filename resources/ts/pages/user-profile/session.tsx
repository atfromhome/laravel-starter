import { useForm } from "@inertiajs/react";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { IconDeviceDesktop, IconDeviceMobile } from "@tabler/icons-react";
import { Fragment } from "react/jsx-runtime";
import { Button } from "~/components/custom/button";
import { PasswordInput } from "~/components/custom/password-input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/form";
import { Alert, AlertDescription } from "~/components/ui/alert";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "~/components/ui/alert-dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import { useToast } from "~/components/ui/use-toast";
import { useToggle } from "~/hooks/use-toggle";
import { SettingProfile } from "~/pages/user-profile/components/layout";

type Browser = {
  agent: {
    browser: string;
    platform: string;
    is_desktop: boolean;
  };
  ip_address: string;
  is_current_device: boolean;
  last_active: string;
};

type PageProps = {
  browsers: Browser[];
};

export default function Page(props: PageProps) {
  const [open, toggle] = useToggle(false);
  const { toast } = useToast();

  const form = useForm({
    password: ""
  });

  return (
    <SettingProfile>
      <div className="grid gap-4">
        <Card className="shadow-none rounded-md">
          <CardHeader>
            <CardTitle>Sesi browser</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {props.browsers.map((browser: any, key: number) => (
              <Fragment key={key}>
                <div className="flex items-center gap-x-4">
                  {browser.agent.is_desktop ? (
                    <IconDeviceDesktop className="h-10 w-10" stroke={1} />
                  ) : (
                    <IconDeviceMobile className="h-10 w-10" stroke={1} />
                  )}
                  <div>
                    <p className="text-lg font-semibold">
                      {browser.agent.platform} - {browser.agent.browser}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {browser.ip_address}
                      {" - "}
                      {browser.is_current_device ? (
                        <span>Perangkat ini</span>
                      ) : (
                        <span>{browser.last_active}</span>
                      )}
                    </p>
                  </div>
                </div>
                {key !== props.browsers.length - 1 && <Separator />}
              </Fragment>
            ))}
          </CardContent>
          <CardFooter className="justify-end">
            <Button
              onClick={(e) => {
                e.preventDefault();

                toggle(true);
              }}
            >
              Logout dari browser lain
            </Button>
          </CardFooter>
        </Card>
      </div>

      <AlertDialog open={open} onOpenChange={toggle}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Kamu yakin logout di browser lain ?</AlertDialogTitle>
            <AlertDialogDescription className="grid gap-4 py-4">
              <Alert variant="destructive">
                <AlertDescription>
                  Masukan password kamu saat ini untuk keluar dari browser lain
                </AlertDescription>
              </Alert>
              <Form form={form}>
                <FormField
                  id="password"
                  name="password"
                  render={({ invalid, error, ...field }) => (
                    <FormItem>
                      <FormControl>
                        <PasswordInput
                          {...field}
                          id="password"
                          required
                          placeholder="********"
                          autoComplete="off"
                        />
                      </FormControl>
                      <FormMessage>{error}</FormMessage>
                    </FormItem>
                  )}
                />
              </Form>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tidak</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                loading={form.processing}
                onClick={(e) => {
                  e.preventDefault();

                  form.delete(route("user-browser-session.destroy"), {
                    onSuccess: () => {
                      toggle(false);

                      toast({
                        title: "Logout berhasil",
                        description: "Logout dari browser lain telah diterapkan"
                      });
                    }
                  });
                }}
              >
                Yakin
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </SettingProfile>
  );
}
