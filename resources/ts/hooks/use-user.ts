import { usePage } from "@inertiajs/react";

export type UseUserReturn = {
  id: number;
  name: string;
  email: string;
};
export const useUser = (): UseUserReturn | null => {
  const props = usePage().props as any;

  return props.auth?.user as any;
};
