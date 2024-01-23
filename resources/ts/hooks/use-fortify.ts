import { usePage } from "@inertiajs/react";
import { useCallback } from "react";

export const FortifyFeature = {
  "update-passwords": "update-passwords",
  "update-profile-information": "update-profile-information",
  "email-verification": "email-verification",
  "reset-passwords": "reset-passwords",
  registration: "registration"
};

export const useFortifyFeature = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { props }: any = usePage();

  const hasFeature = useCallback(
    (feature: string) => {
      const items: string[] = props.fortify.features || [];

      return items.findIndex((item) => item === feature) !== -1;
    },
    [props.fortify.features]
  );

  const updatePasswords = hasFeature("update-passwords");
  const updateProfileInformation = hasFeature("update-profile-information");
  const emailVerification = hasFeature("email-verification");
  const resetPasswords = hasFeature("reset-passwords");
  const registration = hasFeature("registration");

  return {
    updatePasswords,
    updateProfileInformation,
    emailVerification,
    resetPasswords,
    registration
  };
};
