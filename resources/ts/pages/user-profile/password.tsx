import { SettingProfile } from "~/pages/user-profile/components/layout";
import { UserPasswordForm } from "./components/form";

export default function Page() {
  return (
    <SettingProfile>
      <div className="grid gap-4">
        <UserPasswordForm />
      </div>
    </SettingProfile>
  );
}
