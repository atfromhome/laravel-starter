import { usePage } from "@inertiajs/react";
import { PageProps, Errors, ErrorBag } from "@inertiajs/core";

export interface AuthUserProps {
  user: Pick<App.Models.User, "id" | "name" | "email">;
}

export interface FortifyProps {
  features: Array<string>;
}

export interface LocationParamProps {
  filter: {
    [key: string]: unknown;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface LocationProps {
  params: LocationParamProps;
  search: string;
}

export interface UsePagePropsReturn extends PageProps {
  auth: AuthUserProps;
  fortify: FortifyProps;
  location: LocationProps;
  errors: Errors & ErrorBag;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const usePageProps = (): UsePagePropsReturn => usePage().props as UsePagePropsReturn;
