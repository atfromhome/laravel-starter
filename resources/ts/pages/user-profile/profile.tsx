import { SettingProfile } from "~/pages/user-profile/components/layout";
import { DeleteUserAccount, UpdateEmailForm } from "./components/form";

export default function Page() {
  return (
    <SettingProfile>
      <div className="grid gap-4">
        <UpdateEmailForm />
        <DeleteUserAccount />
      </div>
    </SettingProfile>
  );
}
