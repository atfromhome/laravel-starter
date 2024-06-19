import { useForm } from "@inertiajs/react";
import { Fragment } from "react";
import { Button } from "~/components/custom/button";
import { PasswordInput } from "~/components/custom/password-input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/form";
import { Alert, AlertDescription } from "~/components/ui/alert";
import {
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from "~/components/ui/alert-dialog";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { useToggle } from "~/hooks/use-toggle";
import { useUser } from "~/hooks/use-user";

const UpdateEmailForm = () => {
  const user = useUser();
  const { toast } = useToast();

  const form = useForm({
    email: user?.email || "",
    name: user?.name || ""
  });

  return (
    <Form
      form={form}
      onSubmit={(e) => {
        e.preventDefault();

        form.put(route("user-profile-information.update"), {
          onSuccess: () =>
            toast({
              title: "Ubah profil",
              description: "Profil anda telah diperbarui"
            })
        });
      }}
    >
      <Card className="shadow-none rounded-md">
        <CardHeader>
          <CardTitle>Ubah Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <FormField
              id="name"
              name="name"
              render={({ invalid, error, ...field }) => (
                <FormItem>
                  <FormLabel htmlFor="name" invalid={invalid}>
                    Nama
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="name"
                      required
                      placeholder="Your name"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage>{error}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              id="email"
              name="email"
              render={({ invalid, error, ...field }) => (
                <FormItem>
                  <FormLabel htmlFor="email" invalid={invalid}>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="email"
                      required
                      placeholder="mail@example.com"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage>{error}</FormMessage>
                </FormItem>
              )}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button loading={form.processing} type="submit">
            Ubah profile
          </Button>
        </CardFooter>
      </Card>
    </Form>
  );
};

UpdateEmailForm.displayName = "UpdateEmailForm";

const DeleteUserAccount = () => {
  const [open, toggle] = useToggle(false);

  const form = useForm({
    password: ""
  });

  return (
    <Form form={form}>
      <Card className="shadow-none rounded-md">
        <CardHeader>
          <CardTitle>Hapus Akun</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <Alert variant="destructive">
              <AlertDescription>
                Masukkan password untuk menghapus akunmu, semua data terkait akunmu akan dihapus dan
                tidak dapat dikembalikan.
              </AlertDescription>
            </Alert>

            <FormField
              id="password"
              name="password"
              render={({ invalid, error, ...field }) => (
                <FormItem>
                  <FormLabel htmlFor="password" invalid={invalid}>
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="password"
                      type="password"
                      required
                      placeholder="********"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage>{error}</FormMessage>
                </FormItem>
              )}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button
            variant="destructive"
            type="button"
            onClick={(e) => {
              e.preventDefault();

              toggle(true);
            }}
          >
            Hapus Akun
          </Button>
        </CardFooter>
      </Card>
      <AlertDialog open={open} onOpenChange={toggle}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Kamu yakin akan menghapus akunmu?</AlertDialogTitle>
            <AlertDialogDescription>
              Ingat kamu akan menghapus semua data terkait akunmu, dan ini tidak dapat dikembalikan
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Tidak</AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button
                loading={form.processing}
                onClick={(e) => {
                  e.preventDefault();

                  form.delete(route("user-profile-information.destroy"), {
                    onSuccess: () => toggle(false),
                    onError: () => toggle(false)
                  });
                }}
              >
                Yakin
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Form>
  );
};

DeleteUserAccount.displayName = "DeleteUserAccount";

const UserPasswordForm = () => {
  const { toast } = useToast();

  const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: ""
  });

  return (
    <Form
      form={form}
      onSubmit={(e) => {
        e.preventDefault();

        form.put(route("user-password.update"), {
          onSuccess: () => {
            form.reset();

            toast({
              title: "Ubah kata sandi",
              description: "Kata sandi anda telah diperbarui"
            });
          }
        });
      }}
    >
      <Card className="shadow-none rounded-md">
        <CardHeader>
          <CardTitle>Ubah kata sandi</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <FormField
              id="current_password"
              name="current_password"
              render={({ invalid, error, ...field }) => (
                <FormItem>
                  <FormLabel htmlFor="current_password" invalid={invalid}>
                    Password saat ini
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      required
                      id="current_password"
                      placeholder="********"
                      autoComplete="off"
                    />
                  </FormControl>
                  <FormMessage>{error}</FormMessage>
                </FormItem>
              )}
            />
            <div className="flex flex-grow items-start justify-stretch space-x-4">
              <FormField
                id="password"
                name="password"
                render={({ invalid, error, ...field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="password" invalid={invalid}>
                      Password baru
                    </FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        required
                        id="password"
                        placeholder="********"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage>{error}</FormMessage>
                  </FormItem>
                )}
              />
              <FormField
                id="password_confirmation"
                name="password_confirmation"
                render={({ invalid, error, ...field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="password_confirmation" invalid={invalid}>
                      Konfirmasi password baru
                    </FormLabel>
                    <FormControl>
                      <PasswordInput
                        {...field}
                        required
                        id="password_confirmation"
                        placeholder="********"
                        autoComplete="off"
                      />
                    </FormControl>
                    <FormMessage>{error}</FormMessage>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-end">
          <Button loading={form.processing} type="submit">
            Ubah kata sandi
          </Button>
        </CardFooter>
      </Card>
    </Form>
  );
};

UserPasswordForm.displayName = "UserPasswordForm";

export { UpdateEmailForm, DeleteUserAccount, UserPasswordForm };
