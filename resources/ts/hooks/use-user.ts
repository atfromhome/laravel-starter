import { usePage } from "@inertiajs/react";

export type UseUserReturn = null | Pick<App.Models.User, "id" | "name" | "email">;

export const useUser = (): UseUserReturn => {
  const props = usePage().props as any;

  return props.auth?.user as UseUserReturn;
};
